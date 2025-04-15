from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)

# Simpler CORS configuration
CORS(app, origins=["http://localhost:5173"],
     allow_headers=["Content-Type"],
     methods=["POST", "OPTIONS"])

# Load models and scaler
models = {
    'svm': pickle.load(open('svm.pkl', 'rb')),
    'decision_tree': pickle.load(open('decision_tree.pkl', 'rb')),
    'knn': pickle.load(open('knn.pkl', 'rb')),
    'random_forest': pickle.load(open('random_forest.pkl', 'rb'))
}

scaler = pickle.load(open('scaler_final.pkl', 'rb'))


@app.route('/diagnosis/<model_name>', methods=['POST'])
def diagnosis(model_name):
    try:
        if model_name not in models:
            return jsonify({
                'error': f'Model {model_name} not found'
            }), 400

        data = request.get_json()
        if not data:
            return jsonify({
                'error': 'No data provided'
            }), 400

        required_fields = [
            'pregnancies', 'glucose', 'bloodPressure', 'skinThickness',
            'insulin', 'bmi', 'diabetesPedigree', 'age'
        ]

        for field in required_fields:
            if field not in data:
                return jsonify({
                    'error': f'Missing required field: {field}'
                }), 400

        features = [
            float(data['pregnancies']),
            float(data['glucose']),
            float(data['bloodPressure']),
            float(data['skinThickness']),
            float(data['insulin']),
            float(data['bmi']),
            float(data['diabetesPedigree']),
            float(data['age'])
        ]

        features = np.array(features).reshape(1, -1)
        features_scaled = scaler.transform(features)

        prediction = models[model_name].predict(features_scaled)[0]
        accuracy = models[model_name].score(features_scaled, [prediction])
        result = 'Diabetic' if prediction == 1 else 'Not Diabetic'

        return jsonify({
            'result': result,
            'accuracy': accuracy
        })

    except ValueError as e:
        return jsonify({
            'error': f'Invalid value in input: {str(e)}'
        }), 400
    except Exception as e:
        print(f"Error processing request: {str(e)}")  # For debugging
        return jsonify({
            'error': 'Internal server error'
        }), 500


if __name__ == '__main__':
    app.run(debug=True)

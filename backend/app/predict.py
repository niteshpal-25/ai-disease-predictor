import joblib

model = joblib.load(
    "app/model/disease_model.pkl"
)

encoder = joblib.load(
    "app/model/encoder.pkl"
)

def predict_disease(symptoms):

    encoded = encoder.transform(
        [symptoms]
    )

    prediction = model.predict(
        encoded
    )[0]

    confidence = (
        max(
            model.predict_proba(encoded)[0]
        ) * 100
    )

    return {
        "disease": prediction,
        "confidence": round(confidence, 2),
        "description":
            "AI predicted disease based on symptoms.",
        "doctor":
            "General Physician"
    }
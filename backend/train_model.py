import pandas as pd
import joblib

from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import MultiLabelBinarizer

df = pd.read_csv("disease_dataset.csv")

symptoms = df["Symptoms"].apply(
    lambda x: x.split(",")
)

mlb = MultiLabelBinarizer()

X = mlb.fit_transform(symptoms)

y = df["Disease"]

model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

model.fit(X, y)

joblib.dump(
    model,
    "app/model/disease_model.pkl"
)

joblib.dump(
    mlb,
    "app/model/encoder.pkl"
)

print("Model Trained")
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_home():

    response = client.get("/")

    assert response.status_code == 200

    assert response.json() == {
        "message":
        "AI Disease Predictor API Running"
    }


def test_register():

    payload = {
        "name": "Test User",
        "email": "testuser@gmail.com",
        "password": "123456"
    }

    response = client.post(
        "/register",
        json=payload
    )

    assert response.status_code in [200, 400]


def test_login():

    payload = {
        "email": "testuser@gmail.com",
        "password": "123456"
    }

    response = client.post(
        "/login",
        json=payload
    )

    assert response.status_code == 200

    assert "access_token" in response.json()


def test_invalid_login():

    payload = {
        "email": "wrong@gmail.com",
        "password": "wrongpass"
    }

    response = client.post(
        "/login",
        json=payload
    )

    assert response.status_code == 401


def test_predict():

    payload = {
        "symptoms": [
            "Fever",
            "Cough",
            "Fatigue"
        ]
    }

    response = client.post(
        "/predict",
        json=payload
    )

    assert response.status_code == 200

    data = response.json()

    assert "disease" in data

    assert "confidence" in data
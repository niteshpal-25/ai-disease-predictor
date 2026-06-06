from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import bcrypt

from app.predict import predict_disease
from app.schemas import RegisterSchema, LoginSchema
from app.database import SessionLocal, engine, Base
from app.models import User
from app.auth import create_access_token

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "AI Disease Predictor API Running"}


@app.post("/predict")
def predict(data: dict):
    return predict_disease(data["symptoms"])


@app.post("/register")
def register(user: RegisterSchema):
    db = SessionLocal()
    try:
        existing_user = (
            db.query(User)
            .filter(User.email == user.email)
            .first()
        )

        if existing_user:
            raise HTTPException(
                status_code=400,
                detail="Email already exists"
            )

        hashed_password = bcrypt.hashpw(
            user.password.encode("utf-8"),
            bcrypt.gensalt()
        ).decode("utf-8")

        new_user = User(
            name=user.name,
            email=user.email,
            password=hashed_password
        )

        db.add(new_user)
        db.commit()

        return {"message": "Registration successful"}

    finally:
        db.close()


@app.post("/login")
def login(user: LoginSchema):
    db = SessionLocal()
    try:
        db_user = (
            db.query(User)
            .filter(User.email == user.email)
            .first()
        )

        if not db_user:
            raise HTTPException(
                status_code=401,
                detail="Invalid email or password"
            )

        if not bcrypt.checkpw(
            user.password.encode("utf-8"),
            db_user.password.encode("utf-8")
        ):
            raise HTTPException(
                status_code=401,
                detail="Invalid email or password"
            )

        token = create_access_token(
            {
                "id": db_user.id,
                "email": db_user.email
            }
        )

        return {
            "access_token": token,
            "user": {
                "id": db_user.id,
                "name": db_user.name,
                "email": db_user.email
            }
        }

    finally:
        db.close()
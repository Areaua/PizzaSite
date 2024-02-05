from flask import Flask, request, jsonify
from sqlalchemy import create_engine, Column, String, Integer
from sqlalchemy.orm import sessionmaker
from werkzeug.security import check_password_hash
from werkzeug.security import generate_password_hash
import sqlalchemy

app = Flask(__name__)

Base = sqlalchemy.orm.declarative_base()

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    lastname = Column(String, nullable=False)
    name = Column(String, nullable=False)
    patronymic = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    phone_number = Column(String, nullable=False)
    address = Column(String, nullable=False)

engine = create_engine('sqlite:///mydatabase.db', echo=True)
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()

@app.route('/api/register', methods=['POST'])
def register_user():
    data = request.json

    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "Недостаточно данных для регистрации."}), 400

    existing_user = session.query(User).filter_by(email=email).first()
    if existing_user:
        session.rollback()
        return jsonify({"error": "Користувач з такою електронною поштою вже існує."}), 400

    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')


    new_user = User(
        lastname=data.get('lastname'),
        name=data.get('name'),
        patronymic=data.get('patronymic'),
        email=email,
        password=hashed_password,
        phone_number=data.get('phone_number'),
        address=data.get('address'),
    )

    session.add(new_user)
    session.commit()

    return jsonify({"message": "Користувач успішно зареєстрований."})



@app.route('/api/login', methods=['POST'])
def login_user():
    data = request.json

    user = session.query(User).filter_by(email=data.get('email')).first()

    if user and check_password_hash(user.password, data['password']):
        return jsonify({"message": "Авторизация успешна.", "token": "ваш_токен_jwt"}), 200
    else:
        return jsonify({"error": "Неправильный email или пароль."}), 401

if __name__ == '__main__':
    app.run(debug=True)
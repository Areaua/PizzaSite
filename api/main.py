from flask import Flask, request, jsonify
from sqlalchemy import create_engine, Column, String, Integer, Enum
from sqlalchemy.orm import sessionmaker
from werkzeug.security import check_password_hash
import sqlalchemy

app = Flask(__name__)

Base = sqlalchemy.orm.declarative_base()

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    Fullname = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    Password = Column(String, nullable=False)
    PhoneNumber = Column(String, nullable=False)
    Address = Column(String, nullable=False)
    Role = Column(Enum('Клиент', 'Менеджер', 'Поставщик', name='role_enum'), nullable=False)

engine = create_engine('sqlite:///mydatabase.db', echo=True)
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()

@app.route('/api/register', methods=['POST'])
def register_user():
    data = request.json

    # Проверяем, что роль пользователя - Клиент
    if 'Role' not in data or data['Role'] != 'Клиент':
        return jsonify({"error": "Регистрация разрешена только для клиентов."}), 400

    Fullname = f"{data['Lastname']} {data['Name']} {data['Patronymic']}"

    new_user = User(
        Fullname=Fullname,
        email=data['Email'],
        Password=data['Пароль'],
        PhoneNumber=data['НомерТелефона'],
        Address=data['АдресПроживания'],
        Role=data['Роль']
    )

    session.add(new_user)
    session.commit()

    return jsonify({"message": "Пользователь успешно зарегистрирован."})

@app.route('/api/login', methods=['POST'])
def login_user():
    data = request.json

    user = session.query(User).filter_by(email=data['Email']).first()

    if user and check_password_hash(user.Password, data['Пароль']):
        return jsonify({"message": "Авторизация успешна.", "token": "ваш_токен_jwt"}), 200
    else:
        return jsonify({"error": "Неправильный email или пароль."}), 401

if __name__ == '__main__':
    app.run(debug=True)

from sqlalchemy import create_engine, Column, String, Integer, Enum
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    Name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    Password = Column(String, nullable=False)
    PhoneNumber = Column(String, nullable=False)
    Address = Column(String, nullable=False)
    Role = Column(Enum('Клиент', 'Менеджер', 'Поставщик', name='role_enum'), nullable=False)

# Путь к файлу базы данных
db_path = os.path.join(os.path.dirname(__file__), 'mydatabase.db')

# Создаем движок базы данных
engine = create_engine(f'sqlite:///{db_path}', echo=True)

# Создаем таблицы в базе данных
Base.metadata.create_all(engine)

# Создаем сессию для взаимодействия с базой данных
Session = sessionmaker(bind=engine)
session = Session()

# Закрываем сессию, чтобы завершить соединение с базой данных
session.close()

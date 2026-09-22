from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE__URL = "postgresql://postgres:Singham%40123@localhost:5432/blog_db"

engine = create_engine(DATABASE__URL)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

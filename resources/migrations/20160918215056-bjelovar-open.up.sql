CREATE TABLE participants 
( id SERIAL PRIMARY KEY,
  competition VARCHAR(100),
  name VARCHAR(255),
  surname VARCHAR(255),
  sex VARCHAR(20),
  club VARCHAR(255),
  country VARCHAR(255),
  category VARCHAR(50),
  kettlebell VARCHAR(50),
  bodyweight VARCHAR(50)
);

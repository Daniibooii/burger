-- template below --
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE songs (
id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR(45) NULL,
  genre VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

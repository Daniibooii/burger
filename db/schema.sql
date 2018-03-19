-- template below --
DROP DATABASE IF EXISTS play_listDB;

CREATE DATABASE play_listDB;

USE play_listDB;

CREATE TABLE songs (
id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR(45) NULL,
  genre VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Song", "Grimes", "Synth-Pop");

INSERT INTO songs (title, artist, genre)
VALUES ("Song", "Nirvana", "Grunge");

INSERT INTO songs (title, artist, genre)
VALUES ("song", "Guns and Roses", "Rock");






-- instructions below --
-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.

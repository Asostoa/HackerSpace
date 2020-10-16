DROP DATABASE IF EXISTS code_db;

CREATE DATABASE code_db;

USE code_db;

CREATE TABLE userCode(
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    code varchar(255) NOT NULL,
    description varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
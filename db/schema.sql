DROP DATABASE IF EXISTS cms_db;
CREATE DATABASE cms_db;

USE cms_db;
SELECT DATABASE();

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) 
    REFERENCES department(id) 
    ON DELETE SET NULL
);

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) 
    REFERENCES role(id) 
    ON DELETE SET NULL,
    FOREIGN KEY (manager_id) 
    REFERENCES employee(id) 
    ON DELETE SET NULL
);

SHOW TABLES;
DESCRIBE department;
DESCRIBE role;
DESCRIBE employee;

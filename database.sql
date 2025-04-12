CREATE DATABASE acadlyst;
USE acadlyst;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('student', 'faculty') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample users (passwords should be hashed in production)
INSERT INTO users (username, password, role) VALUES
('student1', 'student@123', 'student'),
('faculty1', 'faculty@123', 'faculty'); 
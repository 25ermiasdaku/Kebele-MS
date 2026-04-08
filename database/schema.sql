-- Core tables
CREATE TABLE roles (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50) UNIQUE, permissions JSON);
CREATE TABLE users (id INT PRIMARY KEY AUTO_INCREMENT, email VARCHAR(255) UNIQUE, password_hash VARCHAR(255), role_id INT, is_active BOOLEAN, last_login DATETIME, FOREIGN KEY (role_id) REFERENCES roles(id));
CREATE TABLE residents (id INT PRIMARY KEY AUTO_INCREMENT, user_id INT UNIQUE, first_name VARCHAR(100), last_name VARCHAR(100), date_of_birth DATE, photo_url VARCHAR(255), FOREIGN KEY (user_id) REFERENCES users(id));
CREATE TABLE addresses (id INT PRIMARY KEY AUTO_INCREMENT, resident_id INT, kebele VARCHAR(50), latitude DECIMAL(10,8), longitude DECIMAL(11,8), FOREIGN KEY (resident_id) REFERENCES residents(id));
CREATE TABLE service_requests (id INT PRIMARY KEY AUTO_INCREMENT, resident_id INT, service_id INT, status ENUM('pending','approved','rejected'), FOREIGN KEY (resident_id) REFERENCES residents(id));
CREATE TABLE generated_documents (id INT PRIMARY KEY AUTO_INCREMENT, request_id INT, file_url VARCHAR(255), qr_code_url VARCHAR(255), FOREIGN KEY (request_id) REFERENCES service_requests(id));
-- ... continue with all tables described in previous answer

drop table if exists users;
create table users(
-- id INTEGER(10),
firstName VARCHAR(40),
lastName VARCHAR(40),
DOB DATE,
country VARCHAR(50),
postalCode char(10),
city VARCHAR(50),
address VARCHAR(255),
email VARCHAR(255),
username VARCHAR(30),
pass_word VARCHAR(255),
UNIQUE(email),
UNIQUE(username)
);

select * from users;

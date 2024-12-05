DROP TABLE mysqlpass.person;

CREATE TABLE person (
    person_id varchar(500) NOT NULL PRIMARY KEY,
    person_name varchar(500),
    login_password varchar(500),
    question1 varchar(500),
    question2 varchar(500),
    question3 varchar(500),
    question4 varchar(500),
    question5 varchar(500),
    record_date date NOT NULL,
    record_user varchar(500) NOT NULL,
    create_date date NOT NULL,
    create_user varchar(500) NOT NULL
);
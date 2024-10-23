DROP TABLE mysqlpass.person;

CREATE TABLE person (
    person_id varchar(500) NOT NULL PRIMARY KEY,
    person_name varchar(500),
    record_date date NOT NULL,
    record_user varchar(500) NOT NULL,
    create_date date NOT NULL,
    create_user varchar(500) NOT NULL
);
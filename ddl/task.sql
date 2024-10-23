DROP TABLE task;

CREATE TABLE task (
    task_id varchar(500) NOT NULL PRIMARY KEY,
    task_name varchar(500),
    task_color varchar(500),
    task_start_time date,
    task_end_time date,
    task_note varchar(500),
    record_person_id varchar(500),
    record_tab_id varchar(500),
    record_date date NOT NULL,
    record_user varchar(500) NOT NULL,
    create_date date NOT NULL,
    create_user varchar(500) NOT NULL,
    FOREIGN KEY (record_person_id) REFERENCES person(person_id),
    FOREIGN KEY (record_tab_id) REFERENCES tab(tab_id)
);
DROP TABLE tab;

CREATE TABLE tab (
    tab_id varchar(500) NOT NULL PRIMARY KEY,
    tab_name varchar(500),
    tab_color varchar(500),
    tab_note varchar(500),
    record_date date NOT NULL,
    record_user varchar(500) NOT NULL,
    create_date date NOT NULL,
    create_user varchar(500) NOT NULL
);
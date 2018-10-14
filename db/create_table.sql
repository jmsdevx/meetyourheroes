CREATE TABLE authors (
    id SERIAL PRIMARY KEY NOT NULL,
    authorid integer NOT NULL,
    authorfirst VARCHAR(100),
    authorlast VARCHAR(100),
    photofile text,
    spotlight VARCHAR(2000)
);
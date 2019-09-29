
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    username character varying(80) NOT NULL UNIQUE,
    password character varying(1000) NOT NULL,
    first_name character varying(50),
    last_name character varying(50),
    administrator boolean NOT NULL DEFAULT false
);

CREATE UNIQUE INDEX user_pk ON user(id int4_ops);
CREATE UNIQUE INDEX user_username_key ON user(username text_ops);


CREATE TABLE course (
    id SERIAL PRIMARY KEY,
    name character varying(500) NOT NULL,
    description character varying(5000) NOT NULL,
    completed boolean NOT NULL DEFAULT false,
    creator_id integer NOT NULL REFERENCES user(id)
);

CREATE UNIQUE INDEX course_pk ON course(id int4_ops);


CREATE TABLE lesson (
    id SERIAL PRIMARY KEY,
    name character varying(500) NOT NULL,
    description character varying(5000) NOT NULL,
    course_id integer NOT NULL REFERENCES course(id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX lesson_pk ON lesson(id int4_ops);


CREATE TABLE content (
    id SERIAL PRIMARY KEY,
    description character varying(5000) NOT NULL,
    url character varying(5000) NOT NULL,
    lesson_id integer NOT NULL REFERENCES lesson(id) ON DELETE CASCADE,
    prior_content integer
);

CREATE UNIQUE INDEX content_pk ON content(id int4_ops);



ALTER TABLE "course" ADD CONSTRAINT "course_fk0" FOREIGN KEY ("creator_id") REFERENCES "user"("id");

ALTER TABLE "lesson" ADD CONSTRAINT "lesson_fk0" FOREIGN KEY ("course_id") REFERENCES "course"("id");

ALTER TABLE "content" ADD CONSTRAINT "content_fk0" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("id");
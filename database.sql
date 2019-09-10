
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
	"id" serial NOT NULL,
	"username" VARCHAR(80) UNIQUE NOT NULL,
	"password" VARCHAR(1000) NOT NULL,
	"first_name" VARCHAR(50) NOT NULL,
	"last_name" VARCHAR(50) NOT NULL,
	"administrator" BOOLEAN NOT NULL DEFAULT 'false',
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "course" (
	"id" serial NOT NULL,
	"name" VARCHAR(500) NOT NULL,
	"description" VARCHAR(5000) NOT NULL,
	"completed" BOOLEAN NOT NULL DEFAULT 'false',
	"creator_id" integer NOT NULL,
	CONSTRAINT "course_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "lesson" (
	"id" serial NOT NULL,
	"name" VARCHAR(500) NOT NULL,
	"description" VARCHAR(5000) NOT NULL,
	"course_id" integer NOT NULL,
	CONSTRAINT "lesson_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "content" (
	"id" serial NOT NULL,
	"description" VARCHAR(5000) NOT NULL,
	"url" VARCHAR(5000) NOT NULL,
	"lesson_id" integer NOT NULL,
	"prior_content" integer NOT NULL,
	"first_content" BOOLEAN NOT NULL DEFAULT 'false',
	CONSTRAINT "content_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "course" ADD CONSTRAINT "course_fk0" FOREIGN KEY ("creator_id") REFERENCES "user"("id");

ALTER TABLE "lesson" ADD CONSTRAINT "lesson_fk0" FOREIGN KEY ("course_id") REFERENCES "course"("id");

ALTER TABLE "content" ADD CONSTRAINT "content_fk0" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("id");
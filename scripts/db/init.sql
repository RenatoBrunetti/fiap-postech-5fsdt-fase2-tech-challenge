create table "role" (
  "id" uuid primary key,
  "name" varchar(255) not null,
  "description" varchar(255),
  "created_at" timestamp not null default current_timestamp,
  "updated_at" timestamp not null default current_timestamp
);

insert into "role" ("id", "name", "description") values
  (gen_random_uuid(), 'admin', 'Administrator with full access'),
  (gen_random_uuid(), 'student', 'Student with limited access');

create table "user" (
	"id" uuid primary key,
	"username" varchar(255) not null,
	"password" varchar(255) not null,
  "active" boolean not null default true,
	"created_at" timestamp not null default current_timestamp,
	"updated_at" timestamp not null default current_timestamp,

  "role_id" uuid not null references "role"("id") on delete cascade
);

create table "post" (
  "id" uuid primary key,
  "title" varchar(255) not null,
  "content" text not null,
  "active" boolean not null default true,
  "created_at" timestamp not null default current_timestamp,
  "updated_at" timestamp not null default current_timestamp,

  "user_id" uuid not null references "user"("id") on delete cascade
);

create table "post_log" (
  "id" uuid primary key,
  "action" varchar(255) not null,
  "created_at" timestamp not null default current_timestamp,
  "updated_at" timestamp not null default current_timestamp,

  "post_id" uuid not null references "post"("id") on delete cascade,
  "user_id" uuid not null references "user"("id") on delete cascade
);

create table if not exists "role" (
  "id" uuid primary key default gen_random_uuid(),
  "name" varchar(255) unique not null,
  "description" varchar(255),
  "created_at" timestamp not null default current_timestamp,
  "updated_at" timestamp not null default current_timestamp
);

insert into "role" ("id", "name", "description") values
  (gen_random_uuid(), 'admin', 'Administrator with full access'),
  (gen_random_uuid(), 'student', 'Student with limited access');

create table if not exists "user" (
	"id" uuid primary key default gen_random_uuid(),
	"username" varchar(255) not null,
	"password" varchar(255) not null,
  "active" boolean not null default true,
	"created_at" timestamp without time zone default current_timestamp,
	"updated_at" timestamp without time zone default current_timestamp,

  "role_id" uuid not null references "role"("id") on delete restrict -- Impede a exclusão de uma role se houver usuários associados
);

create table if not exists "post" (
  "id" uuid primary key default gen_random_uuid(),
  "title" varchar(255) not null,
  "content" text not null,
  "active" boolean not null default true,
  "created_at" timestamp without time zone default current_timestamp,
  "updated_at" timestamp without time zone default current_timestamp,

  "user_id" uuid not null references "user"("id") on delete cascade -- Se um usuário for deletado, suas postagens também serão deletadas
);

create table if not exists "post_log" (
  "id" uuid primary key default gen_random_uuid(),
  "action" varchar(255) not null, -- Ex: 'created', 'updated', 'deleted'
  "created_at" timestamp without time zone default current_timestamp,
  "updated_at" timestamp without time zone default current_timestamp,

  "post_id" uuid not null references "post"("id") on delete cascade, -- Se uma postagem for deletada, seus logs também serão deletados
  "user_id" uuid not null references "user"("id") on delete set null -- Se o usuário que realizou a ação for deletado, o user_id no log será NULL
);

INSERT INTO "user" ("id", "username", "password", "role_id")
VALUES (
  gen_random_uuid(),
  'professor',
  'senha-professor123', 
  'bf3a567a-d334-4993-bb01-f6ecf6566c21' 
);

INSERT INTO "user" ("id", "username", "password", "role_id")
VALUES (
  gen_random_uuid(),
  'aluno',
  'senha-aluno123', 
  'b13154ef-38e6-4e9d-a0e8-c2284ba0f9c4' 
);

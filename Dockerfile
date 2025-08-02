# Stage 1: Build the application
FROM node:22-alpine AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

COPY . .

# Stage 2: Create the production-ready image
FROM node:22-alpine

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/build ./build

ARG NODE_ENV
ARG PORT
ARG DATABASE_USER
ARG DATABASE_HOST
ARG DATABASE_NAME
ARG DATABASE_PASSWORD
ARG DATABASE_PORT

ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}
ENV DATABASE_USER=${DATABASE_USER}
ENV DATABASE_HOST=${DATABASE_HOST}
ENV DATABASE_NAME=${DATABASE_NAME}
ENV DATABASE_PASSWORD=${DATABASE_PASSWORD}
ENV DATABASE_PORT=${DATABASE_PORT}

RUN echo "NODE_ENV=${NODE_ENV}" > .env
RUN echo "PORT=${PORT}" > .env
RUN echo "DATABASE_USER=${DATABASE_USER}" > .env
RUN echo "DATABASE_HOST=${DATABASE_HOST}" > .env
RUN echo "DATABASE_NAME=${DATABASE_NAME}" > .env
RUN echo "DATABASE_PASSWORD=${DATABASE_PASSWORD}" > .env
RUN echo "DATABASE_PORT=${DATABASE_PORT}" > .env

EXPOSE ${PORT}

CMD ["node", "build/server"]

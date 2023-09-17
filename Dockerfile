FROM node:18-bullseye-slim as build

WORKDIR /app

COPY package.json ./

COPY pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm nest build

EXPOSE 3000

CMD [ "node", "dist/main.js" ]

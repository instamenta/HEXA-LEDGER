FROM node:20.5-alpine3.17

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 5085

CMD ["npx", "nodemon", "typescript/index.js"]

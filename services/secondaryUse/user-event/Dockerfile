FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 50051

CMD ["npx", "nodemon", "typescript/index.js"]

FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 50051

CMD ["npx", "nodemon", "src/server.js"]

FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5051

CMD ["npx", "nodemon", "src/index.js"]

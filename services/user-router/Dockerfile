FROM node:20.5-alpine3.17

WORKDIR /app

COPY package*.json ./

RUN ["npm", "install", "--production"]

COPY . .

EXPOSE 5085

CMD ["node", "typescript/index.js"]

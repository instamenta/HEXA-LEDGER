FROM node:20-alpine

WORKDIR /

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 50051
CMD [ "npm", "run", "build" ]

CMD [ "rm" , "-rf", "./src"]

CMD ["npx", "nodemon", "typescript/src/server.js"]


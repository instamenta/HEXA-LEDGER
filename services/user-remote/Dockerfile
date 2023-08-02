FROM node:20-alpine

WORKDIR app/

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 50051
CMD [ "npm", "run", "build" ]

CMD ["npx", "nodemon", "typescript/src/server.js"]


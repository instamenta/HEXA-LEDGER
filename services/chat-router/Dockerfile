FROM node:20.5-alpine3.17

WORKDIR /app

COPY package*.json ./

RUN ["npm", "install"]
#"--production"]

COPY . .

EXPOSE 5065

CMD ["npm", "run", "prisma-generate"]

CMD ["node", "typescript/src/index.js"]

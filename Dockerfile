FROM node:12.18.2-alpine3.12

WORKDIR /usr/src/pwa

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]
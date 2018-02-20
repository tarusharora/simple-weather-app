FROM node:8.9-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
RUN mkdir build
COPY build ./build
COPY server.js ./
EXPOSE 3001
CMD [ "node", "server.js" ]
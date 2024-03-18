FROM node:alpine

RUN mkdir -p /server
WORKDIR /server

COPY package.json /server/

RUN npm install
COPY .babelrc ./
COPY db/ ./db
COPY *.js ./
COPY models/ ./models
COPY migrations/ ./migrations
COPY client/ ./client
COPY api/ ./api

RUN npm run build && rm -rf /root/.npm

EXPOSE 5000

VOLUME db

CMD ["sh", "-c", "NODE_ENV=production node index.js"]

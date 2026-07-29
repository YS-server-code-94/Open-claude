FROM node:18-alpine
WORKDIR /app
COPY server/package.json server/package-lock.json* ./server/
RUN npm ci --prefix server --silent
COPY server ./server
WORKDIR /app/server
EXPOSE 4000
CMD ["node", "index.js"]

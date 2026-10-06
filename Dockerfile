FROM node:20-slim

WORKDIR /app

ENV NODE_ENV=production

COPY package-lock.json package.json ./
RUN npm ci --omit=dev

COPY . .

EXPOSE 5001

CMD ["node", "app.js"]

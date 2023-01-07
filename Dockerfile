FROM node:18-alpine
RUN apk update && apk upgrade
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm config set legacy-peer-deps true
RUN ["npm", "install", "--omit=optional"]
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
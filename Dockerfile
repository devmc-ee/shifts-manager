FROM node:18-alpine
RUN apk update && apk upgrade
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN ["npm", "install"]
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
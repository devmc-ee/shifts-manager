FROM node:18-alpine
RUN apk update && apk upgrade
WORKDIR /app
COPY package.json ./package.json
COPY package-lock.json .
RUN ["npm", "install"]
COPY . .
EXPOSE 6006
CMD ["npm", "run", "storybook"]
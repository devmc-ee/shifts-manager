FROM node:18-alpine
RUN apk update && apk upgrade
WORKDIR /app
COPY package.json ./package.json
COPY package-lock.json .
RUN npm config set legacy-peer-deps true
RUN ["npm", "install"]
COPY . .
EXPOSE 6006
CMD ["npm", "run", "storybook"]
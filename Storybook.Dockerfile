FROM node:18-alpine
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN ["yarn", "install"]
COPY . .
EXPOSE 6006
CMD ["yarn", "storybook"]
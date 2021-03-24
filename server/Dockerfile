FROM node:14.15.1

# build server
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

RUN yarn

ENV TZ=Asia/Ho_Chi_Minh
ENV NODE_ENV=docker
ENV PORT=3105

EXPOSE 3105

CMD ["yarn", "start"]
FROM node:14-alpine

WORKDIR /app

RUN yarn set version berry

COPY .yarn .yarn

COPY package.json package.json
COPY .yarnrc.yml .yarnrc.yml
COPY yarn.lock yarn.lock

RUN yarn install

COPY . .

ARG NODE_ENV
ARG REACT_APP_API_URL

RUN if [ "$NODE_ENV" = "production" ]; then REACT_APP_API_URL=${REACT_APP_API_URL} yarn build; fi

CMD ["yarn", "start"]

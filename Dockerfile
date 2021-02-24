FROM node:14-alpine

WORKDIR /app

RUN yarn set version berry

COPY .yarn .yarn

COPY package.json package.json
COPY .yarnrc.yml .yarnrc.yml
COPY yarn.lock yarn.lock

RUN yarn install

COPY . .

RUN if [ "$NODE_ENV" = "production" ]; then REACT_APP_API_URL=${REACT_APP_API_URL} npm yarn build; fi


CMD ["yarn", "start"]
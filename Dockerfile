FROM cypress/base:10

WORKDIR /ctwebsite-tests
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

ENV npm_config_loglevel=warn

RUN npm ci
RUN npm run verify
RUN npm run version

COPY cypress ./cypress
COPY cypress.json ./cypress.json

ENTRYPOINT ["npx", "cypress"]
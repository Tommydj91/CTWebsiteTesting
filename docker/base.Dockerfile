FROM node:8
RUN npm install -g npm@6.2.0

VOLUME /performr-core/build
VOLUME /performr-core/coverage
VOLUME /performr-core/PRIV
WORKDIR /performr-core
COPY package.json /performr-core/package.json
COPY package-lock.json /performr-core/package-lock.json
RUN npm ci
COPY . /performr-core

ENTRYPOINT ["/usr/local/bin/npm", "run", "--"]
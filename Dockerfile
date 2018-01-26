FROM node:6.9

WORKDIR /tmp
COPY package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install

WORKDIR /usr/src/app
COPY . /usr/src/app/

RUN cp -a /tmp/node_modules /usr/src/app/

ENV NODE_ENV=production
ENV PORT=4000

EXPOSE 4000
CMD ["npm", "start" ]
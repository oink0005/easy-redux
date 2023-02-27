FROM node:17

WORKDIR /app

COPY . /app

RUN npm install
# RUN npn run build

EXPOSE 3000

CMD [ "npm", "run", "start"]
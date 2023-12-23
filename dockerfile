FROM node:21.0.1-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json ./

RUN npm install

# Bundle app source
COPY . .

RUN chmod -R 700 /app

CMD [ "npm", "run", "dev" ]
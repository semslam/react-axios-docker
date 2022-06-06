# pull the official base image
FROM node:14-alpine AS development
# set working direction
WORKDIR urs/src/app

# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
# add app
COPY . ./
# Expose port
EXPOSE 8081
# start app
CMD ["npm", "start"]
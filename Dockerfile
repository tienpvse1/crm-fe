FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5000
RUN chown -R node /usr/src/app
CMD ["npm", "run", "preview"]

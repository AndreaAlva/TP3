FROM node
WORKDIR /ds-app
COPY /ds-app .
RUN npm install
EXPOSE 8888
CMD ["node", "./index.js"]

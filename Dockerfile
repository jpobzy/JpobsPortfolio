FROM node:13
ENV HOME /root
WORKDIR /root
COPY . .
# Download dependancies
RUN npm install
EXPOSE 8000
CMD node server.js

# Using official Node.js 16 image as a parent image
FROM node:16-alpine

# Setting the working directory
WORKDIR /.

# Copying application's package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application's dependencies
RUN npm install

# Copying application files to the working directory
COPY . .

# Exposing application port
EXPOSE 3000

# Start command
CMD ["npm", "start"]
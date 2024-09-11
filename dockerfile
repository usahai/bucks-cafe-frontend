# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build the app for production
RUN npm run build

# Install a lightweight web server for serving the React app
RUN npm install -g serve

# Expose port 3000 (or any port your app uses)
EXPOSE 3000

# Start the React app in production mode
CMD ["serve", "-s", "build", "-l", "3000"]

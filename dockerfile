# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Expose port 5173 (default port for Vite) and port 5174 (for WebSocket during HMR)
EXPOSE 5173
EXPOSE 5174

# Run the development server (or replace with `npm run build` and serve the app for production)
CMD ["npm", "run", "dev", "--", "--host"]

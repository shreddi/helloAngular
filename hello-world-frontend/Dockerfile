# Stage 1: Use Node.js to build the Angular app
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app source code and build the app
COPY . .
RUN npm run build -- --configuration production  # Added the -- before configuration

# Stage 2: Use an NGINX image to serve the built Angular app
FROM nginx:alpine

# Copy the built Angular files from the previous stage
COPY --from=build /app/dist/hello-world-frontend/browser /usr/share/nginx/html

# Expose port 80 to serve the Angular app
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]

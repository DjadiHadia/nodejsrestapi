FROM node:14

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./


# Install all dependencies (both production and development)
RUN npm install

# Bundle app source
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Default command to start the application
CMD [ "node", "index.js" ]
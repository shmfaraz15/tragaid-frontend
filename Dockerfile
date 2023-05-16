# Base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Set environment variable
ENV PORT=3000

# Expose port
EXPOSE ${PORT}

# Start the application
CMD ["npm", "start"]

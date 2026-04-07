# Base image
FROM node:20-alpine

# Workdir
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install build tools for native modules (like better-sqlite3)
RUN apk add --no-cache python3 make g++

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose port
EXPOSE 3000

# Default command (overridden by docker-compose in dev)
CMD ["npm", "start"]

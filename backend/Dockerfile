FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm install

# Copy source
COPY src ./src

# List files before build
RUN echo "Files before build:" && ls -la

# Build
RUN npm run build && echo "Build successful!"

# List dist folder
RUN echo "Dist folder contents:" && ls -la dist

EXPOSE 5000

CMD ["npx", "ts-node", "src/index.ts"]

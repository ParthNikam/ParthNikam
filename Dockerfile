# Use the official Bun image
FROM oven/bun:latest
WORKDIR /app

# Install dependencies
COPY package.json bun.lock ./
RUN bun install

# Copy everything else
COPY . .

# Build the Next.js frontend
RUN bun run build

# Set production environment
ENV NODE_ENV production
EXPOSE 3000

# Start the app
CMD ["bun", "run", "start"]

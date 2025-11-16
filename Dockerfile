# --- Stage 1: Build the Next.js app ---
FROM node:18-alpine AS builder
WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm ci

# Copy all project files
COPY . .

# Build Next.js (SSR-ready)
RUN npm run build

# --- Stage 2: Run in production ---
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Set Next.js environment to production
ENV PORT=3000

# Copy only production dependencies
COPY package*.json ./
RUN npm ci && npm install typescript

# Copy built app and public files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.ts ./next.config.ts

# Expose port
EXPOSE 80

# Command to start the app
CMD ["npm", "start"]
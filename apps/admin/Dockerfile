# src Dockerfile: https://github.com/vercel/turbo/blob/main/examples/with-docker/apps/web/Dockerfile
FROM node:18.17.0-alpine3.18 AS base
WORKDIR /app
RUN npm install -g pnpm@8.9.0 --force \
    && npm install -g turbo@1.10.15 --force

FROM base AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat && apk update

# Set working directory
WORKDIR /app
COPY . .
RUN turbo prune --scope=admin --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
WORKDIR /app

# First install the dependencies (as they change less often)
COPY --from=builder /app/out/json/ /app/out/pnpm-lock.yaml /app/pnpm-lock.yaml /app/out/pnpm-workspace.yaml /app/pnpm-workspace.yaml /app/.npmrc /app/

RUN pnpm install

# Build the project
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

# use alpine as the thinest image
FROM base AS runner
WORKDIR /app

# Don't run production as root
COPY --from=installer /app .

WORKDIR /app/apps/admin

CMD ["pnpm", "dev"]

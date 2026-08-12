# ============================================
# cinar-merchant-services — Docker image
# Multi-stage: build (turbo) → runtime (slim)
# ============================================

# ── builder ──────────────────────────────────
FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@10.15.0 --activate

WORKDIR /app
COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build
RUN pnpm prune --prod

# ── runner ───────────────────────────────────
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
RUN corepack enable && corepack prepare pnpm@10.15.0 --activate

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public     ./public

USER node

EXPOSE 3000

CMD ["pnpm", "start"]

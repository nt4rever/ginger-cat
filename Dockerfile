ARG NODE_VERSION=20

# Build stage
FROM node:${NODE_VERSION}-alpine AS builder

ENV NODE_ENV=build \
    ROOT=/home/node \
    USER=node

USER ${USER}

WORKDIR ${ROOT}

COPY package*.json ./

RUN if [ -f $ROOT/package-lock.json ]; \
    then \
    npm ci --loglevel=error --no-audit; \
    else \
    npm install --loglevel=error --no-audit; \
    fi

COPY --chown=node:node . .

RUN npm run build \
    && npm prune --omit=dev

# Runtime stage
FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV=production \
    ROOT=/home/node \
    USER=node

USER ${USER}

WORKDIR ${ROOT}

COPY --from=builder --chown=node:node /home/node/package*.json ./
COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/dist/ ./dist/

CMD ["node", "dist/main.js"]

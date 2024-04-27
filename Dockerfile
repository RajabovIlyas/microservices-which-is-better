FROM node:20-alpine3.18 AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable



# development stage
FROM base AS development

ARG APP

ENV APP ${APP}

ARG NODE_ENV=development

ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

CMD pnpm start:dev ${APP}


# production stage
FROM base AS production
ARG APP
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod
COPY --from=development /usr/src/app/dist ./dist

# Add an env to save ARG
ENV APP_MAIN_FILE=dist/apps/${APP}/main
CMD node ${APP_MAIN_FILE}

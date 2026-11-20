# syntax=docker/dockerfile:1
#
# The site as a container image: the static export served by an unprivileged
# nginx on port 8080. See docs/domains-and-hosting.md, "Running the image".
#
# The build stage pulls the guides and builds the live demo from the product
# repository (scripts/fetch-guides.mjs, scripts/build-demo.mjs), so it needs
# network access.

# Node 26, as in .nvmrc.
FROM node:26.13.1-trixie-slim@sha256:e6bedef217677b276c591795e169840edd9096dbf13f29df8ef8d1856b8820bc AS build

RUN apt-get update \
 && apt-get install -y --no-install-recommends git ca-certificates \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /src

ARG NEXT_PUBLIC_SITE_URL=https://monitorflow.eu
ARG NEXT_PUBLIC_DEMO_URL=
ARG NEXT_PUBLIC_VIDEO_URL=
# Optional: build the guides or the demo from another branch or tag.
ARG MF_PRODUCT_REF=main
ARG MF_DEMO_REF=
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    NEXT_PUBLIC_DEMO_URL=$NEXT_PUBLIC_DEMO_URL \
    NEXT_PUBLIC_VIDEO_URL=$NEXT_PUBLIC_VIDEO_URL \
    MF_PRODUCT_REF=$MF_PRODUCT_REF \
    NEXT_TELEMETRY_DISABLED=1

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
# An empty MF_DEMO_REF lets the script pick main, or its fallback branch.
RUN if [ -n "$MF_DEMO_REF" ]; then export MF_DEMO_REF; else unset MF_DEMO_REF; fi \
 && npm run guides \
 && npm run demo \
 && npm run build

FROM nginxinc/nginx-unprivileged:1.30.6-alpine@sha256:f5116ed4606f3eb015dd4a8e28cb9b351476dc0ad4bc6e9f93b19cec130cdf03

# Only the server config and the built site. nginx writes its pid and temp
# files under /tmp, so the root filesystem can be read-only.
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /src/out /usr/share/nginx/html

USER 101
EXPOSE 8080

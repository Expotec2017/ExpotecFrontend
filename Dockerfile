FROM nginx:1.11-alpine
MAINTAINER Felipe Frizzo "felipefrizzo@gmail.com"

COPY dist/ /usr/share/nginx/html

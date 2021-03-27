# build environment
FROM node as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /usr/src/app
RUN npm install
# RUN npm install react-scripts@1.1.1 -g --silent


RUN npm run build
RUN ls -lha && pwd
#RUN mv .htaccess /usr/src/app/help/htaccess

# production environment
FROM nginx
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
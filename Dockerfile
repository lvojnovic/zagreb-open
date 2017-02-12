FROM java:8-alpine
MAINTAINER Your Name <you@example.com>

ADD target/uberjar/zagreb-open.jar /zagreb-open/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/zagreb-open/app.jar"]

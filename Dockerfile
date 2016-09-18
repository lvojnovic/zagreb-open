FROM java:8-alpine
MAINTAINER Your Name <you@example.com>

ADD target/uberjar/bjelovar-open.jar /bjelovar-open/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/bjelovar-open/app.jar"]

FROM ubuntu:14.04
RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh
RUN ls -a
RUN bash nodesource_setup.sh
RUN apt-get install -y nodejs
RUN useradd -ms /bin/bash triaguser
USER triaguser
WORKDIR /home/triaguser
ADD jdk-8u181-linux-x64.tar.gz /home/triaguser
ENV JAVA_HOME /home/triaguser/jdk1.8.0_181
ENV PATH $JAVA_HOME/bin:$PATH
ADD elasticsearch.tar.gz /home/triaguser
ADD kibana.tar.gz /home/triaguser
RUN elasticsearch/bin/elasticsearch &
RUN kibana/bin/kibana &
ADD logstash-6.3.2 /home/triaguser
COPY /home/triaguser
COPY package.json /home/triaguser
RUN npm install 
RUN npm run build
WORKDIR /home/triaguser/server
CMD ["node","server.js"]






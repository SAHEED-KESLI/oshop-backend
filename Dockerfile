FROM node:18-alpine

# RUN addgroup app && adduser -S -G app app
# USER app

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . . 

ENV  DATABASE_URL=postgresql://postgres:123@db:5432/booker_db?schema=public
ENV  PORT=3000
ENV  JWT_SECRET=jwt-secret
ENV  JWT_EXPIRATION=5m
ENV  STRIPE_PRIVATE_KEY=sk_test_51Q9MQ6LcMsBsaU3L7VHN0U3o5lwp33aAeOwCB26kJiG5d8D8pkv3OiJs3DdoyqHz4DK73cbMVpXBXB1CVIexQaIT00lsqwYeOF

EXPOSE 3000
CMD [ "npm", "start" ]


#to see all images   run: docker images 
# to build           run: docker build -t oshop-api .
# to tag an image/name a version of the build     run: docker build -t oshop-api:v_1 .
# to remove an image with multiple tags           run: docker image remove oshop-api:v-1  
# to rename a specific image tag                  run: docker image tag oshop-api:v_1 oshop-api:v_2
# to remane a tag using their IMAGE ID            run: docker image tag b06 oshop-api:v_latest



###################################################################################################################
#####################################    CONTAINERS      ##########################################################
# to see running container    run: docker ps
# to run a new container from osop-ap image      run: docker run oshop-api
# to run a container in the background           run: docker run -d oshop-api
# to run a container in the interactive mode        run: docker run -d oshop-api
# to start a container and give the cotainer a name  run: docker run -d --name blue-sky oshop-api
# to view logs for a perticular containerId or ContainerNAME   run: docker logs 655  or docker logs blue-sky
# to publish a port when running a container  run: docker run -d -p 3000:3000 --name c1 oshop-api
# to execute any command in a running container   run: docker exec c1 ls
# to execute command in a container interactive mode    run: docker exec -it c1 sh
# to exit run:exit
# to stop a running container run:docker stop c1
# to start a stopped container  run: docker start c1
# to start new containers from an image we use the run command    run: docker run -d -p 3000:3000 --name c1 oshop-api
# METHOD1 to remove a container  run: docker stop c1 && docker rm c1
# METHOD2 to force remove a container  run: docker rm -f c1
# to see stopped containers   run: docker ps -a
# to look at a particular container  run: docker ps -a | grep c1
# to get rid of all stopped containers in one go   run: docker container prune
# to create a volumes run: docker volume create app-data
# to inspect volume   run: docker volume inspect app-data
# to persist data using volumes run: docker run -d -p 3000:3000 -v app-data:/app/data oshop-api
# to create volumes while start a container run: docker run -d -p 3000:3000 -v app-data2:/app/data oshop-api
# to run the contaner in interactive mode: docker exec -it c1 sh   or  docker exec -it 716 sh
# to remove the runnng container run: docker rm -f 716
# to start a new container with same volume mapping   run: docker run -d --name c1 -p 5000:3000 -v app-data:/app/data oshop-api
# to run a shel session for the new container run: docker exec -it c1 sh
# 
# 
# 
# 
# 
# 
# 
# 
####################################################################################################################################
#####################################    RUNNING MULTIPLE CONTAINERS      ##########################################################
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 





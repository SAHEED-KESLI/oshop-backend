#!/bin/sh

echo "Waiting for Prisma to start..."
./wait-for db:5432 

echo "Migrating the databse..."
npm run prisma:dev:deploy 

echo "Starting the server..."
npm start 
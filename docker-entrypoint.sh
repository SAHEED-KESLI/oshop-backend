!/bin/sh

echo "Waiting for Prisma to start..."
./wait-for db:5432 

echo "Migrating the databse..."
sh -c "npx prisma db seed && npx prisma migrate deploy && npm run start && tail -f /dev/null"

# echo "Starting the server..."
# npm start 
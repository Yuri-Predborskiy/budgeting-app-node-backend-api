# Budgeting application backend API using node.js and express
Simple budgeting application backend API. It is based on node.js and express
The goal of the project is to serve as a backend API for the budgeting application
(hosted in a separate repository)

## Project setup
Install dependencies
```
npm install
```
Run migrations to create database tables
```
npx sequelize-cli db:migrate
```

#Development notes
Creating migration skeleton
```
npx sequelize-cli migration:generate --name "create-expenses-table"
```

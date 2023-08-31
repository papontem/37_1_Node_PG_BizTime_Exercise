# 37_1_Node_PG_BizTime_Exercise
## Public repo of exercise for unit 37.1: Node PG BizTime Exercise
We will complete the task of building a REST-ful backend API server for a simple company/invoice tracker.

## Setting Up
We first need to have a DB with the name of bz created on our Postgresql local server setup, and we will also need a user account that has CRUD Access/Permissions for that DB. You can create a super user if youd like and for this exercise I'm requesting of you to save the username and password for the user who will have acess to that db in your `process.env` object while you are running the app. Since I am using a WSL Ubunto 14 distro, I saved them in my bash profile and i am calling them in my `db.js` file. I also am importing a port variableif youd like to set a custom port for your postgresql server.

Their variable names are:
- PG_USERNAME = "the username of your psql user"
- PG_PASSWORD = "the password of your psql user"
- PGPORT = 5432 <- postgresql uses port 5432 by default, you can manually write this  in your db.js

You may edit them as you see fit, or even create a secrets file to write them and import them manually but nevertheless take a look at that file and the `data.sql` file to properly get set up to run the biztime `server.js` with your express. 

You can run this command from your terminal to get the databases seeded.

    psql < data.sql


## Route Requests
we'll focus on getting these routes up and running. Later on the next excercise will be when we add jest supertests to them

## /companies
- GET /companies
    - Returns list of companies, like {companies: [{code, name}, ...]}
- GET /companies/[code]
    - Return obj of company: {company: {code, name, description}}
    - If the company given cannot be found, this should return a 404 status response.
- POST /companies
    - Adds a company.
    - Needs to be given JSON like: {code, name, description}
    - Returns obj of new company: {company: {code, name, description}}
- PUT /companies/[code]
    - Should return 404 if company cannot be found.
    - Needs to be given JSON like: {name, description}
    - Returns update company object: {company: {code, name, description}}
- DELETE /companies/[code]
    - Deletes company.
    - Should return 404 if company cannot be found.
    - Returns {status: "deleted"}

## /invoices
- GET /invoices
- GET /invoices/[id]
- POST /invoices
- PUT /invoices/[id]
- DELETE /invoices/[id]

## Requirements
You may need to use these tools to run the scripts and run the tests mentioned before.
- [Node](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [node-postgres](https://www.npmjs.com/package/pg/v/8.11.3)

## Development
This App was made using a WSL Ubunto 14 distro running from a VS Code desktop environment.
Here are some extensions/modules/tools i use:
- [Prettier](https://prettier.io/) : [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [morgan](https://www.npmjs.com/package/morgan)
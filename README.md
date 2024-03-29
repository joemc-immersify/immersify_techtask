# Immersify Back End Dev Tech Task

This task is designed to test your understanding of Node.js, TypeScript, and the usage of TypeORM to interact with a SQLite database. You will be responsible for modifying an existing database and creating routes to interact with it. The task is divided into 6 parts and is expected to take between 1-3 hours.

## Prerequisites:

- NodeJS
- Postman (or a similar API testing tool)

You can also use a database visualizer to view your database. Personally, SQLite Studio was used and found to be easy to set up. The database represents a simple clothing shop with tables for Customers and Products.

## The Task:

### 1. Set up your environment:

Clone this repository locally.

An SQLite database is used, so there's no need to set up a database/server as it's managed by the file called "shop.db". Once you've opened the project, in your terminal navigate to the project directory and run the following commands:

```bash
npm install
npx tsx app.ts
```

This should start the app running on localhost:3000.

### 2. Call existing GET requests:

Confirm that the environment is set up correctly by making a GET request. Call the route "/products" using a GET request, and you should have an array with with 3 objects in (a beanie, socks and gloves):

*Note: You don’t need to do anything other than confirm that it's working.*

### 3. Alter an existing route [3 marks]:

The POST route "/purchaseProduct/:productid" in the "product.ts" file currently finds the matching product and returns that product. Modify it so that it adjusts the stock quantity when the route is called.

### 4. Make a new table [5 marks]:

Create a new table in the database called "Review." Its purpose is for users to review the items they have purchased. Include columns for the text content of the review and a numerical rating (e.g., up to 5 stars). It should also link to the customer and product tables.

### 5. Make a new POST route [5 marks]:

Create a new POST route for adding an entry to your newly made review table. You should be able to pass in a product id, customer id, review text body, and numerical rating into the request, populating the database with this information.

### 6. Make a GET route [5 marks]:

Develop a GET route that retrieves all reviews of a certain rating for a given product. Have it return the review, customer information, and product information.

### Submit your code:

Please send us your code in the form of a link to your repository or as a zipped file. Email it to joemccleary@immersifyeducation.com and cc in the recruiter as well.

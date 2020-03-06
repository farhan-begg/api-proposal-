## API Project

## Description

This API allows authenticated users to post their products online for other users to search and find products of needs. This app is meant for users to store any item inside a database

## Installation

To install Product API on your local machine, clone the repo, open your terminal, navigate to the directory you just created, and do the following:

```
npm install
```

from there, you can start the server by doing one of these:

```
npm start
```

Great

# Authentication

## Register an account

All you'll have to do next is send a POST request to `http://localhost:3000/user/signup`

First set the header to Key: Content-Type and value: application/json
Make sure your Body is JSON Type and selected raw and enter:

```js
email: String,
password: Password
```

Then we will take care of the rest

## Log in

In order to log in, send a POST request to `http://localhost:3000/user/login`

Use the following headers with the correct data types:

```js
email: String,
password: Password
```

You should now be authenticated. You can check with the route below.

## Log out

The system will log you out with in a hour

## Quick Tip

Before grabbing data from the API, all routes are authorized, except for get all proudcts request. In order to have access to all routes:
Login and copy the token key
Go to Headers enter Key: Authorization
For Value: type Bearer and paste your personal token.
This will check for user Authorization

## Get all Products

Send a GET Request on `http://localhost:3000/products/` and all products will be returned in the order they were made.

## Get a specific Product

Send a GET Request on `http://localhost:3000/products/:enterIdHere` to recieve the Product with ID you specified.

## Create a new Product

Send a POST request on `http://localhost:3000/products/` and refer to following for names and values:

```js
name: String,
price: Number,

```

Great.

You Can also upload images to your product if you click form-data and enter key and value, for example:

```js
name: String,
price: Number,
productimage: Upload Image


```

## Update a Product

Send a PATCH request to `http://localhost:3000/products/` and refer to following for names and values:

```js
id: String,
name: String,
price: Number,
```

Perfect.

## Delete a product

Send a DELETE request to `http://localhost:3000/puppies?_method=DELETE` and refer to following for names and values:

```js
id: String;
```

## Get all Orders

Send a GET Request on `http://localhost:3000/orders/` and all products will be returned in the order they were made.

## Get a specific Order

Send a GET Request on `http://localhost:3000/orders/:enterIdHere` to recieve the order with ID you specified.

## Create a new Order

Send a POST request on `http://localhost:3000/orders/` and refer to following for names and values:

```js
name: String,
price: Number,

```

## Update a Order

Send a PATCH request to `http://localhost:3000/orders/:enterIdHere` and refer to following for names and values:

```js
id: String,
name: String,
price: Number,
```

Perfect.

## Delete an Order

Send a DELETE request to `http://localhost:3000/orders/:enterIdHere` and refer to following for names and values:

```js
id: String;
```

Thank you

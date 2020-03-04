## API Project

## Description

This API allows authenticated users to post their products online for other users to search and find products of needs. This app is meant for users to store any item inside a database

## Intallation

To install Product API on your local machine, clone the repo, open your terminal, navigate to the directory you just created, and do the following:

```
npm install
```

from there, you can start the server by doing one of these:

```
npm start
```

Great

## Get all Items

Send a GET Request on `http://localhost:3000/products/` and all products will be returned in the order they were made.

## Get a specific product

Send a GET Request on `http://localhost:3000/products/:enterIdHere` to recieve the Puppy whose ID you specified.

## Create a new Product

Send a POST request on `http://localhost:3000/products/` and refer to following for names and values:

```js
name: String,
price: Number,

```

The full HTTP request should look something like this:

Great.

## Update a puppy

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

Puppy go bye bye.

# Authentication

## Register an account

The first thing you'll have to do is solve the Google Captcha. This is in place so we can prevent spammers and bots.

All you'll have to do next is send a POST request to `http://localhost:3000/signup`

Make sure you add the following headers with the correct data type:

```js
username: String,
password: Password
```

Then we will take care of the rest. This will also automatically log you in.

## Log in

In order to log in, send a POST request to `http://localhost:3000/login`

Use the following headers with the correct data types:

```js
username: String,
password: Password
```

You should now be authenticated. You can check with the route below.

## Log out

The system will log yourself out

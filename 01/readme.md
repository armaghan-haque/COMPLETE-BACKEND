# README.md

````markdown
# Node.js & Express.js Basics

## What is a Server?

A server is a computer or software that provides services, data, or resources to other computers or devices, called clients, over a network.

When a user requests information, the server processes the request and sends back the required response.

A server has its own operating system, RAM, and a processor.

### Example

When you visit a website:

1. You type `www.google.com` into your browser.
2. Your browser (acts as a client) sends a request to the website's server.
3. The server finds the website's files and sends them back.

---

## What is a Package?

A package is a collection of code created by developers that we can reuse in our project. It helps us add extra features without writing everything from scratch.

For example, in Node.js, we can install packages like Express to create web servers.

---

## What is `node_modules`?

`node_modules` is a folder that contains all the packages and their dependencies required for a Node.js project.

When we run `npm install`, npm downloads the required packages and stores them inside the `node_modules` folder.

---

## `package.json`

This is the configuration file for your Node.js project. It helps npm understand which packages are required for the project.

It contains:

- Project name
- Version
- Dependencies
- Scripts
- Author
- License

---

## `package-lock.json`

`package-lock.json` is a file that stores the exact versions of all installed packages and their dependencies.

It ensures that when we install the project on another system, we get the same package versions and avoid compatibility issues.

---

# Node.js

Node.js is a runtime environment that allows you to run JavaScript outside the browser. It is built on Chrome's V8 JavaScript engine.

Normally, JavaScript runs inside browsers (Chrome, Firefox, etc.) but Node.js lets you use JavaScript to build:

- Web servers
- APIs
- Backend applications

---

# Express.js

Express.js is a framework built on top of Node.js that makes it easier to create web servers and APIs.

Node.js provides the ability to create servers, but writing everything manually can be complicated.

Express gives you simple tools for:

- Creating routes
- Handling requests and responses
- Using middleware
- Building APIs

---

## Initialize a Node.js Project

```bash
npm init -y
```

Creates a new Node.js project.

---

## Creating a Server Using Express

```javascript
// creating the server by importing the express framework
const express = require("express")

// Create a server instance
const app = express()

app.get("/", (req, res) => {
    res.send("hello world")
})

app.get("/about", (req, res) => {
    res.send("This is about page")
})

// Starting the server on port 3000
app.listen(3000, () => {
    console.log("server is running on port 3000")
})
```

---

## `req` (Request Object)

`req` stands for request.

It contains all the information sent by the client to the server.

---

## `res` (Response Object)

`res` stands for response.

It is used by the server to send a response back to the client.

---

## What is a Port?

A port is a number that helps a computer identify which application or service should receive the data.

If a server is running on port `3000`, users can access that application through that port. The port helps the computer know where to send the request.

---

# API

### Interview Answer (Very Simple Language)

API stands for Application Programming Interface.

It is a bridge that helps the frontend and backend communicate with each other.

The client sends a request to the API, and the API returns the required data or response.

---

## Simple Example

When you log in to a website, the frontend sends your username and password to the API.

The API checks the information in the database and sends back a success or failure response.

---

## Real-life Example

Think of a restaurant.

You (the customer) tell the waiter what you want.

The waiter takes your order to the kitchen and brings the food back.

Here:

- Customer = Client
- Waiter = API
- Kitchen = Server

---

# REST API

REST API (Representational State Transfer API) is a type of API that follows a set of rules to allow the client and server to communicate using HTTP methods like GET, POST, PUT, and DELETE.

## HTTP Methods

| Method | Purpose |
|---------|---------|
| GET | Fetch data 📥 |
| POST | Create new data ➕ |
| PATCH | Update some data ✏️ |
| DELETE | Remove data 🗑️ |
````

# README.md

```markdown id="g7m2k9"
# Postman & Express.js Basics

## Postman

Postman is a tool used to test APIs.

It allows us to send HTTP requests like **GET**, **POST**, **PATCH**, and **DELETE** to a server and view the response without writing frontend code.

---

## Why do we use Postman?

- Test APIs
- Send GET, POST, PATCH, and DELETE requests
- Check the server's response
- Find and fix API issues

---

# Middleware

## `app.use(express.json())`

Middleware is a function in Express.js that runs between receiving a request and sending a response.

`app.use(express.json())` is middleware that converts incoming JSON data into a JavaScript object, making it available in `req.body`.

---

# Status Codes

Status codes are 3-digit numbers sent by the server to tell the client whether the request was successful or if there was an error.

## Status Code Categories

| Range | Meaning |
|------:|---------|
| **1xx** | Informational |
| **2xx** | Success |
| **3xx** | Redirection |
| **4xx** | Client Error |
| **5xx** | Server Error |

---

## Common Status Codes

| Status Code | Meaning |
|-------------|---------|
| **200 OK** | The request was successful. |
| **201 Created** | New data was created successfully. |
| **400 Bad Request** | The request is invalid or has missing data. |
| **401 Unauthorized** | The user is not logged in or authentication failed. |
| **403 Forbidden** | The user is logged in but does not have permission. |
| **404 Not Found** | The requested resource or API was not found. |
| **500 Internal Server Error** | Something went wrong on the server. |

---

# `req.params`

`req.params` is used to get dynamic values from the URL, such as an ID or username.
```

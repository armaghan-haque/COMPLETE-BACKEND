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

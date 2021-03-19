# URL Shortener Service

This is an simple url shortener REST API implemented using following technology stack.

### Technology Stack

- Node JS
- Express JS
- Mongo DB Atlas (Mongo DB cloud)
- mongoose
- shortid (To generate base 62 short code for short url)
- config (To keep environment specific credentials like DB url with username and password)
- valid-url (To validate url format)

### How to run locally

1. Download the source and run the following command in root directory

> npm install

2. Run the following command to run the API service in dev mode

> npm run dev

### How to test the API

You can use any REST client application to test the service
Please find bellow REST calls samples in the folder path

```
/request/api.http
/request/get.http
```

-------------- Thanks for checkout the API ---------------

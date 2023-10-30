# brewapps-book - Node.js Backend Developer Challenge

## Hosted Api

https://brewapps-book.vercel.app/

# Books Maneager.

## Table of Contents

- [Hosted api](#https://brewapps-book.vercel.app/)
- [Description](#description)
- [API Endpoints](#api-endpoints)
- [Setup and Run Locally](#setup-and-run-locally)
- [Decisions and Assumptions](#decisions-and-assumptions)

## Description

Books manegment app

Users can be able to:
Add a new book (title, author, summary)
View a list of all books
View details of a specific book by its ID
Update a book's details
Delete a book

## Decisions and Assumptions

1. assummed book id is cuurent time in millisecond
2. not using CORS so you can't intregret with front end
3. you have basic Knowledge of node js
4. it is good to send all updated data after changing somthing in database
5. on upatedebook, deletebook, addbook, Returning a list of all books

6) on addbook all fields are required

## API Endpoints

### Add a New Book

- **Endpoint:** `/addbook`
- **Method:** `POST`
- **Request Body:**
  - `title` (string, required): The title of the book.
  - `author` (string, required): The author of the book.
  - `summary` (string, required): A brief summary of the book.
- **Response:** Returns a list of all books in the database with newly added book .

### View a List of All Books

- **Endpoint:** `/`
- **Method:** `GET`
- **Response:** Returns a list of all books in the database.

### View Details of a Specific Book

- **Endpoint:** `/searchbook`
- **Method:** `POST`
- **Request Body:**
  - `id` (number, required): Search book base on id
- **Response:** Returns the details of the book with the specified `id`.

### Update a Book's Details

- **Endpoint:** `/updatebook`
- **Method:** `PATCH`
- **Request Body:**
  - `title` (string): The updated title of the book.
  - `author` (string): The updated author of the book.
  - `summary` (string): The updated summary of the book.
- **Response:** Returns a list of all books in the database with newly updated book.

### Delete a Book

- **Endpoint:** `/deletebook`
- **Method:** `DELETE`
- **Response:** delete book and Returns a list of all books in the database.

## Setup and Run Locally

Follow these steps to set up and run the application locally:

1. Clone this repository to your local machine.

```bash
git clone <https://github.com/mayurlotanbhoi/brewapps-book.git>
cd <brewapps-book>
```

2. install all required packeges

```bash
npm i
```

3. add .env file add environment variable mongoDb url

```bash
MONGO_URL <MongDB URL>
```

3. run a command to start app

```bash
npm run dev
```

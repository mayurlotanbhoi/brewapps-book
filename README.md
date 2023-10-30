# brewapps-book

# Your Project Name

Briefly describe your project in one or two sentences.

## Table of Contents

- [Description](#description)
- [API Endpoints](#api-endpoints)
- [Setup and Run Locally](#setup-and-run-locally)
- [Decisions and Assumptions](#decisions-and-assumptions)

## Description

Provide a more detailed description of your project, including its purpose and features.

## API Endpoints

### Add a New Book

- **Endpoint:** `/api/books`
- **Method:** `POST`
- **Request Body:**
  - `title` (string, required): The title of the book.
  - `author` (string, required): The author of the book.
  - `summary` (string, required): A brief summary of the book.
- **Response:** Returns the newly added book.

### View a List of All Books

- **Endpoint:** `/api/books`
- **Method:** `GET`
- **Response:** Returns a list of all books in the database.

### View Details of a Specific Book

- **Endpoint:** `/api/books/:id`
- **Method:** `GET`
- **Response:** Returns the details of the book with the specified `id`.

### Update a Book's Details

- **Endpoint:** `/api/books/:id`
- **Method:** `PUT`
- **Request Body:**
  - `title` (string, required): The updated title of the book.
  - `author` (string, required): The updated author of the book.
  - `summary` (string, required): The updated summary of the book.
- **Response:** Returns the updated book details.

### Delete a Book

- **Endpoint:** `/api/books/:id`
- **Method:** `DELETE`
- **Response:** Returns a message indicating the book with the specified `id` has been deleted.

## Setup and Run Locally

Follow these steps to set up and run the application locally:

1. Clone this repository to your local machine.

```bash
git clone <repository-url>
cd <repository-directory>


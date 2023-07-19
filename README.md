# Book API

This is a simple RESTful API for managing books. It allows you to perform CRUD (Create, Read, Update, Delete) operations on books.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Getting Started

1. Clone the repository:
   `git clone https://github.com/nishad7447/nodeJS_CRUD_BookCollections.git`


## Install dependencies: 
`cd nodeJS_CRUD_BookCollections
npm install` 


## Start the server:

    `npm start
    The server will start running on http://localhost:3000.`

## Endpoints:
Retrieve All Books

    Method: GET
    URL: /book
    Description: Retrieves all books from the database.

Retrieve a Specific Book

    Method: GET
    URL: /book/singleBook/:id
    Description: Retrieves a specific book by its slug.

Add a New Book

    Method: POST
    URL: /book/insertBook
    Description: Adds a new book to the database.

Update an Existing Book

    Method: PUT
    URL: /book/updateBook/:id
    Description: Updates an existing book by its slug.

Delete an Existing Book

    Method: DELETE
    URL: /book/deleteBook/:id
    Description: Deletes an existing book by its slug.

Middleware
Insert Some Books

    Description: Middleware function that inserts some dummy book details into the database if no books exist.


# If .env has some confidential keys to hide we can simpely add a .gitignore file to protect it from the public git repo

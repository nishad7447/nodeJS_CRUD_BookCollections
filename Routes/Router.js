import express from "express";
import Controller from "../Controller/Controller.js";
import { insertSomeBooks } from "../Middleware/MidWare.js";

const Router=express.Router()

Router.get('/',insertSomeBooks,Controller.getAllBooks)              //Add some dummy details of book as midware and retrieve all books

Router.get('/singleBook/:id',Controller.getBookBySlug)             //Retrieve a specific book by id as slug

Router.post('/insertBook',Controller.insertBook)                  //Add a new book 

Router.put('/updateBook/:id',Controller.editBook)                //Update an existing book by id as slug

Router.delete('/deleteBook/:id',Controller.deleteBook)          //Delete an existing book by id as slug

export default Router
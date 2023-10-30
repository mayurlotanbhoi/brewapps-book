import BookClass from "../Moduls/BookModul/BookClass.js";
import {
    Router
} from "express";

const BookRout = Router()
const BookObject = new BookClass()

BookRout.get('/', async (req, res) => {
    // Assuming this function retrieves your book data
    try {
        const books = await BookObject.getBook();
        if (books.length === 0) {
            res.status(404).json({
                error: "No books found"
            }); // Set status code 404 for not found
            return;
        } else {
            res.status(200).json({
                data: books
            }); // Set status code 200 for success and send the data
        }
    } catch (error) {
        res.status(400).json({
            sms: error.error
        });
    }
});

BookRout.post('/addbook', async (req, res) => {
    const {
        title,
        author,
        summary
    } = req.body;

    try {
        // Check if any of the required fields are missing
        if (!title || !author || !summary) {
            return res.status(400).json({
                error: "All fields (title, author, summary) are required."
            });
        }

        // Create a new book with a unique ID based on the current timestamp
        const newBook = {
            id: new Date().getTime(),
            title,
            author,
            summary,
        };

        // Attempt to add the book
        const addedBook = await BookObject.createBook(newBook);

        if (addedBook) {


            const sendAllupdatedData = await BookObject.getBook()
            return res.status(201).json({
                data: sendAllupdatedData
            });
        } else {
            return res.status(500).json({
                error: "Failed to add the book."
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "An error occurred while adding the book."
        });
    }
});

BookRout.post('/searchbook', async (req, res) => {

    try {
        const {
            id
        } = req.body;

        if (!id || typeof id !== 'number') {
            res.status(400).json({
                error: "Please provide a proper ID format (a number)."
            });
            return;
        }

        const isBookFound = await BookObject.getBookById(id);
        if (isBookFound) {
            res.status(200).json({
                data: isBookFound
            });
        } else {
            res.status(404).json({
                error: "No books found"
            });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "An error occurred while finding the book."
        });
    }



})

BookRout.patch('/updatebook', async (req, res) => {

    try {
        const {
            id,
            ...allOtherData
        } = req.body;
        if (!id || typeof id !== 'number') {
            res.status(400).json({
                error: "Please provide a proper ID format (a number)."
            });
            return;
        }
        const isbookUpdated = await BookObject.updateBookById(id, allOtherData);
        if (isbookUpdated) {


            // Send Updated data
            const sendAllupdatedData = await BookObject.getBook()
            res.status(200).json({
                data: sendAllupdatedData
            });
        } else {
            res.status(404).json({
                error: "Book with the provided ID not found"
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "An error occurred while updating the book."
        });
    }
})

BookRout.delete('/deletebook', async (req, res) => {

    try {
        const {
            id
        } = req.body;
        if (!id || typeof id !== 'number') {
            res.status(400).json({
                error: "Please provide a proper ID format (a number)."
            });
            return;
        }

        const isBookDelete = await BookObject.deleteBookById(id)

        if (isBookDelete) {
            const sendAllupdatedData = await BookObject.getBook()
            res.status(200).json({
                data: sendAllupdatedData
            });
        } else {
            res.status(404).json({
                error: "Book with the provided ID not found"
            });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "An error occurred while deleting the book."
        });
    }

})





export default BookRout
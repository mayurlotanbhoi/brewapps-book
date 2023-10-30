import Book from "../../DB_schema.js/BookSchema.js"

class BookClass {

    constructor() {
        this.Book = Book;
    }

    async getBook() {
        try {
            const books = await this.Book.find()
            return books
        } catch (error) {
            throw new Error(error)
        }

    }

    async createBook(newBook) {
        try {
            const createdBook = await this.Book.create(newBook); // Assuming "Book" is the Mongoose model name

            if (createdBook) {
                // console.log("Book added:", createdBook);
                return createdBook;
            } else {
                console.log("Book not added");
                return "Book not added";
            }
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }

    async getBookById(id) {

        try {
            const isBookPresent = this.Book.findOne({
                id
            });
            if (isBookPresent) {
                return isBookPresent
            } else {
                return false;
            }
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }

    }

    async updateBookById(id, updatedBook) {
        try {
            const existingBook = await this.Book.findOne({
                id
            });

            console.log(existingBook)
            if (existingBook) {
                // Update the existing book with the new data

                existingBook.set(updatedBook);
                const updated = await existingBook.save();
                return updated;
            } else {
                return null; // Book with the provided ID not found
            }
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }

    async deleteBookById(id) {
        try {
            const isBookPresent = await this.Book.findOne({
                id
            });

            if (isBookPresent) {
                const isBookDeleted = await this.Book.deleteOne({
                    id
                });

                if (isBookDeleted.deletedCount > 0) {
                    return isBookDeleted;
                } else {
                    return null; // Book was not deleted
                }
            } else {
                return null; // Book with the provided ID not found
            }
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }




}

export default BookClass;
import BookService from "../services/book-service.js";

const bookService = new BookService ();

export const createBook = async (req, res) => {
    try {
            const response = await bookService.create(req.body);
            return res.status(201).json({
                success: true,
                message: 'Successfully created a new book',
                data: response,
                err: {}
            });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'something went wrong',
            data: {},
            err: error
        });
    }
}

export const getBooks = async (req, res) => {
    try {
        const response = await bookService.get(req.body.title);
        return res.status(200).json({
            success: true,
            message: 'Successfully fetched a book',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'something went wrong',
            data: {},
            err: error
        });
    }
}
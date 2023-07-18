import { BookRepository } from "../repository/index.js";

class BookService {
   
    constructor (){
        this.bookRepository = new BookRepository();       
    }
 
    async create (data){
        const book = await this.bookRepository.create(data);        
        return book;

    }

    async get(searchString) {
        const books = await this.bookRepository.getAll(searchString);
        return books;
    }
}

export default BookService;
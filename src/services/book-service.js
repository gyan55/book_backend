import { BookRepository } from "../repository/index.js";

class BookService {
   
    constructor (){
        this.bookRepository = new BookRepository();       
    }
 
    async create (data){
        const book = await this.bookRepository.create(data);        
        return book;

    }

    async get(author) {
        const book = await this.bookRepository.getAll(author);
        return book;
    }
}

export default BookService;
import CrudRepository from "./crud-repository.js";
import Book from "../models/book.js";

class BookRepository extends CrudRepository {
  constructor(){
    super(Book);
  }

  async findBy(data){
    try {
        const response  = await User.findOne(data);
        return response;
    } catch (error) {
        throw error;
    }
  }
  async getAll(offset,limit){
    try {
        const book = await Book.find().skip(offset).limit(limit);
        return book;
      } catch (error) {
          console.log(error);
      }
  }
}

export default BookRepository;
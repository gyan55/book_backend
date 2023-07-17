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
}

export default BookRepository;
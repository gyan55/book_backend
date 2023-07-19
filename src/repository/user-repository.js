import CrudRepository from "./crud-repository.js";
import User from "../models/user.js";

class UserRepository extends CrudRepository {
  constructor(){
    super(User);
  }

  async findBy(data){
    try {
        const response  = await User.findOne(data);
        return response;
    } catch (error) {
        throw error;
    }
  }
  async addToFavorites(userId, bookId) {
    try {
      await User.findByIdAndUpdate(userId, { $addToSet: { favourites: bookId } });// Use findByIdAndUpdate to find the user by their ID and update the favorites array
      console.log('Book added to favorites successfully');
    } catch (error) {
        throw error;
    }
  }
  async findById(userId) {
    try {
      const response  = await User.findById(userId);
      return response;
    } catch (error) {
       throw error;
   }    
  }
}

export default UserRepository;
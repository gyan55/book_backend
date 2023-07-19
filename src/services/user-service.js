import { UserRepository } from "../repository/index.js";
import User from "../models/user.js";

class UserService {

    constructor(){
        this.userRepository = new UserRepository();
    }
  

    async signup(data){
        try {
            console.log(data);
            const user = await this.userRepository.create(data);
            return user;
        } catch(error) {
            throw error;
        }

    }

    async getUserByEmail(email){
        try {
            const user  = await this.userRepository.findBy({email});
            return user;
        } catch (error) {
            throw(error);
        }
    }
     async signin(data) {
        try {
            const user = await this.getUserByEmail(data.email);
            
            if(!user) {
                throw {
                    message: 'no user found'
                };
            }
            if(!user.comparePassword(data.password)) {
                throw {
                    message: 'incorrect password',
                };
            }
            const token = user.genJWT();
            return token;
        } catch(error) {
            throw error;
        }
    }  
    async  addToFavorites(userId, bookId) {
        try {
          await this.userRepository.addToFavorites(userId, bookId);
        } catch (error) {
            throw error;
        }
        
    }
    async  getAllFavorites(userId) {
        const user = await this.userRepository.findById(userId);
        if (!user) {
          throw new Error('User not found');
        }
        const favourites = user.favourites;
        return favourites;
    }
}



export default  UserService;
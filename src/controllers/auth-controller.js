import UserService from "../services/user-service.js";

const userService  = new UserService();

export const signUp = async (req,res) => {
    try {
        const response = await userService.signup({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        });
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new user',
            data: response,
            err: {}
        });
    } catch(err) {
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: err
        });
    }
}

export const login = async (req, res) => {
    
    try { 
        console.log(req.body);
        const token = await userService.signin(req.body);
        console.log(token);
       
        return res.status(200).json({
            success: true,
            message: 'Successfully logged in',
            data: token,
            err: {}
        })
    } catch(error) {
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        });
    }
}


export const addToFavorites = async (req, res) => {    
    try {
      console.log("it is hit");
      const userId = req.body.id; // Assuming user data is available in req.user after authentication
      const bookId = req.body.bookId;
  
      await userService.addToFavorites(userId, bookId);
      res.status(200).json({
        success : 'true',
        message: 'Book added to favorites successfully'
        });
    } catch (error) {
      res.status(500).json({ 
          message: 'Something went wrong at while adding favourites',
          data: {},
          success: false,
          error: 'An error occurred while updating favorites' 
        });
    }
  }
  
    
export const getAllFavorites = async (req, res) => { 
    try {
      const userId = req.body.id; // Assuming user data is available in req.user after authentication
      const response = await userService.getAllFavorites(userId);
      console.log("controller hit");
      return res.status(201).json({
        success: true,
        message: 'Successfully got all fav books',
        data: response,
        err: {}
    });
    } catch (error) {
        res.status(500).json({ 
            message: 'Something went wrong at while fetching favourites',
            data: {},
            success: false,
            error: 'An error occurred while fetching favorites' 
          });
    }
  }
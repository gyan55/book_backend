import express from 'express';

const router = express.Router();

import { addToFavorites, getAllFavorites, login, signUp } from '../../controllers/auth-controller.js';
import { createBook,getBooks } from '../../controllers/book-controller.js';
import { authenticate } from '../../middlewares/authenticate.js';


router.post('/signup',signUp);
router.post('/login',login);
router.post('/bookEntry',createBook);
router.post('/favourites',addToFavorites);


router.get('/search',getBooks);
router.get('/favouriteBooks',getAllFavorites);

export default router;


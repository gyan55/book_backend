import express from 'express';
import {connect} from './config/database.js';
import  dotenv from 'dotenv';
import bodyParser  from 'body-parser';
import passport from 'passport';
import { passportAuth } from './config/jwt-middleware.js';
import apiRoutes from '../src/routes/index.js';

dotenv.config();  // Load environment variables from .env file
const port = process.env.PORT || 5000;



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use('/api',apiRoutes);

app.use(passport.initialize());
passportAuth(passport);


import UserRepository from './repository/user-repository.js';


app.listen(port, async () => {
    console.log(`server started at ${port}`);
    await connect();
    console.log('mongodb connected');

//const userObject = new UserRepository();
 /* const user = await userObject.create({
   email :'gyan@gmail.com',
   password :'123456',
   name: 'gyan'
});  */
    
});
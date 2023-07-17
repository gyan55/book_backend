import express from 'express';
import {connect} from './config/database.js';


const app = express();

import UserRepository from './repository/user-repository.js';


app.listen(5000, async () => {
    console.log('server started');
    await connect();
    console.log('mongodb connected');

const userObject = new UserRepository();
 /* const user = await userObject.create({
   email :'gyan@gmail.com',
   password :'123456',
   name: 'gyan'
});  */
    
});
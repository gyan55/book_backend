import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String
    },
    price: {
        type: String,
        required: true,
    },

     
},{
    timestamps: true
}
);


// we are creating a model called Book and it will follow the bookSchema
const Book = mongoose.model('Book',bookSchema);
export default Book;
const mongoose = require('mongoose');


const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Tiyle can not be empty']
    },

    description: {
        type:String,
        required: [true, "Description cant be empty"]
    },

    difficulty:{
        type: String,
        enum:["easy", 'medium', "hard"],
        required:[true, "Difficulty cant be empty"],
        default: 'easy'
    },

    testCases: [
        {
            input:{
                  type: String,
                  required: true
            },
            output:{
                  type: String,
                  required: true
            }
        }
    ],
    editorial: {
        type:string,
    }
});

const Problem = mongoose.model('Problem', problemSchema)
module.exports = Problem;
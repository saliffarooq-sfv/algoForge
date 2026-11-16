const mongoose = require('mongoose'); 
const { NODE_ENV, ATLAS_DB_URL } = require('./server.config');


async function connectionToDB(){

    try {
        if (NODE_ENV=="development"){
            await mongoose.connect(ATLAS_DB_URL)
        } 
        else if (NODE_ENV=="Production"){
            await mongoose.connect("OTHER URL")
        }
    
    
    }   
    catch(error){
        console.log('Connection to DB failed');
        console.log(error);
    }

}



module.exports = connectionToDB
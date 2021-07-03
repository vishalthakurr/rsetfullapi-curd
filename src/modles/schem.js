const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({

    ranking: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    scored: {
        type: Number,
        required: true,
       
    },
    event: {
        type: String,
        default:"100m"
        
    }
});

//create model or table
const MensRank = new mongoose.model("MensRank",menSchema);


module.exports= MensRank;    //export
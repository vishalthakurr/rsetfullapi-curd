const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/olymics", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection sucessful")
}).catch((e)=>{
    console.log(e);
})
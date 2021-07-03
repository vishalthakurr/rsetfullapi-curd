const express = require("express")
const router = new express.Router();
const MensRank = require("../modles/schem")     // import schema and model


// we will handel post req

router.post("/mens", async (req, res)=> {
    try{

        const addmember = new MensRank(req.body)
        console.log(req.body)

       const addedmen = await addmember.save();
       res.status(201).send(addedmen);

    }catch(e) {
        res.status(400).send(e)

    }

});


//read the data

router.get("/mens", async (req, res)=> {
    try{

       const getmem = await MensRank.find({}).sort({"ranking":1}) 
       res.status(200).send(getmem);

    }catch(e) {
        res.status(500).send(e)

    }

});
//individual data get

router.get("/mens/:id", async (req, res)=> {
    try{

        const _id = req.params.id;
       const getmem = await MensRank.findById(_id) 
       res.status(200).send(getmem);

    }catch(e) {
        res.status(500).send(e)

    }

});


//update the data

router.patch("/mens/:id", async (req, res)=> {
    try{

        const _id = req.params.id;
       const upmem = await MensRank.findByIdAndUpdate(_id ,req.body,{new:true}) ;
       res.status(200).send( upmem);

    }catch(e) {
        res.status(500).send(e)

    }

});

// detete the data 

router.delete("/mens/:id", async (req, res)=> {
    try{

       const upmem = await MensRank.findByIdAndDelete(req.params.id ) ;
       res.status(200).send( upmem);

    }catch(e) {
        res.status(500).send(e)

    }

});

module.exports=router;



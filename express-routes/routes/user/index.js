const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.json({
        msg : "Hola mi amiga"
    });
});

router.post("/",(req,res)=>{
    console.log(`${req.body.username}`);
    res.json({
        msg : `Hola ${req.body.username}`
    });
});

router.put("/:id",(req,res)=>{
    console.log(`${req.params.id}`);
    res.json({
        msg : `Changing user ${req.params.id}`
    });
});

router.delete("/:id",(req,res)=>{
    console.log(`${req.params.id}`);
    res.json({
        msg : `Delete user ${req.params.id}`
    });
});



module.exports = router;





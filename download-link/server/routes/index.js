const express = require('express'),
router = express.Router();

router.get("/", (req, res)=>{
    res.json({data : "inner router"});
});

module.exports = router;
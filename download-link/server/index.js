const express = require('express');

const app = express();

app.use("/test", require('./routes/index'));

app.get("/", (req, res)=> {
    res.json({ data: "Hi there"});
});


app.listen(process.env.PORT || 3000, ()=> console.log(`Connected successfully to port 3000`));

console.log("Test");
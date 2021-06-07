const express = require('express');
const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use("/user", require('./routes/user/index'));

app.listen(process.env.PORT || 3000, ()=> console.log(`Connected successfully to port 3000`));

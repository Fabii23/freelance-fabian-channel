

##### Create index.js

<code>
    touch index.js
</code>

#### Create our package.json
<code>
npm init -y
</code>

##### Add our npm run script to package.json
<pre>
{
    "dev" : "nodemon ."
}
</pre>


##### Install our dependencies
<pre>
npm i nodemon -g
npm i express --save
</pre>


##### Test it out with 'npm run dev'

####
Add bare minimum for express server
<pre>
const express = require('express');
const app = express();

app.get("/", (req, res)=> {
    res.json({ data: "Hi there"});
});


app.listen(process.env.PORT || 3000, () => console.log(`Connected successfully to port 3000`));
</pre>

##### Split terminal  :
Start server on one side and use curl on the other side. Or use the .rest file with extension.

Test : http://localhost:3000







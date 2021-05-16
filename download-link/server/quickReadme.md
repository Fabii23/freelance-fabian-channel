

### Serving APIs with Express

Express is a minimalist web application framework for Node, and it super easy to set up.

Let get started

Assumptions you have node installed : https://nodejs.org/en/download/
You have an editor installed : https://code.visualstudio.com/

1.) Create a directory with a name of your choosing, lets call it helloword
2.) Install the following modules
<pre>
npm i nodemon -g
npm i express --save
</pre>
3.) Create our source file for the server code, we'll call it index.js

4.) Add bare minimum for the express server
<pre>
    const express = require('express');
    const app = express();

    app.get("/", (req, res)=> {
        res.json({ data: "Hi there"});
    });

    app.listen(process.env.PORT || 3000, () => console.log(`Connected successfully to port 3000`));
</pre>

5.) Run our server file using :
<pre>
node .
</pre>

6.) Next open a terminal 
Test : http://localhost:3000







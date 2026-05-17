const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('users',(req,res)=>{
    res.send('users are waiting');
})

app.listen(port, () => {    console.log(`Example app listening at http://localhost:${port}`);
});
const express = require('express');

const app = express()

app.get('/', (request, response)=>{
    response.send("Xosa @oops_rafa019");
})



app.listen(8000, ()=>{
    console.log("Abrindo @oops_rafa019 🚀😘");
})
import express from "express";
console.log("Hola mundo");

const app = express();
app.set('port', 4000)
app.listen(app.get('port'), () => {
    console.log(app.get('port'))
})

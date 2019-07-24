const express = require('express');
const app = express();
const morgan = require('morgan')
const port = 4000;


app.listen(port, () => {

    console.log(`Server Started on Port ${port}`)
})


app.get('/api/students', (req, res) => {
    const students = [
        {id: 1, firstname: 'Captain', lastName: 'fancy'},
        {id: 1, firstname: 'John', lastName: 'buttercup'},
        {id: 1, firstname: 'Dusty', lastName: 'Trail'},
    ];
    res.json(students);
});



//Middleware

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));



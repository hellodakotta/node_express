const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all('/dishes', (req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the dishes to you!');
    })
    .post((req, res, next) => {
        res.end(`Will add the dish ${req.body.name} with details ${req.body.description}`);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end(`PUT operation is not supported for /dishes`);
    })
    .delete((req, res, next) => {
        res.end('Deleting all the dishes');
    })
// .get('/dishes/:dishId', (req, res, next) => {
//     res.end(`Will send details of the dish ${req.params.dishId} `);
// })
//
// .post('/dishes/:dishId', (req, res, next) => {
//     res.statusCode = 403;
//     res.end(`POST operation is not supported for /dishes/${req.params.dishId}`);
// })
//
// .put('/dishes/:dishId', (req, res, next) => {
//     res.write(`Updating the dish: ${req.params.dishId}`);
//     res.end(`Will update the dish ${req.body.name} with details ${req.body.description}`);
// })
//
// app.delete('/dishes/:dishId', (req, res, next) => {
//     res.end(`Deleting the dish: ${req.params.dishId}`);
// });

module.exports = dishRouter
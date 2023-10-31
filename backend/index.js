import express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import  connect  from './database/database_config.js';
import router from './router/route.js';
// middlewares
const app = express();
app.use(json());
app.use(cors());
app.use(morgan('dev'));
app.disable('x-powered-by');

const port = 3000;

app.get('/', (req, res) => { 
    res.status(201).json('Hello World!');
});


app.use('/api', router);

/** start server only when we have valid connection */
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log("Invalid database connection...!");
})
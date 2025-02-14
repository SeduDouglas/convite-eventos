const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: '*',                
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
    allowedHeaders: ['Content-Type', 'Authorization'],   
    credentials: true,          
    optionsSuccessStatus: 200  
};

app.use(cors(corsOptions));
app.use(express.json());

const conviteRoutes = require('./routes/convite');
app.use('/convite', conviteRoutes);


app.get('/', (req, res) => {
    res.send('<h1>Servidor Ativo!</h1>');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
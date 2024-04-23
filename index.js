const express = require('express');
const bodyParser = require('body-parser');
// import routes
const userRouter = require('./Routes/userRoutes');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.get('/',(req, res, next)=>{
    res.send('app is running');
});

app.use('/api/v1',userRouter.router);

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});
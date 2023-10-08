const express = require("express");
const app = express();
const userRouter = require(__dirname + '/routers/userRouter');

const PORT = 3000;


app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () => console.log(`Server start on ${PORT} port`));




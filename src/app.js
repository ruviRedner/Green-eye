const exp = require('express')
const dotenv = require('dotenv')
const { connectToMongo } = require('./config/dbConfig')
const cookieParser = require('cookie-parser')

const app = exp();
dotenv.config();
connectToMongo();

const port = process.env.PORT || 3000

app.use(exp.json())
app.use(cookieParser())

app.use("/auth" ,require("./router/authRouter"))
app.use("/user" ,require("./router/userRouter"))
app.use("/greenEye" ,require("./router/greenEyeRouter"))

app.listen(port,()=> {
    console.log(`Server is running on port ${port}`)
})


const exp = require('express')
const dotenv = require('dotenv')

const app = exp()
dotenv.config()
const port = process.env.PORT || 3000

app.use(exp.json())

app.use("/auth" ,require("./router/authRouter"))
app.use("/user" ,require("./router/userRouter"))
app.use("/greenEye" ,require("./router/greenEyeRouter"))

app.listen(port,()=> {
    console.log(`Server is running on port ${port}`)
})


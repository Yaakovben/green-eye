const exp = require('express')
const dotenv = require('dotenv')
const {connectToMongo} = require('./config/dbConfig')
const cookieParser = require('cookie-parser')

const app = exp()
dotenv.config()
connectToMongo()
const port = process.env.PORT ||1010;

app.use(exp.json()) 
app.use(cookieParser())   

app.use('/auth', require('./routes/authRouter'))                  
app.use('/user', require('./routes/userRouter'))
app.use('/greenEye', require('./routes/greenEyeRouter'))

app.listen(port, () => console.log("Serever up and running on port http://localhost:" + port));
                

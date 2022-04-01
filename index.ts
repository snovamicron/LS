import http from 'http'
import express from 'express'
import cors from 'cors'
import connectToDatabase from './database/databaseConnection'

// Routers
import UserRoutes  from './Routes/AllUserRoutes'
import BookRoutes from './Routes/AllBookRoutes'


const PORT = process.env.PORT || 4000
const app = express()
const server = http.createServer(app)

connectToDatabase()
app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.status(200).send('Hello World')
})

app.use('/user', UserRoutes)
app.use('/book', BookRoutes)


server.listen(PORT, ()=>{
    console.log(`server in running on http://localhost:${PORT}`)
})

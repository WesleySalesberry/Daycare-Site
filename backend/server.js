import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import fileupload from 'express-fileupload'
import cors from 'cors'
import connectDB from './configs/db.js'

dotenv.config()
connectDB()

const app = express()

import notification from './routes/notification.js'
import user from './routes/users.js'
import messages from './routes/messages.js'
import downloads from './routes/downloads.js'

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(fileupload({ useTempFiles: true }));
app.use(express.json())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
} else {
    /**
     * @TODO create a file log
     */

    app.use(morgan('combined'))
}




const __dirname = path.resolve()

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}


app.use('/api/v1/notification', notification)
app.use('/api/v1/user', user)
app.use('/api/v1/message', messages)
app.use('/api/v1/download', downloads)

const PORT = process.env.PORT || 3001

app.listen(
    PORT,
    console.log(
        `> Server running in ${process.env.NODE_ENV} mode on: http://localhost:${PORT}`.yellow.bold
    )
)
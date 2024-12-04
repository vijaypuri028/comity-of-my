import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { CORS_ORIGIN } from '../backend/envData.js'

const app = express()

app.use(cors({
    origin: CORS_ORIGIN,
    credentials: true
}))

app.use(morgan('common'))
app.use(express.urlencoded({ extended: false }))

app.use(express.json())

// app.use('/static', express.static(__dirname + '/public/temp'))
app.use(express.static("public"))

export { app }
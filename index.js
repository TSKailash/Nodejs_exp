import winston from 'winston'
import express from 'express'

const logger=winston.createLogger({
    level: 'http',
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: "app.log"})
    ]

})

const app=express()
const PORT=3000

app.use((req, res, next)=>{
    logger.http(`${req.method} ${req.url}`)
    next()
})

app.use(express.json())

app.get("/", (req, res)=>{
    res.send("Hello")
})

app.use((err, req, res, next)=>{
    logger.error(err.message)
    res.status(500).send("Internal server error")
})

app.listen(PORT, ()=>{
    logger.info("Server is running on port "+PORT)
})
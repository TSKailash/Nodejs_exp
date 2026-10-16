import winston from 'winston'
import express from 'express'
// const logger=winston.createLogger({
//     level: 'debug',
//     format: winston.format.simple(),
//     transports: [
//         new winston.transports.Console(),
//         new winston.transports.File({filename: "app.log"})
//     ]

// })

// logger.info("Server is starting...")
// logger.debug("Debugging information")
// logger.error("Error..")
// logger.warn("Warning")
const app=express()
const PORT=process.env.PORT || 3000

app.use(express.json())

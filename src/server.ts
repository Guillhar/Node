import express, {Request, Response} from 'express'
import {Server} from 'http'

const server = express()

server.get('/',(req:Request,res:Response)=>{

            res.send("AMOR AI LOVE SEMPRE DEPRESSIVO ;(")

})

server.listen(80)
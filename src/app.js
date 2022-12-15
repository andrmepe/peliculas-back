import express from 'express'
import {BD} from './db.js'
import {PORT} from './config.js'

const app = express()

app.get('/', async(req, res)=>{
    const rows = await BD.query('SELECT * from peliculas')
    res.json(rows)
})

app.listen(PORT)
console.log('server in port: 3001')
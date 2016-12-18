const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const parser = require('body-parser')
const morgan = require('morgan')
const routes = require('./routes')
const cors = require('cors')

// port settings
let port = process.env.PORT || 4200

// web socket protocol on localhost on port 4200
server.listen(port, () => {
    console.log(`Listen to http://localhost:${port}`)
})

// Middleware
// Body Parser, Morgan, and Public Compiled folder
app.use(express.static('public'))
app.use(cors())
app.use(morgan('dev'))
app.use(parser.json())

// Render the index.html
app.get('/', (req, res) => { res.sendFile('index.html') })

app.use('/api', routes) // when you add api routes in routes.js

// Web socket on connection 
io.on('connection', (socket) => {
    io.emit('this', { will: 'be received by everyone' })

    // disconnect the websocket when user leaves
    socket.on('disconnect',  () => {
        io.emit('user disconnected')
    })
})
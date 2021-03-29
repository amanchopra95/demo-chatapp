const express = require('express')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')
const cors = require('cors')
const users = require('./models/User')


const app = express()
const server = http.createServer(app)
const io = socketio(server, {
    cors: {
        origin: "*"
    }
})

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client/build')))

app.use((req, res, next) => {
    req.io = io
    next()
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
})

app.use('/user', require('./routes/user'))
app.use('/room', require('./routes/room'))

io.on('connection', socket => {
    // Add User to user db
    // For now just User Object
    users.add({
        'id': socket.id
    })
    socket.emit('message', 'Welcome to chat app')
    // socket.broadcast.emit('message', "A user has joined the chat")

    // socket.on('set username', (username) => {
    //     users.add({
    //         "id": socket.id,
    //         "name": username
    //     })
    //     io.emit('useradded', "New user is added in the room " + socket.id)
    // })

    socket.on('disconnect', () => {
        users.remove(socket.id)
        io.emit('userremoved', 'User is removed')
        io.emit('message', "A user has left the chat")
    })
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log("Listening on port " + PORT)
})

process.on('unhandledRejection', (err, promise) => {
    console.error(`Error: ${err.message}`)
    server.close(() => process.exit(1))
})
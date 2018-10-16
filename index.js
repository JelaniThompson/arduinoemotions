const fastify = require('fastify')
const sockets = require('socket.io')
let five = require("johnny-five")
let board = new five.Board()

const app = fastify()

// Our state variable
let isLightOn = false

let io

const start = async () => {
  await app.listen(8080)
  io = sockets(app.server)
};

// Working with the photoresistor
board.on('ready', async function() {
      await start() 
      // Assign the light detection to analog port 0 and set scanning to every couple secs
      var light = new five.Light({
        pin: "A0",
        freq: 1000
      });

      io.on('connection', (socket) => {
        console.log(`${socket.id} connected`)

      // Get light data from photocell
      light.on("change", function() {
        console.log(this.level)
        socket.emit('light:on', this.level
      )
      })
    })
  })

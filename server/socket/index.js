const Message = require('../db/models/message');
const Channel = require('../db/models/channel');

module.exports = io => {

  io.on('connection', socket => {

    console.log(socket.id, ' has made a persistent connection to the server!');

  });

  // Hey, this is pretty cool!
  // After a message is created, we emit a 'new-message' event
  // to ALL clients that have joined the room corresponding to that message's channel Id!
  Message.hook('afterCreate', message => {
    io.to(message.channelId).emit('new-message', message);
  });

  // Likewise, whenever a channel is created, we emit a 'new-channel' event to ALL clients
  Channel.hook('afterCreate', channel => {
    io.emit('new-channel', channel);
  });
}

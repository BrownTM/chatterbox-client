var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', Rooms.add);
  },

  filterRooms: function(messages) {
    messages.forEach(function(message) {
      if (Rooms.rooms[message.roomname] === undefined) {
        console.log('filterRooms', this);
        RoomsView.renderRoom(message.roomname);
        Rooms.rooms[message.roomname] = 1;
      }
    });
  },

  renderRoom: function(room) {
    //call renderRoom in fetch in app.js
    // this.$select.append('<p>'+ room + '</p>');
    $(Rooms.render({room})).appendTo(this.$select);
  }

};

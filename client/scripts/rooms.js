var Rooms = {
  //add room function
  /*'something' .append( room + '<')*/
  rooms: {},

  //render: _.template()
  render: _.template(`
    <option>
      <%- room%>
    </option>
  `),

  add: function() {
    var newRoom = prompt('Type a name for your new room');
    if (rooms[newRoom] === undefined) {
      rooms[newRoom] = 1;
      RoomsView.renderRoom(newRoom);
    }
  }

};
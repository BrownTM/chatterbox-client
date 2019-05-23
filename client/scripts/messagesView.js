var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  takeInAllMessages: function(messages) {
    RoomsView.filterRooms(messages);
    messages.forEach((message) => {
      if (message.username !== undefined && message.text !== undefined) {
        if (message.roomname === undefined) {
          message.roomname = 'lobby';
        }
        RoomsView.filterMessagesforEachRoom(message);
      }
    });
  },

  renderMessage: function(message) {
    $(MessageView.render(message)).appendTo(MessagesView.$chats);
  }

};
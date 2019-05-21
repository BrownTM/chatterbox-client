var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(messages) {
    messages.forEach((message) => {
      if (message.username !== undefined || message.text !== undefined) {
        $(MessageView.render(message)).appendTo(MessagesView.$chats);
      }
    });
  }

};
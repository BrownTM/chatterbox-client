var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  takeInAllMessages: function(messages) {

    messages.forEach((message) => {
      if (message.username !== undefined || message.text !== undefined) {
        MessagesView.renderMessage(message);
      }
    });
  },

  renderMessage: function(message) {
    //console.log('RENDER MESSAGE', message);
    $(MessageView.render(message)).appendTo(MessagesView.$chats);
  }

};
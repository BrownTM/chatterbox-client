var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var message = {
      text: this[0].value,
      username: App.username,
      roomname: 'lobby'
    };

    Parse.create(message);
    $('#chats').empty();
    App.fetch();
    // console.log('click!', this[0].value);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
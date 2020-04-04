var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('#chats').html('');
    Parse.readAll((data) => {
    MessagesView.render(data);
    });

    window.setInterval( MessagesView.initialize, 10000);
  },

  render: function(data) {
    for (message of data.results) {
      MessagesView.renderMessage(message);
    }
  },

  renderMessage: function(message) {
    var htmlString = MessageView.render(message);
    $('#chats').append(htmlString);
  }
};
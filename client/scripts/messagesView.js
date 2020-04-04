var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('#chats').html('');
    Parse.readAll((data) => {
    MessagesView.render(data);
    Friends.initialize();
    });

    window.setInterval( MessagesView.initialize, 10000);
  },

  render: function(data) {
    for (message of data.results) {
      MessagesView.renderMessage(message);
    }
  },

  renderMessage: function(message) {
    message.username = MessagesView.sanitize(message.username || "");
    message.roomname = MessagesView.sanitize(message.roomname || "");
    message.text = MessagesView.sanitize(message.text || "");

    var htmlString = MessageView.render(message);
    $('#chats').append(htmlString);
  },

  // functionhtmlEncode(str){
  //   return String(str).replace(/[^\w. ]/gi, function(c){
  //      return '&#'+c.charCodeAt(0)+';';
  //   });
  // }

  sanitize: function(string) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
    };
    const reg = /[&<>"'/]/ig;
    return string.replace(reg, (match)=>(map[match]));
  }
};

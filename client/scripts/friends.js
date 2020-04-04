var Friends = {
  usernames : {},

  toggleStatus: function(newFriend) {
    if (newFriend in Friends.usernames) {
      delete newFriend;
    } else {
      Friends.usernames[newFriend] = true;
    }
  },

  initialize: function() {
    $('.username').on('click', event => {

      var newFriend = $(event.currentTarget).html();
      Friends.toggleStatus(newFriend);
      //Friends.usernames[newFriend] = true;

    });
    Friends.highlight();
  },

  highlight: function () {
    console.log(Friends.username);
    for (friend in Friends.usernames) {
      var chats = document.getElementsByClassName('chat');
      //console.log('chats array', chats);
      //chat.getIndex(friend)
      for (chat of chats) {
        //console.log('chat', chats);
        if ($(chat).find('.username').html() === friend) {
          //console.log('Username match');
          $(chat).css('font-weight', 'bold');

        } else {
          $(chat).css('font-weight', 'normal');
        }
      }
    }
  }
};


    //   <div class="chat">
    //     <div class="username"> %= username =% </div>
    //     <div> <b> <%=text%>> </b> </div>
    //   </div>
    // `)

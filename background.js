// Checking page title
if (document.domain == 'chat.sc2tv.ru') {
  
      chrome.storage.sync.get({
		textEnding: ':ziga:',
		}, function(items) {
			var  chatInput = document.getElementsByName("chat-text")[0];

			chatInput.onkeypress = function(e){
				if (!e) e = window.event;
				var keyCode = e.keyCode || e.which;
				if (keyCode == '13'){
				  // Enter pressed
			  	  chatInput.value = chatInput.value + ' ' + items.textEnding;
			  	}
  			}
	  });
}
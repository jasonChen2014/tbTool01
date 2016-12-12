$(function(){
	chrome.extension.sendRequest({result: "yes"}, function(response) {
		if(response.continue == 'yes'){
			//alert('yes');
			window.location.reload();
		}
	});
});
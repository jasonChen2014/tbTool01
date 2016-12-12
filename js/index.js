$(function(){
	window.count = 0;
	window.no = 0;
	window.btnclick = false;
	$(".btn").on("click",function(){
		btnclick = true;
		count = 1;
		var url = $('input[name=url]').val();
		no = parseInt($('input[name=number]').val());
		console.log(no);
		chrome.tabs.create({url:url});
	});
	chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
		if(request.result == 'yes' && btnclick) {
			count++;
			if(count <= no){
				window.setTimeout(function(){
					sendResponse({continue: 'yes'});
				},2000);
			}else{
				btnclick = false;
				alert('已刷完');
			}
		}
	});
});
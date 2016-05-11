
$(document).ready(function(){
		$('.userContentWrapper').each(function(){
			var keyWordControl=0;
			
			var ps=$(this).find('p')
			ps.each(function(){
				if($(this).html().indexOf("Ninu")>-1){
					keyWordControl++;
				}
			});
			if(keyWordControl>0){
				$(this).remove();
				console.log("removing");
			}
		
	});
});
/*
chrome.tabs.query({'active': true}, function (tabs) {
	console.log(tabs[0].url);
    myFunction(tabs[0].url);
});



function myFunction(tablink) {
	console.log(tablink);
 if(tablink.indexOf("facebook") > -1){
	console.log("fejsbukalo");
	$('.userContentWrapper').remove();
	$('.userContentWrapper').each(function(){
			$(this).remove();
				console.log("removing");
		if($(this).find().find('p').indexOf("Kraljić")>-1){
		
			$(this).hide();
		}
	});
}
else{
	console.log("something else");
}

}*/
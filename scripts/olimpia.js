$(document).ready(function(){
	$('#home').click(function(){
	$('#home>a').addClass("current");	
		$('p#footer_info').html("test");
		
	});
	$('#price').click(function(){
		$('#welcome').load("table.html");
	});
});
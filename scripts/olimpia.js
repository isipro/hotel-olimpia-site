var vlas_text = "The town is located at the foot of the southern slopes of the Balkan Mountains, in the northern part of Burgas Bay. A settlement was founded at the present place of Sveti Vlas in the 2nd century AD by Thracians and Greeks, then called Larissa. It acquired the name Sveti Vlas in the 14th century after Saint Blaise, a monastery dedicated to whom existed in the region."
$(document).ready(function(){
	$('#home').click(function(){
		$('#home>a').addClass("current");
		$('#price>a').removeClass("current");
		$('#contacts>a').removeClass("current");
		$('#welcome').load("welcome.html");
		$('#right_aside h4').html("Sveti Vlas")
		$('p#footer_info').load("vlas_text.html");
		
	return false;
	});
	$('#price').click(function(){
		$('#price>a').addClass("current");
		$('#home>a').removeClass("current");
		$('#welcome').load("table.html");
		$('#right_aside h4').html("Every Room Has")
		$('p#footer_info').load("every_room_has.html");
		
	return false;
	});
	$('#contacts').click(function(){
		$('#contact>a').addClass("current");
		$('#home>a').removeClass("current");
		$('#price>a').removeClass("current");
		$('#welcome').load("contacts.html");
		$('#welcome').css("background", "url('../images/map_svVlas.jpg') no-repeat center 20px;")
	return false;
	});
	
});

// proverka dali ima class 'current' i ako ima go maha.
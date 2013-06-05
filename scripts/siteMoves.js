var i = 1;
console.log(i);
$(document).ready(function(){

	
	picture = $('#picture');	
	
	$('#left_shift').click(function(){
		var shift = "left";
		
		picture.fadeOut(function(){
			console.log(i);			
			pictureChange(shift);
			
		});
		i--;
	});
		$('#right_shift').click(function(){
		var shift = "right";
		
		picture.fadeOut(function(){
			console.log(i);			
			pictureChange(shift);
			
		});
		i++;
	});	
	
}); 

function pictureChange(shift){
		
		if (i >= 6) {
			i = 1
		}else if (i <= 1){ 
			i = 6;
		};
		
		picture.attr("src", "gallery/gallery_picture" + i +".jpg");
		picture.fadeIn(1000);
}

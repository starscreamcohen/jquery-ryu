$(document).ready(function() {

function showCool() {$('.ryu-cool').show();}		
 $(this).bind('keydown', function(event){
 	if(event.keyCode==88) {
 		$('.ryu-still').hide();
 		$('.ryu-ready').hide();
 		showCool()
 	}
 })
.bind('keyup', function(event) {
 	$('.ryu-cool').hide();
 	$('.ryu-still').show();
 	$('.ryu-ready').show();
 	
 });
 
$('.ryu').mouseenter(function(){
 	$('.ryu-still').hide();
 	$('.ryu-ready').show();
});
 $('.ryu').mouseleave(function() {
 	$('.ryu-ready').hide();
 	$('.ryu-still').show();
})

 .mousedown(function() {
 	playHadouken();
 	$('.ryu-ready').hide();
 	$('.ryu-throwing').show();
 	$('.hadouken').finish().show()
 	.animate( {'left': '1200px'}, 500, 
 	function() {
 		$(this).hide();
 		$(this).css('left', '526px');
 		}
 	);	
 })
 .mouseup(function() {
 	// ryu goes back to his ready position
 	$('.ryu-throwing').hide();
 	$('.ryu-ready').show();
 });


 
 function playHadouken () {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}
});
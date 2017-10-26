var gridLength = 16;
var block = "<div class='block'></div>";
var br = "<br>";

$(document).ready( function() {
	buildGrid(gridLength);
	$('#board').on('mouseenter', '.block', function() {
		$(this).addClass('draw');
	});
	$('#wrapper').on('click', '#clear', function() {
		$('#board').empty();
		gridLength = parseInt(prompt("Enter the number of boxes along one axis of the board:", "16"), 10);
		buildGrid(gridLength);
	});
});

function buildGrid(length) {
	for(var i=1; i <= length; ++i) {
		for(var j=1; j <= length; ++j) {
			$('#board').append(block);
		}
		$('#board').append(br);
	}
	var dimension = 700/length+"px";
	$('.block').css({"height": dimension, "width": dimension});
}
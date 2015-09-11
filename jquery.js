$(document).ready(function() {
	$('#keyboard-upper-container').hide();
	$('#keyboard-lower-container').show();
	$(document).keydown(function(e){
		if (e.which === 16) {
			$('#keyboard-lower-container').hide();
			$('#keyboard-upper-container').show();
		};
});
	$(document).keyup(function(e){
		if (e.which === 16) {
			$('#keyboard-upper-container').hide();
			$('#keyboard-lower-container').show();
		};
	
	});

});
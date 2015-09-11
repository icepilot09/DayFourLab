$(document).ready(function() {
	$('#keyboard-upper-container').hide(function (){	
	});
	$('#keyboard-upper-container').keydown(function(){
		$('keyboard-upper-container').show(function(){			
		});
	});
});
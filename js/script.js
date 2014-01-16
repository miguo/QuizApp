$(document).ready(function() {


	$(".submit-answer").click(function() {
		event.preventDefault();
		var list = $('input[name=radio-buttons]:checked').parent();
		//var guesses = $('input[name=radio-buttons]').parent();
		var valGuess = $('input[name=radio-buttons]:checked').val()
		var button = $(this input[name='radio-buttons'])

		if (valGuess == 1) {
			$(this).text('You got it!');
			$(list).css("background-color", "#2ecc71");
			$(button).attr('disabled', true);
			$('.scoreCount').text(getRadioValue());
			console.log("You got it!");
		}

		else if (valGuess == 0) {
			$(this).text('Incorrect');
			$(list).css("background-color", "#e74c3c");
			$(button).attr('disabled', true);
			$('.scoreCount').text(getRadioValue());
			console.log("Incorrect");
		}

		else {
			alert("Please choose an answer before submitting!");
		}


	});

	function getRadioValue() {
    	for (var i = 0; i < document.getElementsByName('radio-buttons').length; i++) {
    		if (document.getElementsByName('radio-buttons')[i].checked) {
    			return document.getElementsByName('radio-buttons')[i].value;
    		}
    	}	
	}




});






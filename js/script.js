$(document).ready(function() {

	var scoreCount = 0;


	$(".submit-answer").click(function() {
		event.preventDefault();
		var list = $('input[name=radio-buttons]:checked').parent();
		//var guesses = $('input[name=radio-buttons]').parent();
		var valGuess = $('input[name=radio-buttons]:checked').val()
		var button = $(this).attr("name","radio-buttons");

		if (valGuess == 1) {
			$(this).text('You got it!');
			$(list).css("background-color", "#2ecc71");
			$(button).attr('disabled', true);
			console.log("You got it!");
			scoreCount++
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

		var countText = "Score: <span class='scoreCount'>" + scoreCount + "</span> out of 10 correct";
		$("p.scoreText").html(countText);

	});

});
	
	function finalScore() {
			if (scoreCount >= 0 && scoreCount <= 4) {
				$('p.final-score').html('Strangers on the street status: Your score of ' + scoreCount + ' out of 10 is a bit low. Try the quiz again!');
			}

			else if (scoreCount >= 5 && scoreCount <= 7) {
				$('p.final-score').html('Acquaintance status: Not too bad, you got ' + scoreCount + ' out of 10. Try the quiz again for a high score!');
			}

			else {
				$('p.final-score').html('BFF status: Congratulations! You got a high score of ' + scoreCount + ' out of 10.')
			}
		
	}











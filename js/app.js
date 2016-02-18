var elementArr = ["Yang Water", "Yin Water", "Yang Wood", "Yin Wood",
	 "Yang Fire", "Yin Fire", "Yang Earth", "Yin Earth", "Yang Metal", 
	 "Yin Metal"];

var zodiacArr = ["Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox",
	 "Tiger", "Rabbit", "Dragon", "Snake"];

var monthsArr = ["January", "February", "March", "April", "May",
	 "June", "July", "August", "September", "October",
	  "November",	"December"];

$(document).ready(function() {

	for (var i = 1; i <= 31; i++) {
		$('#days-opt').append('<option value="'+i+'">'+i+'</option>');

	}

	for (var i = 0; i < monthsArr.length; i++) {
		$('#months-opt').append('<option value="'+monthsArr[i]+'">'
			+monthsArr[i]+'</option>');
	}

	$('button').click(function(event) {
		
		var selectDay = $('#days-opt option:selected').val();
		
		for (var trackIndex = 0; trackIndex <= 31; trackIndex++ ) {

			if (selectDay == (trackIndex+1)) {
				$('#day-element').text(elementArr[trackIndex]);
				$('#day-zod').text(zodiacArr[trackIndex]);

				if (selectDay >= elementArr.length) {
					$('#day-element').text(elementArr[trackIndex%elementArr.length]);
					$('#day-zod').text(zodiacArr[trackIndex%zodiacArr.length]);
				
				}
			}
		}

		var selectMonth = $('#months-opt option:selected').val();
		
		for (var trackMonth = 0; trackMonth <= monthsArr.length; trackMonth++) {

			if (selectMonth == monthsArr[trackMonth]) {
				$('#month-element').text(elementArr[trackMonth]);
				$('#month-zod').text(zodiacArr[trackMonth]);
			}

		}

		event.preventDefault();
	})	
})
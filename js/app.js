var elementArr = ["Yang Water", "Yin Water", "Yang Wood", "Yin Wood",
	"Yang Fire", "Yin Fire", "Yang Earth", "Yin Earth", "Yang Metal", "Yin Metal"];

var zodiacArr = ["Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig", "Rat",
	"Ox", "Tiger", "Rabbit", "Dragon", "Snake"];

var monthsArr = ["January", "February", "March", "April", "May",
	 "June", "July", "August", "September", "October",
	  "November",	"December"];

	
var trackDays = 1;
$(document).ready(function() {
	
	for (var i = 1; i <= 31; i++) {
		$('#days-opt').append('<option data-track-days="'+trackDays+'" value="'+i+'">'+i+'</option>');		
		trackDays++;
	}

	for (var i = 0; i < monthsArr.length; i++) {
		$('#months-opt').append('<option value="'+monthsArr[i]+'">'
			+monthsArr[i]+'</option>');

		
	}
	

	$('button').click(function(event) {

		var selectDay = $('#days-opt option:selected').val();
		var selectMonth = $('#months-opt option:selected').val();	

		for (var trackIndex = 0; trackIndex <= 366; trackIndex++) {
			
			if (selectDay == (trackIndex+1)) {
				$('#day-element').text(elementArr[trackIndex]);
				$('#day-zod').text(zodiacArr[trackIndex]);

				if (selectDay >= elementArr.length) {
					$('#day-element').text(elementArr[trackIndex%elementArr.length]);
					$('#day-zod').text(zodiacArr[trackIndex%zodiacArr.length]);
				
				}
			}

			for (var trackMonth = 0; trackMonth <= monthsArr.length; trackMonth++) {

				var zodiacArr2 = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
					 "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];

				var elementArr2 = ["Yang Earth", "Yin Earth", "Yang Metal", "Yin Metal",
					"Yang Water", "Yin Water", "Yang Wood", "Yin Wood","Yang Fire", 
					"Yin Fire"];
				
				if (selectMonth == monthsArr[trackMonth]) {
					$('#month-element').text(elementArr2[trackMonth]);
					$('#month-zod').text(zodiacArr2[trackMonth]);
				}				
			}
		}
		event.preventDefault();
	})	
})

// function orderArr(array, indexA, indexB) {
// 	var tmp = array[indexA];
// 	array[indexA] = array[indexB];
// 	array[indexB] = tmp;
// }
// for (var i = 0; i <= 6; i++){

// 	orderArr(zodiacArr, i, 12);
// }
// // orderArr(zodiacArr, 2, 5);
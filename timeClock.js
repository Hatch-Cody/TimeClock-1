$(function() {
	
	var $timeStamps = $('#timeStamps');
	var $timeIn = $('#timeIn');
	var $timeOut = $('#timeOut');
	
	$.ajax({
		type: 'GET',
		url: 'toBeNamed',
		success: function(timeStamps) {
			$.each(timeStamps, function(i, timeStamp) {
				$timeStamps.append('<li>Time-in: '+ timeStamp.timeIn +', Time-out: '+ timeStamp.timeOut + '</li>');
			});
		},
		error: function() {
			alert('Error loading timestamps!');
		}
	});
	
	
	$('#clock-in').on('click', function() {
		
		var timeIn = {
			hour: $time.hour();
			minute: $time.minute();
			date: $time.date();
		};
		
		$.ajax([
			type: 'POST',
			url: 'toBeNamed',
			data: times,
			success: function(updatedTimes) {
			$times.append('<li>Time-in: '+ updatedTimes.date +' ' + updatedTimes.hour +':'+ updatedTimes.minute +'</li>');
			}
		]);
		
	}); 
	
	$('#clock-out').on('click', function() {
		
		
	}); 
	
});
$(document).ready(function(){
	console.log("Ready");
});

getAppointmentsFor = function(calendarID, APIKey){
	// calendarID = calendarID || "sainathstest@gmail.com";
	// APIKey = APIKey || "AIzaSyCsnhJeFit43UIwiDlH78El6t7tLoU5Nmk";
	calendarID = calendarID || "testprodigy.currentuser@gmail.com";
	APIKey = APIKey || "AIzaSyC6e2acOMY5pt9cp3T4he5zLCBwpF15cZE";
	$.ajax({
		// url: "http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo",
		url: "https://www.googleapis.com/calendar/v3/calendars/"+calendarID+"/events?key="+APIKey,
		dataType: "jsonp",
		success: function(res){
			$(res.items).each(function(ind, item){
				var time = formatUIDate(item.created);
				var appointment = "<p class='eventName'>" + time + " : " + item.summary + '</p>';
				$(".responseDiv").append(appointment);
			});
		}
	})
};



formatUIDate = function(date){
	var splitArr = date.split("T");
	var dateArr = splitArr[0].split("-");
	return dateArr[2] + "-" + dateArr[1] + "-" + dateArr[0];
};
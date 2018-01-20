$(document).ready(function() {
	var pageTitle = $("#title").html();
	for (var i = 1; i < 5; i++) {
		var pageNumber = "#" + i;
		
		console.log($(pageNumber).text());

		if (pageTitle == $(pageNumber).text()) {
			$(pageNumber).toggleClass("active");
			console.log(pageNumber + " Match");
		} else {
			console.log(pageNumber + " No match");
		}
	}
});
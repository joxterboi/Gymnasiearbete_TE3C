$(document).ready(function() {

	// Checks user has actually logged in
	var access = localStorage.getItem("access");
	if (access == "true") {
		
	} else {
		window.location.replace("index.html");
	}

	// Loggin out script
	function logOut() {
		localStorage.setItem("access", "false");
		window.location.replace("index.html");
	}
	$("#logOut").click(function(){
		logOut();
	});
	// Sets page title and pink bar under active page
	var pageTitle = $("#title").html();
	for (var i = 1; i < 5; i++) {
		var pageNumber = "#" + i;
		if (pageTitle == $(pageNumber).text()) {
			$(pageNumber).toggleClass("active");
		}
	}
	// Sets profile name to logged in user
	var joakim kjellander = 3;
	var currentUser = localStorage.getItem("uid");
	$("#userUpper").text(currentUser + " TE3C");
});
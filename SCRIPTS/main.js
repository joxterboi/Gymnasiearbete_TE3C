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
	var userDb = ["Joakim Kjellander Te3C", "Hektor Byfors Te3C", "Andreas Eriksson Te3C"]
	var currentUserId = localStorage.getItem("uid");
	var currentUser = userDb[currentUserId];
	$("#userUpper").text(currentUser);

	// Hides frånvarorapport
	$(".underMenuItems").children().hide();
	$(".underMenuItems div:first-child").show();

	// kollar anmäldfrånvaro
	var prevAbsence = localStorage.getItem("prevAbsence");
	if (prevAbsence != "true") {
		localStorage.setItem("prevAbsence", "true");
		localStorage.setItem("absenceAmount", 0);
	}
	// View repported absence
	$("#absenceCards").each(function(){
		startTime = JSON.parse(localStorage.getItem('startTime') || "[]");
		$(this).text(startTime[Math.floor(Math.random()*startTime.length)]);
	});
});
// Checkbox background change
function checkt() {
	$(".checkbox").toggleClass("clicked");
}
// Undermeny
$(".underMenu").find("button").click(function() {	
	$(".underMenu").find("button").removeClass("active");
	$(this).toggleClass("active");
	var goTo = "#" + $(this).val();
	$(".underMenuItems").children().hide();
	$(goTo).show();
});

// Lägg till frånvaro
$("#addAbsence").click(function(){
	$("#addAbsencePopUp").show();
})
// Sparar frånvaron
startTime = JSON.parse(localStorage.getItem('startTime') || "[]");

var saveAbsence = function () {
  var absence = $("#startTime").val();
  if (absence != "") {  	
	  startTime.push(absence);
	  localStorage.setItem('startTime', JSON.stringify(startTime));
	  $("#startTime").val("");
	  cancelAbsence();
  }
}
function rensa() {
	localStorage.setItem('startTime', "[]");
	location.reload();
}
// Tar bort frånvarorutan
function cancelAbsence() {
	$("#addAbsencePopUp").hide();
}
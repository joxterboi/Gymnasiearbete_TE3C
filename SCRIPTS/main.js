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
	showAbsence()
});
// Checkbox hektor
$("#kurser").find("button").click(function(){
	$(this).toggleClass("greenCheck");
})
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
var saveAbsence = function () {
	var absence = $("#startTime").val();
	if (absence && $("#stopTime").val() && $("#date").val() != "") {
		if (absence.match(/[0-9, :]/i) && $("#stopTime").val().match(/[0-9, :]/i) && $("#date").val().match(/[0-9, /]/i)) {
			if (absence.length = 5 && $("#stopTime").val().length <= 5 && $("#stopTime").val().length >= 5 && $("#date").val().length > 2 && $("#date").val().length < 6) {
				  if (absence != "") {  	
					  startTime.push(absence);
					  stopTime.push($("#stopTime").val());
					  date.push($("#date").val());
					  localStorage.setItem('startTime', JSON.stringify(startTime));
					  localStorage.setItem('stopTime', JSON.stringify(stopTime));
					  localStorage.setItem('date', JSON.stringify(date));
					  $("#startTime").val("");
					  $("#stopTime").val("");
					  $("#date").val("");
					  cancelAbsence();
					  showAbsence();
					}	
			} else {
				alert("Var snäll och fyll i ett tillåtet format!\n(hh:mm)\n(hh:mm)\n(dd/mm)");
			}
	} else {
		alert("Var snäll och bara fyll i nummer i fälten!")
	}
  } else {
		alert("Var snäll och fyll i alla fält innan du klickar på spara!");
	}
}
function rensa() {
	localStorage.setItem('startTime', "[]");
	localStorage.setItem('stopTime', "[]");
	localStorage.setItem('date', "[]");
	location.reload();
}
// Tar bort frånvarorutan
function cancelAbsence() {
	$("#addAbsencePopUp").hide();
}
// View repported absence
function showAbsence() {
	$("#absenceCards").text("");
	startTime = JSON.parse(localStorage.getItem('startTime') || "[]");
	stopTime = JSON.parse(localStorage.getItem('stopTime') || "[]");
	date = JSON.parse(localStorage.getItem('date') || "[]");
	for (i = 0; i < startTime.length; i++) {
	  $('<div class="absenceCard card" />').html(
	  	"<h1>" + "Från: " + "<span>" + startTime[i] + "</span>" + "</h1>" + 
	  	"<h1>" + "Till: " + "<span>" + stopTime[i] + "</span>" + "</h1>" + 
	  	"<h1>" + "Datum: " + "<span>" + date[i] + "</span>" + "</h1>"
	  	).appendTo('#absenceCards');
	}
}

// Lämmna in uppgifter
$("h5").click(function() {
	location.href="lammnaIn.html"
});
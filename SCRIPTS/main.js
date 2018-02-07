$(document).ready(function() {
	favicon = document.createElement('link');
    favicon.setAttribute('rel', 'shortcut icon');
    var head = document.querySelector('head');
    head.appendChild(favicon);
	$('link[rel="shortcut icon"]').attr('href', "../IMAGES/icons/favicon.png")
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
	//Sätter rätt title på svara på msg
	var msgTitle = (window.location.hash).replace("#", "").replace("%C3%A4", "ä").replace("%C3%B6", "ö");
	$("#writeMsg").find("h1").text("Svara på " + '"' + msgTitle + '"');
	// Hides frånvarorapport
	$(".underMenuItems").children().hide();
	$(".underMenuItems div:first-child").show();
	// Displas msg number
	var msgNumber = JSON.parse(localStorage.getItem("msgNumber"));
	if (msgNumber != 0)  {
		if (msgNumber > 0) {
			$("#msgNumber").text(msgNumber);
		} else {
			localStorage.setItem("msgNumber", 0);
			$("#msgNumber").hide();
		}
	} else {
			$("#msgNumber").hide();
	}
	// Looks at hash to see what to do with under menu
	// Looks for url to go to right tab direclty
	var hash = (window.location.hash);
	var underMenuContent = "#" + hash.slice(2);
	if (hash) {
		$(".underMenuItems").children().hide();
		$(underMenuContent).show();
		$('button').removeClass("active");
		$('button[value=' + hash.replace("#", "") + ']').addClass("active");
	}
	// Hides klara uppgifter
	$(".done").hide();
	// kollar anmäldfrånvaro
	var prevAbsence = localStorage.getItem("prevAbsence");
	if (prevAbsence != "true") {
		localStorage.setItem("prevAbsence", "true");
		localStorage.setItem("absenceAmount", 0);
	}
	// View repported absence
	showAbsence();
	// Lämmna in en uppgift title och uppgift
	var lammnaInTitle = (window.location.hash).replace("#", "").replace("%C3%A4", "ä");
	$("#lammnaInTitle").text(lammnaInTitle);
	// Hides all kureser cards
	$("#kurser").children("#container").children(".card").hide();
	//SCHEMA
	schemaResize();
		$(window).resize(function() {
			schemaResize();
		});
});
// END OF AUTO RUN CODE
// 
// 
// 
function schemaResize() {	
			var schemaHeight = document.body.clientHeight - 318;
			var schemaWidth = $("#day1").width() * 5 + 8;
			var schemaAspect = schemaHeight / schemaWidth;
	for (var i = 1; i < 6; i++) {
		for (var o = 1; o < $("#day" + i + " .block").length + 1; o++) {
			for (var p = 1; p < 7; p++) {
				var info = $("#day" + i + " .block:nth-child(" + o + ")").children("h" + p).html();
				var activeBlock = $("#day" + i + " .block:nth-child(" + o + ")");
				if (p === 1) {
					activeBlock.css("margin-top", info * schemaAspect * 5 + "%");
				} else if (p === 2) {
					activeBlock.css("height", info);
					activeBlock.children("h1").hide();
					activeBlock.children("h2").hide();
				} else if (p === 6) {
					activeBlock.css("background-color", info);
					activeBlock.children("h6").hide();
				}
			}
		}
	}
}
function clearMetaData() {
	
}
// Avbryter svara på msg, skickas tillbaka
$("#msgButtons").find("#avbrytKnapp").click(function(){
	location.href = "kontakt.html#meddelanden";
});
//Svara på medelande
$(".answerButton").click(function() {
	location.href = "svaraMsg.html#" + $(this).parent().find("h2").text();
});
//Visar namn på vald fil
$("#file").change(function(){
	var fileName = $("#file").val().substring(12);
	$("#fileName").text(fileName);
});
// Skicka in uppgiften
$("#lammnaIn").find("button").click(function(){
	var fileName = $("#file").val().substring(12);
	var lammnaInTitle = (window.location.hash).replace("#", "").replace("%C3%A4", "ä");
	alert("Du har lämmnat in " + '"' + fileName + '"' + " i uppgiften " + '"' + lammnaInTitle + '"');
	location.href = "uppgifter.html";
});
$("#kurser").find("button").click(function(){
	$(this).toggleClass("greenCheck");
	var activeCard = "#" + $(this).prev().text();
	activeCard = activeCard.replace(/ä/g, "");
	activeCard = activeCard.replace(/\s/g,"");
	$(activeCard).toggle();
});
// Checkbox background change
function checkt() {
	$(".checkbox").toggleClass("clicked");
}
// Undermeny
$(".underMenu").find("button").click(function() {	
	$(".underMenu").find("button").removeClass("active");
	$(this).toggleClass("active");
	var goTo = "#" + $(this).val().slice(1);
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
	var hash = $(this).prev().text();
	hash = $(this).parent().find("h2").text() + " - " + $(this).prev().text();
	location.href="lammnaIn.html#" +  hash;
});
// Visar alla uppgifter
$(".chkUppgift").click(function() {
	$("h4[class='done']").text("Klar");
	$("h4[class='done']").css("color", "var(--green)");
	$(".done").toggle();
});
// Look at MSG
function notis() {
	localStorage.setItem("msgNumber", 0);
	location.href=("kontakt.html#meddelanden");
	$("#msgNumber").hide();
};
//"Sends" msg
$("#msgButtons").find("#skickaKnapp").click(function(){
	if ($("#msgTitle").val() != "" && $("#scaleText").val() != ""){
		alert("Ditt medelande har skickats.");
		location.href = "kontakt.html#meddelanden";
	}else {
		alert("Se till att du har fyllt i båda fälten.");
	}
});
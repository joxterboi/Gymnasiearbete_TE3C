$(document).ready(function() {
	localStorage.setItem("access", "false");
	$("#wrongPswrd").hide();
	
	//Sets remember me button state
	var buttonState = localStorage.getItem("buttonState");
	if (buttonState === "on") {
		$("#uid").val(localStorage.getItem("rememberUid"));
		checkt();
	}
	
	$("#pswrd").keypress(function(e) {
		if (e.which == 13) {
			logIn();
		}
	});
});
function logIn() {
	var uid = ["JOKJE001", "HEBYF001", "ANERI023"];
	var pswrd = ["123", "456", "789"];
	for (var i = 0; i <= uid.length; i++) {
		if ($("#uid").val().toUpperCase() == uid[i] && $("#pswrd").val() == pswrd[i]) {
			localStorage.setItem("access", "true");
			notificationAmount = Math.ceil(Math.random() * 10);
			localStorage.setItem("msgNumber", notificationAmount);
			window.location.replace("hem.html");
			localStorage.setItem("uid", i);
			break;
		} else if (i >= uid.length){
			$("#pswrd").val("");
			$("#wrongPswrd").show();
		}
	}
}
function checkt() {
		$(".checkbox").toggleClass("clicked");
	}
function remember() {	
	var user = $("#uid").val();
	var ifHere = localStorage.getItem("ifHere");
	if (ifHere != "hasBeen") {
		localStorage.setItem("ifHere", "hasBeen");
		localStorage.setItem("toggle", "true");
	}


	var ifClicked = localStorage.getItem("toggle");

	if (ifClicked === "false") {
		localStorage.setItem("toggle", "true");
		localStorage.setItem("rememberUid", user);
		localStorage.setItem("buttonState", "on");
		console.log(localStorage.getItem("buttonState"));
	} else {
		localStorage.setItem("toggle", "false");
		localStorage.setItem("rememberUid", "");
		localStorage.setItem("buttonState", "off");
		console.log(localStorage.getItem("buttonState"));
	}
}
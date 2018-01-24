$(document).ready(function() {
	localStorage.setItem("access", "false");
	$("#wrongPswrd").hide();
	function logIn() {
		var uid = ["JOKJE001", "HEBYF001", "ANERI023"];
		var pswrd = ["123", "456", "789"];
		for (var i = 0; i <= uid.length; i++) {
			if ($("#uid").val().toUpperCase() == uid[i] && $("#pswrd").val() == pswrd[i]) {
				localStorage.setItem("access", "true");
				window.location.replace("hem.html");
				localStorage.setItem("uid", i);
				break;
			} else if (i >= uid.length){
				$("#pswrd").val("");
				$("#wrongPswrd").show();
			}
		}
	}
	$("#pswrd").keypress(function(e) {
		if (e.which == 13) {
			logIn();
		}
	});
});
function checkt() {
		$(".checkbox").toggleClass("clicked");
	}
function remember() {	
	var user = $("#uid").val();
	var ifHere = localStorage.getItem("ifHere");	

	// if (ifHere != "hasBeen") {
	// 	localStorage.setItem("ifHere", "hasBeen");
	// 	localStorage.setItem("toggle", "true");
	// }




	var ifClicked = localStorage.getItem("toggle");
	console.log(ifClicked);

	if (ifClicked = "true") {
		localStorage.setItem("toggle", "true");
		localStorage.setItem("rememberUid", user);
		console.log("HEJ");
	} else {
		localStorage.setItem("toggle", "false");
		localStorage.setItem("rememberUid", "");
		console.log("KYUS");
	}
}
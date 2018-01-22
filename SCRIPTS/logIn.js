$(document).ready(function() {
	localStorage.setItem("access", "false");
	$("#wrongPswrd").hide();
	function logIn() {
		var uid = ["joakim", "hektor", "andreas"];
		var pswrd = ["123", "456", "789"];
		for (var i = 0; i < uid.length; i++) {
			if ($("#uid").val() == uid[i] && $("#pswrd").val() == pswrd[i]) {
				localStorage.setItem("access", "true");
				window.location.replace("hem.html");
			} else {
				$("#pswrd").val("")
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
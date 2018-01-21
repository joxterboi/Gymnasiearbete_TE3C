$(document).ready(function() {
	function logIn() {
		var uid = "joakim";
		var pswrd = "123";
		if ($("#uid").val() == uid && $("#pswrd").val() == pswrd) {
			localStorage.setItem("access", "true");
			window.location.replace("hem.html");
		} else {
			console.log("Wrong password or username!");
		}
	}

	$("#pswrd").keypress(function(e) {
		if (e.which == 13) {
			logIn();
		}
	});
});
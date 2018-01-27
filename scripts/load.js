$(document).ready(function(){
	$("header").load("../INCLUDES/header.html");
	$("footer").load("../INCLUDES/footer.html");
	var pageTitle = $("#title").html();
	$(document).attr("title", pageTitle);
});
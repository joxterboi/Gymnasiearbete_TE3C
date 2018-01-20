$(document).ready(function(){
	$("header").load("../includes/header.html");
	$("footer").load("../includes/footer.html");
	var pageTitle = $("#title").html();
	$(document).attr("title", pageTitle);
});
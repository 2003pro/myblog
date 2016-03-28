function showTester() {
	$('#tester').slideDown();
}
function hideTester() {
	$('#tester').slideUp();
	$('#codeShow').html('');
}
function testCode() {
	$('#codeShow').html($('#codeInput').val());
}
function testCodeInNewWindow() {
	var code = $('#codeInput').val();
	var newWindow = window.open('');
	newWindow.document.write(code);
}

var current = 0, total = 0;
function initial() {
	total = $('[ppt]').size();
	$('#totalNumberOfSteps').val(total);
	$('[ppt]').hide();
}
function refresh() {
	$('#currentNumberOfSteps').val(current);
	$('[ppt]:lt(' + current + ')').slideDown();
	$('[ppt]:eq(' + current + ')').slideUp();
	$('[ppt]:gt(' + current + ')').slideUp();
	if($('#isScrollDown').is(':checked')) {
		console.log($(window).height());
		console.log($(document).height());
		var height = $(document).height() - 300 - $(window).height() / 2;
		console.log(height);
		window.scrollTo(0, height);
	}
}
function pre() {
	current--;
	if(current < 0) current = 0;
	refresh();
}
function next() {
	current++;
	if(current > total) current = total;
	refresh();
}
function gotoStep() {
	current = $('#currentNumberOfSteps').val();
	refresh();
}
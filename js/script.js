function readData() {
	$.get('data/data.txt', sucessData);
}
function sucessData(output) {
	console.log('success');
	$('#readData').append(output);
}
function errorData(xhr, status, strErr) {
	alert(strErr);
}
$('document').ready(function() {
	$(document).ajaxStart(function() {
		console.log('AJAX Start');
	});
	$(document).ajaxStop(function() {
		console.log('AJAX Stop');
	});
	$(document).ajaxSend(function(evt, jqXHR, options) {
		console.log('AJAX Send');
	});
	$(document).ajaxComplete(function() {
		console.log('AJAX Comlete');
	});
	$(document).ajaxError(function() {
		console.log('AJAX Error');
	});
	$(document).ajaxSuccess(function() {
		console.log('AJAX Success');
	});
	readData();
});
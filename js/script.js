$(document).ready(function(){
	window.setInterval(getDate, 1000);
});

function getDate(){
	var d = new Date();
	var hours = d.getHours().toString();
	var mins = d.getMinutes().toString();
	var secs = d.getSeconds().toString();

	if(hours.length === 1) hours = '0'+hours;
	if(mins.length === 1) mins = '0'+mins;
	if(secs.length === 1) secs = '0'+secs;

	$('.hours').text(hours+' :');
	$('.minutes').text(mins+' :');
	$('.seconds').text(secs);

	setContainerBackground(hours, mins, secs);
}

function setContainerBackground(hours, mins, secs){
	$('.container').css('background',"#"+hours+mins+secs);
}
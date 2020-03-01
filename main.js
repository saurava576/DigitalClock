function currentTime(){
	var date = new Date();
	var hrs = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	hrs = updateTime(hrs);
	min = updateTime(min);
	sec = updateTime(sec);

	var dayTime = 'AM';
	if (hrs>11) dayTime = 'PM';
	document.getElementById('clock').innerHTML = hrs + ':' + min + ':' + sec + ' ' + dayTime;
}

function updateTime(k) {
	if (k < 10) {
		return "0" + k;
	}
	else return k;
}

setInterval(currentTime, 1000);
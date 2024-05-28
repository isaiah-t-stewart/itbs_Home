function setHeaderDate() {
	let currentDate = new Date();

	let day;
	switch(currentDate.getDay()+1) {
		case 1: day = "Sunday"; break;
		case 2: day = "Monday"; break;
		case 3: day = "Tuesday"; break;
		case 4: day = "Wednesday"; break;
		case 5: day = "Thursday"; break;
		case 6: day = "Friday"; break;
		case 7: day = "Saturday"; break;
	}

	let month;
	switch(currentDate.getMonth()+1) {
		case 1: month = "January"; break;
		case 2: month = "February"; break;
		case 3: month = "March"; break;
		case 4: month = "April"; break;
		case 5: month = "May"; break;
		case 6: month = "June"; break;
		case 7: month = "July"; break;
		case 8: month = "August"; break;
		case 9: month = "September"; break;
		case 10: month = "October"; break;
		case 11: month = "November"; break;
		case 12: month = "December"; break;
	}

	let date = currentDate.getDate();
	if(date.toString().length < 2) {
		date = "0" + date;
	}

	let year = currentDate.getFullYear();

	document.getElementById("header-date").innerHTML = (day + ", " + month + " " + date + ", " + year);
}

function setHeaderTime() {
	let currentTime = new Date();

	let hour = currentTime.getHours();
	if(hour.toString().length < 2) {
		hour = "0" + hour;
	}

	let minute = currentTime.getMinutes();
	if(minute.toString().length < 2) {
		minute = "0" + minute;
	}
	
	let second = currentTime.getSeconds();
	if(second.toString().length < 2) {
		second = "0" + second;
	}

	document.getElementById("header-time").innerHTML = hour + ":" + minute + ":" + second;
}

setHeaderDate();
setHeaderTime();

setInterval(setHeaderDate, 1000);
setInterval(setHeaderTime, 1);
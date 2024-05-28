function createCalendar() {
	let currentDate = new Date();

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

	let year = currentDate.getFullYear();
	
	let htmlContent = "<tr><th class=\"calendar-month-and-year\" colspan=\"7\">" + month + " " + year + "</th></tr><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";

	let firstDateOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
	let firstSundayOfCalendar = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1-firstDateOfMonth.getDay());

	let lastDateOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 0);
	let lastSaturdayofCalendar = new Date(currentDate.getFullYear(), currentDate.getMonth(), lastDateOfMonth.getDate()+(6-lastDateOfMonth.getDay()));

	for(let i = firstSundayOfCalendar; i <= lastSaturdayofCalendar; i.setDate(i.getDate()+1)) {
		if(i.getDay() == 0) {
			htmlContent += "<tr>";
		}
		
		if(i.getMonth() == currentDate.getMonth()) {
			if(i.getDate() == currentDate.getDate()) {
				htmlContent += "<td><div class=\"calendar-today\">" + i.getDate() + "</div></td>";
			} else {
				htmlContent += "<td><div>" + i.getDate() + "</div></td>";
			}
		} else {
			htmlContent += "<td><div class=\"calendar-other\">" + i.getDate() + "</div></td>";
		}

		if(i.getDay() == 6) {
			htmlContent += "</tr>";
		}
	}

	document.getElementById("calendar-table").innerHTML = htmlContent;
}

createCalendar();

setInterval(createCalendar, 1000);
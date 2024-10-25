function getCookie(c_name) {
	var i,
		x,
		y,
		ARRcookies = document.cookie.split(';');

	for (i = 0; i < ARRcookies.length; i++) {
		x = ARRcookies[i].substr(0, ARRcookies[i].indexOf('='));
		y = ARRcookies[i].substr(ARRcookies[i].indexOf('=') + 1);
		x = x.replace(/^\s+|\s+$/g, '');
		if (x == c_name) {
			return unescape(y);
		}
	}
}
// Ð—Ð°Ð¿Ð¸ÑÑŒ Cookie
function setCookie(c_name, value, exdays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value = escape(value) + (exdays == null ? '' : '; expires=' + exdate.toUTCString());
	document.cookie = c_name + '=' + c_value;
}

function CountUp(id, cookname) {
	cookiename = $('#vrem-onl').attr('cookiename');
	var str = getCookie(cookiename); // ÑÑ‡Ð¸Ñ‚Ñ‹Ð²Ð°ÐµÐ¼ Cookie
	if (!str) {
		var Big2Day = new Date();
		str = Big2Day;
		setCookie(cookiename, Big2Day);
	} else {
		Big2Day = new Date(str);
		str = Big2Day;
	}

	this.beginDate = new Date(str);
	this.countainer = document.getElementById(id);
	this.numOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	(this.borrowed = 0), (this.years = 0), (this.months = 0), (this.days = 0);
	(this.hours = 0), (this.minutes = 0), (this.seconds = 0);
	this.updateNumOfDays();
	this.updateCounter();
}

CountUp.prototype.updateNumOfDays = function () {
	var dateNow = new Date();
	var currYear = dateNow.getFullYear();
	if ((currYear % 4 == 0 && currYear % 100 != 0) || currYear % 400 == 0) {
		this.numOfDays[1] = 29;
	}
	var self = this;
	setTimeout(function () {
		self.updateNumOfDays();
	}, new Date(currYear + 1, 1, 2) - dateNow);
};

CountUp.prototype.datePartDiff = function (then, now, MAX) {
	var diff = now - then - this.borrowed;
	this.borrowed = 0;
	if (diff > -1) return diff;
	this.borrowed = 1;
	return MAX + diff;
};

CountUp.prototype.calculate = function () {
	var currDate = new Date();
	var prevDate = this.beginDate;
	this.seconds = this.datePartDiff(prevDate.getSeconds(), currDate.getSeconds(), 60);
	this.minutes = this.datePartDiff(prevDate.getMinutes(), currDate.getMinutes(), 60);
	this.hours = this.datePartDiff(prevDate.getHours(), currDate.getHours(), 24);
	this.days = this.datePartDiff(prevDate.getDate(), currDate.getDate(), this.numOfDays[currDate.getMonth()]);
	this.months = this.datePartDiff(prevDate.getMonth(), currDate.getMonth(), 12);
	this.years = this.datePartDiff(prevDate.getFullYear(), currDate.getFullYear(), 0);
};

CountUp.prototype.addLeadingZero = function (value) {
	return value < 10 ? '0' + value : value;
};

CountUp.prototype.formatTime = function () {
	this.seconds = this.addLeadingZero(this.seconds);
	this.minutes = this.addLeadingZero(this.minutes);
	this.hours = this.addLeadingZero(this.hours);
};

CountUp.prototype.updateCounter = function () {
	this.calculate();
	this.formatTime();
	//    this.countainer.innerHTML ="Ð’Ñ€ÐµÐ¼Ñ Ð¾Ð½Ð»Ð°Ð¹Ð½ " + this.hours +":"+this.minutes+":"+this.seconds+ "" ;
	this.countainer.innerHTML = this.hours + ':' + this.minutes + ':' + this.seconds + '';
	var self = this;
	setTimeout(function () {
		self.updateCounter();
	}, 1000);
};

window.onload = function () {
	new CountUp('vrem-onl', 'OnlineTimer');
};

//var countdown4 =900;

// Ð·Ð°Ð¿ÑƒÑÐº Ð³Ñ€Ð°Ñ„Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ñ‡Ð°ÑÑ‚Ð¸ ÑÐºÑ€Ð¸Ð¿Ñ‚Ð°
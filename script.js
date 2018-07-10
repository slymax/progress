moment.updateLocale("en", {
	week : {
		dow : 1
	}
});
var app = new Vue({
	el: "#app",
  data: {
		year: {
    	name: moment().format("YYYY"),
    	percent: Math.round(moment().dayOfYear() / 365 * 100)
    },
		month: {
    	name: moment().format("MMMM"),
    	percent: Math.round(moment().date() / moment().daysInMonth() * 100)
    },
		week: {
    	name: moment().week(),
    	percent: Math.round((moment().weekday() + (moment().hour() / 24)) / 7 * 100)
    },
  	day: {
    	name: moment().format("dddd"),
      percent: Math.round(((moment().hour() * 60) + moment().minute()) / 1440 * 100)
    }
  }
});

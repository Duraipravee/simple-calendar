let currentDate = new Date();

function setDate() {
  //setdate
  let setdate = (document.getElementById("date").innerText =currentDate.getDate());

  //setday
  let day = currentDate.getDay();
  let daysInweek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thuresday",
    "Friday",
    "Saturaday",
    "Sunday",
  ];
  for (i = 0; i <=daysInweek.length; ++i) {
    if (day == i) {
      let setDay = (document.getElementById("day").innerText =
        daysInweek[i]);
    }
  }

  // setmonth
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let getMonth = currentDate.getMonth() + 1;
  for(i=0;i<=months.length;++i){
    if(getMonth==i){
      let setMonth = document.getElementById('month').innerText = months[i-1]
    }
  }

  //setYear 
  let setYear = document.getElementById('year').innerText = currentDate.getFullYear();
  console.log(setYear)
}
setDate();

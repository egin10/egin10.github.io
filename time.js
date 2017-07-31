function checkTime(m) {
  if (m < 10) m = "0" + m;
  return m;
}
function twelvehour(h) {
  if (h > 12) {
    let f = h - 12;
    return f;
    //console.log("h>12")
  }
  if (h == 0) {
    return 12;
    //console.log("h==12")
  } else return h;
}

function get_ampm(h) {
  if (h < 12) return "AM";
  if (h >= 12) return "PM";
}
function get_month(month) {
  let arr = [
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
    "December"
  ];
  return arr[month];
}
function get_day(day) {
  let arr = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ];
  return arr[day];
}
function start() {
  let today = new Date();
  let day = today.getDay();
  let date = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  //console.log("h: "+h)
  let ampm = get_ampm(h);

  m = checkTime(m);
  h = twelvehour(h);
  month = get_month(month);
  day = get_day(day);

  if (h < 12) {
    document.getElementById("time").innerHTML =
      day +
      " " +
      month +
      " " +
      date +
      " " +
      year +
      "<br> 0" +
      h +
      ":" +
      m +
      ":" +
      s +
      " " +
      ampm;
  } else {
    document.getElementById("time").innerHTML =
      h + ":" + m + ":" + s + " " + ampm;
  }

  let t = setTimeout(start, 2 * 500);
}

let _hide_details = false;
let count = 0;

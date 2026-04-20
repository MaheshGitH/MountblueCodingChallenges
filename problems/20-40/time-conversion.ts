/*
  time = "12:01:00PM";
  hour = parseInt(time.substring(0, 2));
  minute = time.substring(3, 5);
  second = time.substring(6, 8);
  AMOrPM = time.substring(8, 10);
  finalHour = 0
  if(AMOrPM === 'PM') {
    finalHour = 12 + hour      
  } else {
    finalHour = hour
  }
  return `${finalHour}:${minute}:${second}`
*/

function timeConversion(s: string): string {
  const hour = parseInt(s.substring(0, 2));
  const minute = s.substring(3, 5);
  const second = s.substring(6, 8);
  const AMOrPM = s.substring(8, 10);

  let finalHour = "";
  if (AMOrPM === "PM") {
    finalHour = hour === 12 ? "12" : String(12 + hour);
  } else {
    if (hour === 12) {
      finalHour = "00";
    } else {
      finalHour = String(hour).padStart(2, "0");
    }
  }
  return `${finalHour}:${minute}:${second}`;
}

console.log(timeConversion("04:05:45PM"));

/*
Create a function `convertTime` which converts a time formatted as "hh:mm" in a duration in minuts.
If the argument is not correctly formatted, return null.
* "02:30" -> 150
* "01:45" -> 105
* "01h45m" -> null
Add you own tests.
*/

// TODO add your code here

function convertTime(time) {
  let timeArray = time.split(":");
  if (timeArray.length > 1 && timeArray.length < 3) {
    return parseInt(timeArray[0]) * 60 + parseInt(timeArray[1]);
  } else {
    timeArray = time.split("h");
    return parseInt(timeArray[0]) * 60 + parseInt(timeArray[1].slice(0, 2));
  }
}

console.log(convertTime("01:45"));

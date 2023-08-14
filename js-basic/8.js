// 8. Write a function to find the new time after a specified time from the given time.
// Input: (givenTime string, period number(s))
// Output: newTime string
// Ex: ('12:30:29', 600) => '12:40:29'
// Ex: ('23:30:29', 6000) => '01:10:29'

function newTime(givenTime, period) {
  let arr = givenTime.split(":");

  let hour = parseInt(arr[0]);
  let minute = parseInt(arr[1]);
  let second = parseInt(arr[2]);

  let newSecond = second + period;
  let newMinute = minute + Math.floor(newSecond / 60);
  let newHour = hour + Math.floor(newMinute / 60);

  newSecond = newSecond % 60;
  newMinute = newMinute % 60;
  newHour = newHour % 24;

  const formattedHour = newHour < 10 ? `0${newHour}` : newHour;
  const formattedMinute = newMinute < 10 ? `0${newMinute}` : newMinute;
  const formattedSecond = newSecond < 10 ? `0${newSecond}` : newSecond;

  return `${formattedHour}:${formattedMinute}:${formattedSecond}`;
}

console.log(newTime("3:59:30", 90));

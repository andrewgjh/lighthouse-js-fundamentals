const talkingCalendar = function (date) {
  let year = date.slice(0, 4);
  const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let month = monthArray[date.slice(5,7)-1];
  let day = Number(date.slice(8));
  switch (day) {
    case 1||21||31:
      day = String(day)+"st";
      break;
    case 2||22:
      day = String(day)+"nd";
      break;
    case 3||23:
      day = String(day)+"rd";
      break;
    default:
      day = String(day)+"th";
      break;
  }
  return (month +" "+ day + ", "+year);
};

// const talkingCalendar = function(date) {
//   var options = { year: 'numeric', month: 'long', day: 'numeric' };
//   let answer = new Date(date).toLocaleDateString("en-US", options);
//   return answer;
// };


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));



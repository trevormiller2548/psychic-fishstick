//This should wrap my code dayjs
$( document ).ready(function() {
  //I'm puting this in here to display the current date
var a= dayjs().format('dddd MMMM Do YYYY, h:mm');
  $("#display-date").text(a)
}
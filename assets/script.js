//This should wrap my code dayjs
$( document ).ready(function() {
  //I'm puting this in here to display the current date
var a= dayjs().format('dddd MMMM Do YYYY, h:mm');
  $("#display-date").text(a)
}

   //This is so the rows change colors
   function updateColor(){
    var hour = new Date().getHours();
    for (var i= 9 ; i<=18; i++){
      console.log(hour,i)
      if(hour==i ) {
       $(`#inputText${i}`).css("background","lightblue")
      }else  if(hour<i ){
       
        $(`#inputText${i}`).css("background","lightgreen")

      }

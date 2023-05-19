//This should wrap my code in dayjs
$( document ).ready(function() {
  //I'm puting this in here to display the current date
var a= dayjs().format('dddd MMMM Do YYYY, h:mm');
  $("#display-date").text(a)
}
var row = ""
//I'm creating a loop here to set the time 
  for (var i= 9 ; i<=18; i++){
    // Creation of the row elements
    row = $(`<div class="row">`)
    col1 = $(`<div class ="col-lg-2 hour">${displayAmorPm(i)}</div>`)
    col2 = $(`<div class ="col-lg-8 inputcontent"><input data-input="${i}" id="inputText${i}" class="form-control inputText" type="text" name="userInput"></div>`)
    col3 = $(`<div class ="col-lg-2"><button data-id="${i}" id="savePlanner" class="btn btn-success btn-block"><i class="fas fa-save"></i> Save</button></div>`)
    row.append(col1)
    row.append(col2)
    row.append(col3)
    $("#display-planner").append(row)
    getlocalStorage(i)
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
    }
    setInterval(function(){
      updateColor()
    },1000)
 

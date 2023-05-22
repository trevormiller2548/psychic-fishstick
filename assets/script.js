//I initially tried to go light weight on html and creat the elements and commands I needed in javascript. 
//But I couldn't figure out why I couldn't get my rows to have color. 
//I had a tough time with it. So, I ended up putting the elements into html
//and that way I was able to find a way save data to local storage and get the coloring I needed for the project.
//I tried to keep some aspects of my initial work, but the code kept breaking, so I redid all of it

$(document).ready(function () { //to access css and html
   var a= dayjs().format('dddd MMMM DD YYYY, h:mm');
     $("#display-date").text(a) //current date from dayjs
  $(".saveBtn").on("click", function () {
      //this is going to get the values i need.
      console.log(this);
      var text = $(this).siblings(".description").val(); 
      var time = $(this).parent().attr("id"); 

      localStorage.setItem(time, text);
  })
//when I changed my html to make my colors work, I broke my code and lost ability to access local storage.
// so I had to go with this. It's a bit busy but it seems to get the job done. 
      $("#hour8 .description").val(localStorage.getItem("hour8"));
      $("#hour9 .description").val(localStorage.getItem("hour9"));
      $("#hour10 .description").val(localStorage.getItem("hour10"));
      $("#hour11 .description").val(localStorage.getItem("hour11"));
      $("#hour12 .description").val(localStorage.getItem("hour12"));
      $("#hour13 .description").val(localStorage.getItem("hour13"));
      $("#hour14 .description").val(localStorage.getItem("hour14"));
      $("#hour15 .description").val(localStorage.getItem("hour15"));
      $("#hour16 .description").val(localStorage.getItem("hour16"));
      $("#hour17 .description").val(localStorage.getItem("hour17"));
    });

   function hourTracker() {
    var currentHour = dayjs().hour(); //getting current time
    // and I'm doing this to loop over the time blocks
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log( blockHour, currentHour)


        if (blockHour < currentHour) { //this is going to determine is the it's past or present.
          //and then of css will dictate the colors depending on past, present or future
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
hourTracker(); //re-run function


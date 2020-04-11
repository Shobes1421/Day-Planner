var nineInput = document.getElementById(".9")
var textInput = document.querySelector("#input")

var todayDate= new Date();
document.getElementById("todaysDate").innerHTML = todayDate;



$( ".saveBtn" ).click(function() {
    //console.log( "Save button was clicked." );
    var activity = $("#text9").val();
    console.log($(this).siblings("textarea").val());
    console.log(activity);
    localStorage.setItem("9:00 am activity", activity);
    });





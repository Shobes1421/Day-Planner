//Adding todays date to the jumbotron 
//Provided by w3schools ref: https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_current
var todayDate = new Date()
document.getElementById("todaysDate").innerHTML = todayDate;

//function that when the user inputs information
//it will save that infromation to the local storage.

function renderText() {
    var saveText9 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#9").val("");
    $("#9").val(saveText9);

}
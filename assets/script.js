//Adding todays date to the jumbotron 
//Provided by w3schools ref: https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_current
var todayDate = new Date()
document.getElementById("todaysDate").innerHTML = todayDate;







//function that when the user inputs information
//it will save that infromation to the local storage.

function renderText() {
    //9:00 time block localstorage save
    var saveText9 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#9").val("");
    $("#9").val(saveText9);
    
    //10:00 time block localstorage save
    var saveText10 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#10").val("");
    $("#10").val(saveText10);

    //11:00 time block localstorage save
    var saveText11 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#11").val("");
    $("#11").val(saveText11);

    //12:00 time block localstorage save
    var saveText12 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#12").val("");
    $("#12").val(saveText12);

    //1:00 time block  localstorage save
    var saveText1 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#13").val("");
    $("#13").val(saveText1);

    //2:00 time block localstorage save
    var saveText2 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#14").val("");
    $("#14").val(saveText2);

    //3:00 time block localstorage save
    var saveText3 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#15").val("");
    $("#15").val(saveText3);

    //4:00 time block localstorage save
    var saveText4 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#16").val("");
    $("#16").val(saveText4);

    //5:00 time block localstorage save
    var saveText5 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#17").val("");
    $("#17").val(saveText5);
}
// Establish current date and display in header
var curentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(curentDay);

// Convert time from 24hr to 12hr
function convert(currentHour) {
    return moment(currentHour, "HH:mm:ss").format("h:mm:ss A");
}

// Check to see if present time has preceeded or passed the scheduled event
function currentTime() {
    var currentHour = moment().hours();
    console.log(convert(currentHour));
    $(".time-block").each(function(){
        var hourStr = $(this).attr("id");
        var hour = parseInt(hourStr.split("-")[1]);
        if(hour < (convert(currentHour))){
            $(this).addClass("past");
        } else if(hour === (convert(currentHour))){
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}

// call function
currentTime();

// store events on local storage
$(".saveBtn").click(function(){
    localStorage.setItem("description", "description");
    document.getElementById("description").innerHTML = localStorage.getItem("description");
}); 





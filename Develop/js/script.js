// Formatting date, day of the week, and time respectively, from moment.js.
let momentJS = function() {
    document.getElementById("currentDate").innerHTML = moment().format("MMM Do, YYYY");
    document.getElementById("currentDay").innerHTML = moment().format("dddd");
    document.getElementById("currentTime").innerHTML = moment().format("h:mm:ss a");
};
// Updates time every second.
setInterval(momentJS,1000);

// Function for the save button on click.
$(document).ready(function () {
    $(".saveBtn").on("click", function() {
        let textArea = $(this).siblings(".input").val();
        let time = $(this).parent().attr("id");
        localStorage.setItem(time, textArea);
    })
    
    //Function for tracking time and indicating what the present time is accordingly.
    function schedule() {
        // Current hour.
        let presentTime = moment().hour();
        $(".time-block").each(function () {
            let timeBox = parseInt($(this).attr("id").split("hour")[1]);
            /* Changes time boxes properties pulled from css depending on current time.
            If not present, it is the past. */
            if (timeBox < presentTime) {
                $(this).addClass("past");
            // If not, it is present/current time.
            } else if (timeBox == presentTime) {
                $(this).addClass("present");
                $(this).removeClass("past");
            // Rest of the option is the time of the future.
            } else {
                $(this).addClass("future");
                $(this).removeClass("present");
            }
        })
    }
    
    schedule();
    
    // Local storage for each schedule boxes.
    $("#hour8 .input").val(localStorage.getItem("hour8"));
    $("#hour9 .input").val(localStorage.getItem("hour9"));
    $("#hour10 .input").val(localStorage.getItem("hour10"));
    $("#hour11 .input").val(localStorage.getItem("hour11"));
    $("#hour12 .input").val(localStorage.getItem("hour12"));
    $("#hour13 .input").val(localStorage.getItem("hour13"));
    $("#hour14 .input").val(localStorage.getItem("hour14"));
    $("#hour15 .input").val(localStorage.getItem("hour15"));
    $("#hour16 .input").val(localStorage.getItem("hour16"));
    $("#hour17 .input").val(localStorage.getItem("hour17"));
    $("#hour18 .input").val(localStorage.getItem("hour18"));
})
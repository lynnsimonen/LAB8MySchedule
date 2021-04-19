$(document).ready(function() {
            //set up form function
            //$("input[type=radio]").on("click", schedule);
    $('input[name="day"]:radio').on("change", schedule);
});

function schedule(event) {
    //prevent form from submitting and removing result
    event.preventDefault()

    //Create variable for checked radio box
    var filtered = $('input[name=day]:checked').attr("id");

    //Declare variable for each radio button day and it's switch output
    let day = filtered;

    //switch statement to run through schedule for each day
    switch (day) {
        case "Monday":
            $("p#schedule").text('am - work/visit customers; pm - class');
            break;
        case "Tuesday":
            $("p#schedule").text('am - yoga & calls;  pm - paperwork');
            break;
        case "Wednesday":
            $("p#schedule").text('am - work/visit customers; pm - class');
            break;
        case "Thursday":
            $("p#schedule").text('am - visit customers; pm - class');
            break;
        case "Friday":
            $("p#schedule").text('am - work; pm - errands and dinner');
            break;
        case "Saturday":
            $("p#schedule").text('am - yoga; pm - homework then relax');
            break;
        case "Sunday":
            $("p#schedule").text('am - homework; pm - relax with friends');
            break;
        default:
            $("p#schedule").text("Error");
    }
}
function displayDate(){
    var currentDay = daysjs()
    var displayDay= currentDay.format("dddd h:mm MMMM D, YYYY")
    $('#day').text(displayDay)
}

function currentDate(){
    displayDate()
}

currentDate()



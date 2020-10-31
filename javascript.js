var textarea = $('.textarea')
var saveBtn =$('.saveBtn')
var weekday = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday']
var dayTimes = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',]
var currentDay = weekday[dateFns.getDay(new Date())]
var result = dateFns.format(
    new Date(),
    "h:mmaa MMMM Do, YYYY"
)

// Displays current date
function displayDate(){
    $('#day').text(currentDay + ' ' + result)   
}

//Inserts hours into time blocks and compares to set past, present and future classes
function dsiplayHourly(){
    //loops through dayTimes array to display hour
    for (var i=0; i < dayTimes.length; i++){
        var colTime = document.getElementsByClassName('hour')
        var textBox = document.getElementsByClassName('description')
        colTime[i].innerHTML = dayTimes[i]

        if(dayTimes[i].charAt(1) == ':'){
            var hours = dayTimes[i].charAt(0)
            
        }
        // used for double digit hours 
        else {
            hours = dayTimes[i].charAt(0).concat(dayTimes[i].charAt(1))
        }
        //sets hour to military time
        if(hours >= 1 && hours < 6){
            hours = parseInt(hours) + 12  
        }
        //gets the difference in hours
        var hoursDifference = dateFns.differenceInHours(new Date(), dateFns.setHours(new Date (), hours))
        //compares hours to see if they are the same time
        var sameTime = dateFns.isSameHour(new Date(), dateFns.setHours(new Date (), hours))
        
         if(sameTime){
            colTime[i].className = 'present hour'
        } else if(hoursDifference >= 0){
            colTime[i].className = 'past hour'}
            else {
            colTime[i].className = 'future hour'
        }
        }
    };

function displaySchedule(){
    //loops through every textarea id
    for (i= 1; i < 10; i++){
        var textareaId = "#textarea" + i
        
    //if there is something in local storage under that text area id, it pulls it from storage
    if(localStorage.getItem(textareaId) !== null){
        var getTextArea = $(textareaId)
        getTextArea.val(localStorage.getItem(textareaId))
        
}}}

saveBtn.on('click', function(){  
    //get id number associated with button
    var buttonIndex = this.getAttribute('id')
    // get corresponding textarea by index number
    var textarea = document.getElementsByClassName('textarea')[buttonIndex]
    var event = textarea.value
    // piece together compenents to create corresponding textarea id
    var integer = parseInt(buttonIndex) + 1
    var textareaId = "#textarea" + integer 
    // saves associated textarea id with value; example: #textarea2 ... Breakfast
    localStorage.setItem(textareaId, event)

})

displayDate()
dsiplayHourly()
displaySchedule()

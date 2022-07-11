"use strict"

window.addEventListener('load', function(){
    findDay();
});

function findDay()
{
    const DAYS = ['Day', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday']

    let date = new Date();
    let dayOfWeek = date.getDay();
    
    let dayOfWeekHMTL = document.getElementById("day-of-week");
    
    dayOfWeekHMTL.innerHTML = DAYS[dayOfWeek];
}

"use strict"

window.addEventListener('load', function(){
    findDay();
    strikeThrough();
});

function findDay()
{
    const DAYS = ['Day', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday']

    let date = new Date();
    let dayOfWeek = date.getDay();
    
    let dayOfWeekHMTL = document.getElementById("day-of-week");
    
    dayOfWeekHMTL.innerHTML = DAYS[dayOfWeek];
}

function strikeThrough()
{
    let taskHTML = document.querySelectorAll(".main-content-container");

    for(let i = 0; i < taskHTML.length; i++)
    {
        taskHTML[i].addEventListener('click', function()
        {
            if(taskHTML[i].style.textDecoration === "line-through")
            {
                taskHTML[i].style.textDecoration = "none";
            }
            else
            {
                taskHTML[i].style.textDecoration = "line-through";
            } 
        })
    };
}
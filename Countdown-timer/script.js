const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const Janmashtmi = "30 Aug 2021";

function countdown() {
    const JanmashtmiDate = new Date(Janmashtmi);
    const currentDate = new Date();

    const totalSeconds = (JanmashtmiDate - currentDate) / 1000;//This allows us to subtract two times 
    //from each other and get the amount of time in between(in ms which in turn divided by 1000 to get time in seconds).

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
   // Divide the total seconds by 60 and grab the remainder. You don’t want all of the seconds, just those remaining after the minutes have been counted: (t/1000) % 60
//Round this down to the nearest whole number. This is because you want complete seconds, not fractions of seconds: Math.floor( (t/1000) % 60 )

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
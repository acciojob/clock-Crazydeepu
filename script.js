//your JS code here. If required.
let display = document.getElementById('timer');

let date = new Date().toLocalDateString();
let time = new Date().toLocalDateString();
display.innerHtml = date+", "+time;

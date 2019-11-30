var vid = document.getElementById("bgvid");
vid.playbackRate = 0.7;

let date = new Date();
let yearPos = document.getElementById("getYear");
let currYear = date.getFullYear();
yearPos.innerHTML = currYear;
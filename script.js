setInterval(function show(){
let fulldate = new Date();
let date = fulldate.getDate();
let month = fulldate.getMonth()+1;
let year = fulldate.getFullYear();

let hr = fulldate.getHours();
let min = fulldate.getMinutes();
let sec = fulldate.getSeconds();

let cole = document.getElementsByClassName('col');
// console.log(col);

for(let key in cole){
    if(key == fulldate.getDay()){
        cole[key].style.background="rgb(107, 4, 4)";
    }
}

document.getElementById("date").innerHTML = (date<10) ? `0${date}`: date;
document.getElementById("month").innerHTML = (month<10) ? `0${month}` : month;
document.getElementById("year").innerHTML = (year<10) ? `0${year}` : year;
   
document.getElementById("hour").innerHTML = (hr<10) ? `0${hr}` : hr;
document.getElementById("min").innerHTML = (min<10) ? `0${min}` : min;
document.getElementById("sec").innerHTML = (sec<10) ? `0${sec}` : sec;
},100);

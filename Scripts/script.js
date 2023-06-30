function myTime() {
    var myDate=new Date();
    var year=myDate.getFullYear();
    document.getElementsByClassName("year")[0].innerHTML="Year: "+year;
    var month=myDate.getMonth();
    document.getElementsByClassName("month")[0].innerHTML="Month: "+month;
    var day=myDate.getDate();
    document.getElementsByClassName("day")[0].innerHTML="Day: "+day;
    var hours=myDate.getHours();
    document.getElementsByClassName("hours")[0].innerHTML="Hours: "+hours;
    var minutes=myDate.getMinutes();
    document.getElementsByClassName("minutes")[0].innerHTML="Minutes: "+minutes;
    var second=myDate.getSeconds();
    document.getElementsByClassName("second")[0].innerHTML="Second: "+second;
    var milliSecond=myDate.getMilliseconds();
    document.getElementsByClassName("milliSecond")[0].innerHTML="MilliSecond: "+milliSecond;
    var dayOfWeek=myDate.getDay();
    document.getElementsByClassName("dayOfWeek")[0].innerHTML="DayOfWeek: "+dayOfWeek;
}

/*
function RotateBox() {
    var rotate=document.getElementsByClassName("second-hand")[0].getAttribute("data-rotate");
    var rotate2=parseInt(rotate)+6;
    document.getElementsByClassName("second-hand")[0].setAttribute("data-rotate",rotate2);
    document.getElementsByClassName("second-hand")[0].style.transform="rotate("+rotate2+"deg)";
    if (rotate2==360){
        time2();
    }
}*/
/*function RotateBoxM() {
    var rotate=document.getElementsByClassName("minutes-hand")[0].getAttribute("data-rotateM");
    var rotate2=parseInt(rotate)+6;
    document.getElementsByClassName("minutes-hand")[0].setAttribute("data-rotateM",rotate2);
    document.getElementsByClassName("minutes-hand")[0].style.transform="rotate("+rotate2+"deg)";
    if (rotate2==360){
        time2();
    }
}*/
function RotateBoxH() {
    var myDate=new Date();
    var hours=myDate.getHours()/12*360+myDate.getMinutes()/60*30;
    document.getElementsByClassName("hours-hand")[0].setAttribute("data-rotateH",hours);
    document.getElementsByClassName("hours-hand")[0].style.transform="rotate("+hours+"deg)";
    alert(hours);
    //var rotate=document.getElementsByClassName("hours-hand")[0].getAttribute("data-rotateH");
   /* var rotate2=parseInt(rotate)+2;
    document.getElementsByClassName("hours-hand")[0].setAttribute("data-rotateH",rotate2);
    document.getElementsByClassName("hours-hand")[0].style.transform="rotate("+rotate2+"deg)";*/
    document.getElementsByClassName("hours-hand")[0].setAttribute("data-rotateH",hours+360);
    document.getElementsByClassName("hours-hand")[0].style.transform="rotate("+hours+360+"deg)";
    if (hours===360){
        time2();
    }
}
function time2() {
    var myDate=new Date();
    var hours1=myDate.getHours();
    var minutes=myDate.getMinutes();
    var second=myDate.getSeconds();
    document.getElementsByTagName("p")[0].innerHTML="hours "+hours1;
    document.getElementsByTagName("p")[1].innerHTML="minute "+minutes;
    document.getElementsByTagName("p")[2].innerHTML="second "+second;
    document.getElementsByClassName("second-hand")[0].setAttribute("data-rotate",second*6);
    document.getElementsByClassName("second-hand")[0].style.transform="rotate("+second*6+"deg)";
    document.getElementsByClassName("minutes-hand")[0].setAttribute("data-rotateM",minutes*6);
    document.getElementsByClassName("minutes-hand")[0].style.transform="rotate("+minutes*6+"deg)";
    //document.getElementsByClassName("hours-hand")[0].setAttribute("data-rotateH",hours+2);
    //document.getElementsByClassName("hours-hand")[0].style.transform="rotate("+hours+2+"deg)";
    var hours=myDate.getHours()/12*360+myDate.getMinutes()/60*30;
    document.getElementsByClassName("hours-hand")[0].setAttribute("data-rotateH",hours);
    document.getElementsByClassName("hours-hand")[0].style.transform="rotate("+hours+"deg)";
}
time2();
function RotateBoxx(name) {
    var rotate=document.getElementsByClassName(name)[0].getAttribute("data-rotate");
    var rotate2=parseInt(rotate)+6;
    document.getElementsByClassName(name)[0].setAttribute("data-rotate",rotate2);
    document.getElementsByClassName(name)[0].style.transform="rotate("+rotate2+"deg)";
    if (rotate2===360){
        time2();
    }
}
function setTime(time,name) {
    setInterval(RotateBoxx,time,name);
}
setTime(1000,"second-hand");
setTime(60000,"minutes-hand");
setTime(600000,"hours-hand");
//setInterval(RotateBoxH,60000);
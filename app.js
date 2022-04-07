

// var count =0;
// var interval;
// function timer(){
//     count++
// console.log(count)
// }
// interval= setInterval(timer,1000)


// setTimeout(function(){
// clearInterval(interval)
// },5000)


var min =0;
var sec =0;
var msec=0;

var minHeading =document.getElementById("min");
var secHeading =document.getElementById("sec");
var msecHeading =document.getElementById("msec");

var interval;
function timer(){
    msec++ 
    msecHeading.innerHTML=msec;
    if(msec>=100){
        sec++
        secHeading.innerHTML=sec;
        msec=0
    }else if(sec>=60){
        min++
        minHeading.innerHTML=min;
        sec=0
    }
}

function start(){
    
    interval =setInterval(timer,10)
}
function stop(){
clearInterval(interval) 
}
function reset(){
    min =0;
    sec=0;
    msec=0;
    minHeading.innerHTML =min
    secHeading.innerHTML=sec
    msecHeading.innerHTML=msec

}
function showHiden(){
    var hid=document.getElementById("hid");
    hid.style.visibility ='visible';
}

function hide(){
    var hidde=document.getElementById("hidde");
    hidde.style.visibility ='hidden';
}
function show(){
    var hidde=document.getElementById("hidde");
    hidde.style.visibility ='visible';
}
function addData(){

    var min=document.getElementById("min")
    var sec=document.getElementById("sec")
    var msec=document.getElementById("msec")
var username= document.getElementById("name")

document.write("Hello,"+username.value)

document.write("<br>") 
    document.write("min,"+ min.innerHTML)
    document.write("<br>") 
    document.write( "sec,"+ sec.innerHTML)
    document.write("<br>") 
    document.write( "msec,"+ msec.innerHTML  )
}


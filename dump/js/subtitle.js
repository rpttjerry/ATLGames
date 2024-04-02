// script to generate random greetings

function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}


var say = [];
say[0] = "no more free dthang";
say[1] = "50$ for 4 methods tap in wit me @rptjerry";
say[2] = "free lee drilly";
say[3] = "tap in wit me for motion @rptjerry"
// pick a random greeting
var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;

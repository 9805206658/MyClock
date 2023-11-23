let hour=document.getElementById("hour");
let minuate=document.getElementById("minuate");
let second=document.getElementById("second");
let displayTime=document.getElementById("displayTime");
displayTime.style.textAlign="center";
function starter()
{
   let date=new Date();
   let h=date.getHours();
   let s=date.getSeconds();
   let m=date.getHours();
// calculate degree
console.log(h);
let hDeg=h*30+((m/60)*30);
let sDeg=s*6;
let mDeg=m*6+((s/60)*6);
hour.style.transform=`rotate(${hDeg}deg)`;
second.style.transform=`rotate(${sDeg}deg)`;
minuate.style.transform=`rotate(${mDeg}deg)`;
displayTime.innerHTML=`Hour:${h} minuate:${m} seconds:${s}`;
}
setInterval(starter,360);

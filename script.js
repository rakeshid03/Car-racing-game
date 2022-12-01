//all var and const
var h = document.getElementById('track').clientHeight;
var woncard = document.getElementById('boxcenter');
var woncarname = document.getElementById('carwon');

var car1 = document.getElementById("car1");
var car2 = document.getElementById("car2");
var car3 = document.getElementById("car3");
var car4 = document.getElementById("car4");

// Choose random number between 1-7
var speed1 = Math.floor(Math.random()*8)+1;
var speed2 = Math.floor(Math.random()*8)+1;
var speed3 = Math.floor(Math.random()*8)+1;
var speed4 = Math.floor(Math.random()*8)+1;

//Before race start cars position 
function position(){
  car1.style.top = speed1 + 'px';
  car2.style.top = speed2 + 'px';
  car3.style.top = speed3 + 'px';
  car4.style.top = speed4 + 'px';}
  
// Decete scroll up or down, if user scroll down then change cars position 
function scrollDetect(){
var lastScroll = 0;
window.onscroll = function() {
 let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
if (currentScroll > 0 && lastScroll <= currentScroll){
   lastScroll = currentScroll;

// speed increase 
  speed1++;
  speed2++;
  speed3++;
  speed4++;
  
// check cars current position 
var car1s = document.getElementById("car1").offsetTop;
var car2s = document.getElementById("car2").offsetTop;
var car3s = document.getElementById("car3").offsetTop;
var car4s = document.getElementById("car4").offsetTop;

// stop all cars if any of car reached finish line and pop up winning car name
if(car1s === h){
document.body.classList.add("stop-scrolling");
woncarname.innerText = 'Yellow Car Won!'
woncard.style.opacity = '1';
}
if(car2s === h){ 
document.body.classList.add("stop-scrolling");
woncarname.innerText = 'Blue Car Won!'
woncard.style.opacity = '1';
}
if(car3s === h){ 
document.body.classList.add("stop-scrolling");
woncarname.innerText = 'Orange Car Won!'
woncard.style.opacity = '1';
}
if(car4s === h){ 
document.body.classList.add("stop-scrolling");
woncarname.innerText = 'Green Car Won!'
woncard.style.opacity = '1';
}
  
setTimeout(function(){
// add px in car img's top default 
  car1.style.top = speed1 + 'px';
  car2.style.top = speed2 + 'px';
  car3.style.top = speed3 + 'px';
  car4.style.top = speed4 + 'px';
  
//change speed of cars on scroll
if(speed1 > h/4 || speed2 > h/4 || speed3 > h/4 || speed4 > h/4){
  car1.style.top = speed4 + 'px';
  car2.style.top = speed3 + 'px';
  car3.style.top = speed2 + 'px';
  car4.style.top = speed1 + 'px';}
  
if(speed1 > h/3 || speed2 > h/3 || speed3 > h/3 || speed4 > h/3){
  car1.style.top = speed2 + 'px';
  car2.style.top = speed4 + 'px';
  car3.style.top = speed1 + 'px';
  car4.style.top = speed3 + 'px';}
  
if(speed1 > h/2 || speed2 > h/2 || speed3 > h/2 || speed4 > h/2){
  car1.style.top = speed3 + 'px';
  car2.style.top = speed1 + 'px';
  car3.style.top = speed4 + 'px';
  car4.style.top = speed2 + 'px';}
  
if(speed1 > h/2+h/4 || speed2 > h/2+h/4 || speed3 > h/2+h/4 || speed4 > h/2+h/4){
  car1.style.top = speed2 + 'px';
  car2.style.top = speed4 + 'px';
  car3.style.top = speed1 + 'px';
  car4.style.top = speed3 + 'px';}

if(speed1 > h/2+h/3 || speed2 > h/2+h/3 || speed3 > h/2+h/3 || speed4 > h/2+h/3){
  car1.style.top = speed4 + 'px';
  car2.style.top = speed3 + 'px';
  car3.style.top = speed2 + 'px';
  car4.style.top = speed1 + 'px';}
   
}, 1)}else{lastScroll = currentScroll;}};}
scrollDetect();

document.getElementById('jim'). addEventListener("click", myScore);

function myScore(){
  var myScore =parseInt(prompt("Enter Score"));

if (myScore>=80 && myScore<=100){
  document.getElementById('para').innerHTML ="A";
}else if(myScore<=79 && myScore>=60) {
  document.getElementById('para').innerHTML ="B";
}else if(myScore<=59 && myScore>=50) {
  document.getElementById('para').innerHTML ="C";
}else if(myScore<=49 && myScore>=40) {
  document.getElementById('para').innerHTML ="D";
}else if(myScore<=39 && myScore>=0) {
  document.getElementById('para').innerHTML ="E";
}
else {
  document.getElementById('para').innerHTML ="Please enter a valid SCORE";
}

}

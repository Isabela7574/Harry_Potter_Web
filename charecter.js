function checkCharecter(){
   

//type = "text/javascript" 
var Dustin = 0 ;
var Mike =  0;
var Will = 0;
var Lucas = 0;
var Eleven = 0;


var question1 = document.charecter.question1.value;
var question2 = document.charecter.question2.value;
var question3 = document.charecter.question3.value;
var question4 = document.charecter.question4.value;
var question5 = document.charecter.question5.value;
var question6 = document.charecter.question6.value;
var question7 = document.charecter.question7.value;
var question8 = document.charecter.question8.value;

 
if (question1=="Red"){
     Dustin = Dustin + 1;
}else if(question1=="Blue"){ 
     Mike = Mike + 1;
}else if(question1=="Yellow"){
     Will = Will + 1;
}else if(question1=="Green"){
      Lucas = Lucas + 1;
}else{
     Eleven = Eleven + 1;
}


if (question2=="Nacey"){
     Dustin = Dustin + 1;
}else if(question2=="Max"){ 
      Mike = Mike + 1;
}else if(question2=="Eleven"){
     Will = Will + 1;
}else if (question2=="Johnathan"){
    Lucas = Lucas + 1;
}else{
   Eleven = Eleven + 1;
}

if (question3=="Nuget"){
     Dustin = Dustin + 1;
}else if(question3=="Maple syrup tomped with scrabled eggs"){ 
     Mike = Mike + 1;
}else if(question3=="Reese's"){
     Will = Will + 1;
}else if (question3=="Hershey's"){
    Lucas = Lucas + 1;
}else{
    Eleven = Eleven + 1;
}

if (question4=="No food"){
     Dustin = Dustin + 1;
}else if(question4=="Losing loved ones"){ 
     Mike = Mike + 1;
}else if(question4=="Being taken"){
     Will = Will + 1;
}else if (question4=="Being replaced"){
    Lucas = Lucas + 1;
}else{
    Eleven = Eleven + 1;
}

if (question5=="Eat food"){
     Dustin = Dustin + 1;
}else if(question5=="Dance"){ 
     Mike = Mike + 1;
}else if(question5=="DJ"){
     Will = Will + 1;
}else if (question5=="Make friends"){
    Lucas = Lucas + 1;
}else{
    Eleven = Eleven + 1;
}

if (question6=="Funny"){
     Dustin = Dustin + 1;
}else if(question6=="Leader"){ 
     Mike = Mike + 1;
}else if(question6=="Smart"){
     Will = Will + 1;
}else if (question6=="Protective"){
    Lucas = Lucas + 1;
}else{
    Eleven = Eleven + 1;
}

if (question7=="Eating"){
     Dustin = Dustin + 1;
}else if(question7=="Hiking"){ 
     Mike = Mike + 1;
}else if(question7=="Drawing"){
     Will = Will + 1;
}else if (question7=="Biking"){
    Lucas = Lucas + 1;
}else{
    Eleven = Eleven + 1;
}

if (question8=="Chef"){
     Dustin = Dustin + 1;
}else if(question7=="Computer Engineer"){ 
     Mike = Mike + 1;
}else if(question7=="Artist"){
     Will = Will + 1;
}else if (question7=="Army"){
    Lucas = Lucas + 1;
}else{
    Eleven = Eleven + 1;
}

//Check Singles 
if (Dustin > Mike && Dustin > Lucas && Dustin > Will && Dustin> Eleven) {
    alert("You are Dustin!");
} else if (Mike > Dustin && Mike > Lucas && Mike > Will && Mike > Eleven) {
   alert("You are Mike!");
} else if(Lucas > Mike && Lucas > Dustin &&  Lucas > Will && Lucas > Eleven) {
   alert("You are Lucas!");
} else if(Will > Dustin && Will > Lucas && Will > Mike && Will > Eleven) {
    alert("You are Will!");
} else {
    alert("You are Eleven!");

}

}


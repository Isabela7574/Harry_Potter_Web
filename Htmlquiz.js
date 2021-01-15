function checkHtmlQuiz () {
    
    var right = 0 ;
 
 //fixed  
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;

//fixed

    if (question1 ==="P"){
     right = right + 1;
}

    if (question2===".html"){
     right = right + 1;
}

if (question3==="h1"){
     right = right + 1;
}

if (question4==="CSS"){
     right = right + 1;
}
alert("Number Correct:" + right + "/4" );
}

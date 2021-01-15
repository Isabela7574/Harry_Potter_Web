
function check() {
    var correct = 0 ;
    
    //storing user answers 
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
 
    //checking user answers
    if (question1=="12"){
         correct++;
    }
    if (question2=="1983"){
         correct++;
    }
    if (question3=="Dungeons and Dragons"){
         correct++;
    }
    if (question4=="Melvad's general Store"){
         correct++;
    }
    if (question5=="California"){
         correct++;  
    }
    if (question6=="Jane"){
         correct++;
    }
    if (question7=="4"){
         correct++;
    }
    if (question8=="The Nether"){
         correct++;
    }
    if (question9=="Should I stay or Should I go"){
         correct++;
    }
    if (question10=="Chicago"){
         correct++;
    }

    //alert("Number Correct:" + correct + "/10" );
    
    //printing out result
    document.getElementById("result").innerHTML = "Congratulations, your score is " + correct + "/10!";
    
    
    
    
}
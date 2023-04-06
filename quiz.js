$(document).ready(function(){
    correct = ["1991", "Uracil"];
    questions = ["When Kazakhstan became independent?","Which nitrogen base is absent in DNA?"]
    choices = [["1990","1991","1989","1992"],["Adenine","Thymine","Uracil","Guanine"]]
    
    quizBox = $("#quiz-box"); // Jquery
    questions.forEach(function(q, index){
     console.log(index);
     const i = index + 1
     quizBox.append ("<div class='question"+i+"'>"); 
    
     $('.question'+(i)).append ("<p class='d'> Q" + (i)+ ". " + questions[index] + "</p>");
     $('.question'+(i)).append ("<label><input type='radio' name='q"+(i)+"' value='"+choices[index][0]+"'>"+choices[index][0]+"</label>")
     $('.question'+(i)).append ("<label><input type='radio' name='q"+(i)+"' value='"+choices[index][1]+"'>"+choices[index][1]+"</label>")
     $('.question'+(i)).append ("<label><input type='radio' name='q"+(i)+"' value='"+choices[index][2]+"'>"+choices[index][2]+"</label>")
     $('.question'+(i)).append ("<label><input type='radio' name='q"+(i)+"' value='"+choices[index][3]+"'>"+choices[index][3]+"</label>")
     
     quizBox.append ("</div"); 
    })

    
    countCorrect = 0;
    reset = false
    
    $("button").click (function (event){
          if (reset == true) {
               countCorrect = 0
          }
         questions.forEach(function(q, index){
               $("input[name=q"+(index+1)+"]").each (function(){
                    choice = $(this).parent().text(); 
                    if ($( this ).prop("checked") == true && correct [index] == choice){
                         countCorrect += 1;
                    }
          });
         })
         $("#quiz-box").append ("<h2>Result of the quiz is: " + countCorrect + "</h2>");
         reset = true
    }); 

});
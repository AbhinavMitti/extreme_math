player_1_name = localStorage.getItem("player_1_name");
player_2_name = localStorage.getItem("player_2_name");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player1_name").innerHTML = player_1_name + " : ";
document.getElementById("player2_name").innerHTML = player_2_name + " : ";

document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;

document.getElementById("player_question").innerHTML = "Question turn : " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer turn : " + player_2_name;

function send() 

{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    acutal_answer = parseInt(number1) * parseInt(number2);

    question_words = "<h4>" + number1 + " x "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text'id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check<button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number1").value = "";
}





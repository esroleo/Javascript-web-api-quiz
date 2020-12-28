var quizStatus = true;
var score = 0;


var questions = {
    correct: {
        "Commonly used datatypes DO NOT include?" : "Alerts",
        "The condition statement if/else is enclosed with the following:" : "Parentheses",
        "Arrays can be used to store the following" : "All of the above",
        "A very useful tool to debug arrays is:": "For loops",
        "Strings must be enclosed with:": "Quotes"
    }
}


while (quizStatus){
    var answer = "";

    answer = window.prompt("Commonly used datatypes DO NOT include?");
    if (answer === "Alerts") {

      console.log("Answered correctly, you get 10 points");
      score += 10;
      console.log(score)
    } else {
        break;
    }

    answer = window.prompt("The condition statement if/else is enclosed with the following:");
    if (answer === "Parentheses") {

      console.log("Answered correctly, you get 10 points");
      score += 10;
      console.log(score)
    } else {
        break;
    }


    answer = window.prompt("Arrays can be used to store the following");
    if (answer === "All of the above") {

      console.log("Answered correctly, you get 10 points");
      score += 10;
      console.log(score)
    } else {
        break;
    }


    answer = window.prompt("A very useful tool to debug arrays is:");
    if (answer === "For loops") {

      console.log("Answered correctly, you get 10 points");
      score += 10;
      console.log(score)
    } else {
        break;
    }


    answer = window.prompt("Commonly used datatypes DO NOT include?");
    if (answer === "Quotes") {

      console.log("Strings must be enclosed with:");
      score += 10;
      console.log(score)
    } else {
        break;
    }

console.log(questions.correct["Commonly used datatypes DO NOT include?"]);
console.log(questions.correct["The condition statement if/else is enclosed with the following:"]);
console.log(questions.correct["Arrays can be used to store the following"]);
console.log(questions.correct["A very useful tool to debug arrays is:"]);
console.log(questions.correct["Strings must be enclosed with:"]);
quizStatus = false;

}








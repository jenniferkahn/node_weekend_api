$(function() {

  console.log('you are up and running')

});

// end of console




//

$("#Seattle").on("click", function(){
   source = "Seattle";
   sourceQ = trivia.questions.Seattle;
   sourceA = trivia.answers.Seattle;
   startGame();
});


// ok...questions for player

questions: {
   ["&quot;This is your life and it's ending one minute at a time.&quot;", "&quot;Neo, sooner or later you are going to realize, just as I did, that there's a difference between knowing the path and walking the path.&quot;", "&quot;As if.&quot;","&quot;In case I don't see ya, good afternoon, good evening, and good night!.&quot;", "&quot; I don't like violence, Tom. I'm a businessman. Blood is a big expense.&quot;","&quot;That was the most fun I've ever had without laughing.&quot;","&quot;dazed quote here.&quot;"]
 };

//Trivia answers....correct answers will not accept typos

answers: {
['Fight Club', 'The Matrix', 'Clueless', 'The Truman Show', 'The Godfather', 'Mean Girls', 'Dazed and Confused']
},
// functions should be called in order to start the game




},

var ui = {};

var game = {};
game.currentQuestion;
game.currentQuestionId = 0;
game.score = 0;

// DOM is here and the page is ready!
$(document).ready(function() {

  // Time to make SELECTORS
  ui.button = $('#submit-answer');
  ui.questionBox = $('#question-for-user');
  ui.answer = $('#user-answer');
  ui.scoreBox = $('#player-score');

  // let's show the user their first question
  game.currentQuestion = content[game.currentQuestionId];
function(startGame) {
  // two properpies: answer and then question
  game.answer = game.currentQuestion.answer;
  game.question = game.currentQuestion.question;
  // now, let's show the user the question
  $(ui.questionBox).html(game.question);
  // show score
  $(ui.scoreBox).html(game.score);

  // button click event - check answer, update score if needed, then show next question
  $(ui.button).on('click', function() {




    if (game.currentQuestionId >= (content.length - 1)) {
      // code to show winning score
      // this can be any dom stuff yay
      alert('game over :)');
      // do something to show the user the game is over now :)
    } else {
      var usersAnswer = $(ui.answer).val();

      // .val() gets text from a user input
      // now we need to compare the answer vs user's answer
      // do they match? let's check
      if (game.answer.toLocaleLowerCase() == usersAnswer.toLocaleLowerCase()) {
        // update score internally
        game.score = game.score + 1;
        // update score visually
        $(ui.scoreBox).html(game.score);
        alert('You got it right!');
        // replace alert with DOM stuff, not alerts
      } else {
        alert('Sorry, womp womp... you got it wrong');
        // replace me with DOM stuff; not alerts
      }
      // increment our questionId
      // update for next question
      game.currentQuestionId++; // game.currentQuestionId = game.currentQuestionId + 1
      game.currentQuestion = content[game.currentQuestionId];
      // two properties: answer and then question
      game.answer = game.currentQuestion.answer;
      game.question = game.currentQuestion.question;
      // now, let's show the user the question
      $(ui.questionBox).html(game.question);
      $(ui.answer).val('');

    }//end if
  });

});//end document.ready

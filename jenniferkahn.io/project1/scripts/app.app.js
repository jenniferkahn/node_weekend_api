$(function() {

  console.log('you are up and running')

});

// end of console

var content =
[{question: "\"This is your life and it's ending one minute at a time\"",
         answer: 'Fight Club'},

           {question: "\"In case I don't see ya, good afternoon, good evening, and good night!\"",
           answer: 'Truman Show'},

         {question: "\"Neo, sooner or later you are going to realize, just as I did, that there's a difference between knowing the path and walking the path.\"",
         answer: 'The Matrix'},

         {question: "\"I don't like violence, Tom. I'm a businessman. Blood is a big expense.\"",
           answer: 'The Godfather'},

         {question: "\"I can't go out, I'm sick...boo hoo you whore.\"",
           answer: 'Mean Girls'},

           {question: "\"I’ve been waiting for you, Obi-Wan. We meet again, at last. The circle is now complete. When I left you, I was but the learner; now I am the master.\"",
           answer: 'Star Wars'},

           {question: "\"I will be back.\"",
           answer: 'Terminator'},

         {question: "\"As-If!\"",
           answer: 'Clueless'},


       ];

var ui = {};

var game = {};
game.currentQuestion;
game.currentQuestionId = 0;
game.score = 0;
// sets everything to 0/start it up

// the page is ready!
$(document).ready(function() {

  // dom loaded, can make selectors
  ui.button = $('#submit-answer');
  ui.questionBox = $('#question-for-user');
  ui.answer = $('#user-answer');
  ui.scoreBox = $('#scoregoeshere');

  // let's show the user their first question
  game.currentQuestion = content[game.currentQuestionId];
  // two properties: answer and then question
  game.answer = game.currentQuestion.answer;

  game.question = game.currentQuestion.question;
  // now, let's show the user the question
  $(ui.questionBox).html(game.question);
  // show score
  $(ui.scoreBox).html(game.score);

  // button click event .....Take it out of the console.
  //
  // <script>
  // $( "p" ).click(function() {
  //   $( this ).slideUp();
  // });
  // </script>


  $(ui.button).on('click', function() {



  if (game.currentQuestionId >= (content.length - 1)) {
   alert('game over :)');
      // JEN ---- this is the code that shows GAME OVER
    $(ui.scoreBox).html('Game Over!');
      // game over
  } else {
  var usersAnswer = $(ui.answer).val();
  // .val() gets text from a user input
  // do they match?
  if (game.answer.toLocaleLowerCase() == usersAnswer.toLocaleLowerCase()) {
    // update score internally
  game.score = game.score + 1;
    // update score visually
  $(ui.scoreBox).html(game.score);
    alert('You got it right!');
  $(ui.answer).html('Correct!')
  // alert('You got it right!'); // replace alert and append to DOM
  } else {
  alert('Sorry, womp womp... you got it wrong');
  $(ui.answer).html('Nope, wrong!'); // replace alert and append to DOM
}
  // increment  questionId...update for next question
  game.currentQuestionId++; //game.currentQuestionId = game.currentQuestionId + 1
  game.currentQuestion = content[game.currentQuestionId];
      // two properties: answer and then question
  game.answer = game.currentQuestion.answer;
  game.question = game.currentQuestion.question;
      // show the user the question
  $(ui.questionBox).html(game.question);
  $(ui.answer).val('');
    }//end if
  });
});//end document.ready

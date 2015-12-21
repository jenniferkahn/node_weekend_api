$(function() {

  console.log('you are up and running')

});
//http://jsfiddle.net/wanwu/mAcaM/

//http://jsfiddle.net/sdshrestha/f60s53j9/
//http://codereview.stackexchange.com/questions/40032/javascript-quiz-app

//http://devdocs.io/javascript/global_objects/array



<input type="submit" value="A submit button">


var content=
              [
                {question: "In case I don't see ya, good afternoon, good evening, and good night!",

              //  options: ["Atlanta", "Sydney", "Athens", "Beijing"],
                answer: 'The Truman Show'},
//
              {question2: "Here's looking at you, kid.",
                answer: 'Humphrey Bogart in Casablanca'},

              {question3: "Neo, sooner or later you are going to realize, just as I did, that there's a difference between knowing the path and walking the path.",
              answer: 'Morpheus in The Matrix'},

              {question4: "I don\\t like violence, Tom. I\\m a businessman. Blood is a big expense.",
                answer: 'The Godfather'},

              {question5: 'I can\\t go out, I\\m sick...boo hoo you whore.',
                answer: 'Regina George in Mean Girls'},

                {question6: "That was the most fun I\\ve ever had without laughing.",
                answer: 'Woody Allen in Annie Hall'},

              {question7: "It\\s only after we\\ve lost everything that we\\re free to do anything.",
                answer: 'Tyler Durden in Fight Club'},

              {question8: "This is your life and it\\s ending one minute at a time",
                  answer: 'Tyler Durden in Fight Club'},
            ];

            console.log(content[4]);
                //logging the first array element.

              var myStringArray = ["Hello","World"];
                                    var arrayLength = myStringArray.length;
                                    for (var i = 0; i < arrayLength; i++) {
                                        alert(myStringArray[i]);
                                        //Do something
                                    }


                          String[] myStringArray = {"Hello","World"};
                                    for(String s : myStringArray)
                                    {
                                        //Do something
                                    }




                                    var content = ["Hello","World"];
                                    var arrayLength = content.length;
                                    for (var i = 0; i < arrayLength; i++) {
                                        alert(content[i]);
                                        //Do something
                                    }


    var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < content.length; i++) {
  (function(i) {
    this.print = function() {
      console.log('#' + i)

    this.print();
  }).call(animals[i], i);
}


//RETURN SECTION HERE

if (playerUno == type) {
  $('#result').html("<span class='right'>CORRECT!</span>");

} else {
    $('#result').html("<span class='wrong'>WRONG!</span>");

}


if (playerUno == type) {
  $('#result').html("<span class='right'>CORRECT!</span>");

} else {
    $('#result').html("<span class='wrong'>WRONG!</span>");

}





$('.choice').click(function(e) {
var chosenAnswer = e.target.id;

$('#result').show();
$('#name').hide();
$('#options').hide();


content([1])

if (playerPick == type) {
  $('#result').html("<span class='right'>CORRECT!</span>");

  var playTheme = function () {
      document.getElementById("").play();
    };
    playTheme();

} else {
    $('#result').html("<span class='wrong'>WRONG!</span>");

}
$('generate').show():

)};




//To play music question 1
//var playTheme = function () {
  //  document.getElementById("hobbit-theme").play();
  //};

//playTheme();






//pops up a picture to screen

//function component(domElement) {

//  this.domElement = domElement;
//  this.initialize = function() {
  //  console.log('init');
  //};
  //this.render = function() {
    //this.domElement.src = "http://cnet4.cbsistatic.com/hub/i/2015/02/25/49752f72-14d6-4033-af9c-88d40611d3c7/5ddb05cc300e5515c348d0d60f4e9e42/eiffel1.jpg"; // <img src='imageSrc'>
  //  console.log('render')
//  }

//}


//var photo = document.getElementById('photoswap');

//var bed = document.getElementById('btn');
//console.log('bed: ' + bed);

//var comp = new component(photo);
  //comp.initialize();

//bed.addEventListener('click', function(event) {
  //console.log(event);
//  console.log('btn pushed');

//comp.render();
//});
//};




// Interval code

//var arrayOfThings = [0, 1, 2, 3]; // length = 4
//for (var i = 0; i < arrayOfThings.length; i++) {
//logI(i);
//}

//function logI(some) {
//setInterval(function() {
//console.log(some);
//}, 5000);
//}

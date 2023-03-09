'use strict';
// console.log('Hello World');

let guessName = prompt('What is your name?');
// console.log(`Welcome to my page ${guessName}! Please answer yes or no to a few quick questions.`);
alert(`Welcome to my page ${guessName}! Please answer yes or no to a few quick questions.`);

/* 
 let vacation = prompt('Would I ever go to Disney World?').toUpperCase();

  if(questionOne === 'YES' || questionOne === 'Y') {
  // console.log(`Correct ${guessName}! We should go back!`);
 //   alert(`Correct ${guessName}! I would love to soon!`);
  } else  (questionOne === 'NO' || questionOne === 'N') {
    //  console.log(`Wrong ${guessName}, but do not feel bad I have not been neither!`);
    //alert(`Wrong answer ${guessName}, I just haven't had the chance to go there yet.`);
  }  */

// function aboutMeQuiz() {


//}
let question = ['Would I ever go to Disney World?', 'Did I have a good day?', 'Have you ever played Monopoly?', 'Would I ever go sky diving?', 'Would I ever go sky diving?', 'Do you I social media?'];

/* let answer = ['yes', 'yes', 'yes', 'yes','yes','yes']; */

function askQuestion(question, answer) {
  let response = prompt(question).toLowerCase();
  if (response === answer) {
/*     return true;
  } else {
    return false;
  } */
}
}

/* for (let i = 0; i < question.length; i++) {
  console.log(i);

  let rightAnswer = askQuestion(question[i], answer[i]);
  if (rightAnswer === true) {
    alert('good!');
  } else {
    alert('wrong');
  }
} */

function test(){
  for (let i = 0; i < question.length; i++) {
    console.log(i);
  let response = prompt(question[i]).toLowerCase();
    //let rightAnswer = askQuestion(question[i], answer[i]);
    if (response === 'yes' || response === 'y') {
      alert('good!');
    } else {
      alert('wrong');
    }
  }
}

test();
//askQuestion();

/* response === answer[i]
alert good
alert wrong
 */
/*




vacation();

function moodToday() {
  let questionTwo = prompt('Did I have a good day?').toUpperCase();
  if (questionTwo === 'YES' || questionTwo === 'Y') {
    // console.log(`Correct! ${guessName} I am glad to hear that!`);
    alert(`Correct! ${guessName} I try to see the brighter side of everyday!`);
  } else if (questionTwo === 'NO' || questionTwo === 'N') {
    // console.log(`WRONG! ${guessName} today was pretty good to me!`);
    alert(`WRONG! Everyday has some good to it ${guessName}!`);
  }
}
moodToday();

function games() {
  let questionThree = prompt('Have you ever played Monopoly?').toUpperCase();
  if (questionThree === 'YES' || questionThree === 'Y') {
    // console.log(`Right Answer ${guessName}! I love that game.`);
    alert(`Right Answer ${guessName}! I love that game.`);
  } else if (questionThree === 'NO' || questionThree === 'N') {
    // console.log(`Wrong Answer! You are missing out on some fun ${guessName}!`);
    alert(`Wrong Answer! You are missing out on some fun ${guessName}!`);
  }
}
games();

function adventureSeeker() {
  let questionFour = prompt('Would I ever go sky diving?').toUpperCase();
  if (questionFour === 'YES' || questionFour === 'Y') {
    // console.log(`True! ${guessName}! I hope to go someday.`);
    alert(`True! ${guessName}! I hope to go someday.`);
  } else if (questionFour === 'NO' || questionFour === 'N') {
    // console.log(`Incorrect ${guessName}! I wish you would at least try.`);
    alert(`Incorrect ${guessName}! I hope to at least try one day.`);
  }
}
adventureSeeker();

function socialSites() {
  let questionFive = prompt('Do you I social media?').toUpperCase();
  if (questionFive === 'YES' || questionFive === 'Y') {
    // console.log(`${guessName}! Right Answer! We should follow eachother on one ${guessName}!`);
    alert(`Right Answer! We should follow eachother on one ${guessName}! `);
  } else if (questionFive === 'NO' || questionFive === 'N') {
    // console.log(`${guessName}! Incorrect! Give it one last try please.`);
    alert(`${guessName}! Incorrect! I love TikTok to much to give it up!`);
  }
}
socialSites();


function guessingGame() {
  let myNumber = 17;
  let guesses = 4;
  while (guesses > 0) {
    let questionSix = +prompt('Guess my favorite number. It is between 1 and 25');
    if (questionSix === myNumber) {
      alert('Correct! You are good at this game!');
      score++;
      break;
    } else if (questionSix > myNumber) {
      alert(`That is toooo high! Try guessing again. ${guesses - 1} guesses left.`);
    } else if (questionSix < myNumber) {
      alert(`Too low, try again. ${guesses - 1} guesses left.`);
    }
    guesses--;
  }
  if (guesses === 0) {
    alert(`Correct! Yayyy you got it! My favorite number is ${myNumber}!`);
  }
}
guessingGame();


function myFavorite() {
  let favColor = ['black', 'red', 'yellow', 'blue'];
  let guessesLeft = 6;
  let correctAnswer = false;
  while (guessesLeft > 0) {
    let questionSeven = prompt('What is my favorite color?').toLowerCase();
    for (let i = 0; i < favColor.length; i++) {
      if (favColor[i] === questionSeven) {
        console.log('Correct ${guessName} ! I love this color!');
        correctAnswer = true;
      }
    }
    if (correctAnswer) {
      alert(`Corrrecttttt ${questionSeven}! I love this color!`);
      score++;
      break;
    } else {
      alert(`${questionSeven} is not my favorite color. Try again, ${guessesLeft - 1} guesses left.`);
    }
    guessesLeft--;
  }
  alert(`My favorite colors are ${favColor[0]}, ${favColor[1]}, ${favColor[2]}, ${favColor[3]}.`);
}
myFavorite();

alert(`Your final score is ${score} out of 7.`);

alert(`Thanks for participating, ${guessName}. Thank you for visiting my site!`);
 */
'use strict';
// console.log('Hello World');

let guessName = prompt('What is your name?');
// console.log(`Welcome to my page ${guessName}! Please answer yes or no to a few quick questions.`);
alert(`Welcome to my page ${guessName}! Please answer yes or no to a few quick questions.`);

function vacation() {
  let questionOne = prompt('Have you ever been to Disney World?').toUpperCase();
  if(questionOne === 'YES' || questionOne === 'Y') {
  // console.log(`Correct ${guessName}! We should go back!`);
    alert(`Correct ${guessName}! We should go back!`);
  } else if (questionOne === 'NO' || questionOne === 'N') {
    //  console.log(`Wrong ${guessName}, but do not feel bad I have not been neither!`);
    alert(`Wrong answer ${guessName}, but do not feel bad I have not been neither!`);
  }
}
vacation();

function moodToday() {
  let questionTwo = prompt('Did you have a good day?').toUpperCase();
  if(questionTwo === 'YES' || questionTwo === 'Y') {
    // console.log(`Correct! ${guessName} I am glad to hear that!`);
    alert(`Correct! ${guessName} I am glad to hear that!`);
  } else if (questionTwo === 'NO' || questionTwo === 'N') {
  // console.log(`WRONG! But ${guessName} I hope tommorrow is better!`);
    alert(`WRONG! But ${guessName} I hope tommorrow is better!`);
  }
}
moodToday();

function games() {
  let questionThree = prompt('Have you ever played Monopoly?').toUpperCase();
  if(questionThree === 'YES' || questionThree === 'Y') {
  // console.log(`Right Answer ${guessName}! I love that game.`);
    alert(`Right Answer ${guessName}! I love that game.`);
  } else if (questionThree === 'NO' || questionThree === 'N') {
  // console.log(`Wrong Answer! You are missing out on some fun ${guessName}!`);
    alert(`Wrong Answer! You are missing out on some fun ${guessName}!`);
  }
}
games();

function adventureSeeker() {
  let questionFour = prompt('Would you ever go sky diving?').toUpperCase();
  if(questionFour === 'YES' || questionFour === 'Y') {
  // console.log(`True! ${guessName}! I hope to go someday.`);
    alert(`True! ${guessName}! I hope to go someday.`);
  } else if (questionFour === 'NO' || questionFour === 'N') {
  // console.log(`Incorrect ${guessName}! I wish you would at least try.`);
    alert(`Incorrect ${guessName}! I wish you would at least try.`);
  }
}
adventureSeeker();

function socialSites() {
  let questionFive = prompt('Do you use social media?').toUpperCase();
  if(questionFive === 'YES' || questionFive === 'Y') {
  // console.log(`${guessName}! Right Answer! We should follow eachother on one ${guessName}!`);
    alert(`Right Answer! We should follow eachother on one ${guessName}! `);
  } else if (questionFive === 'NO' || questionFive === 'N') {
  // console.log(`${guessName}! Incorrect! Give it one last try please.`);
    alert(`${guessName}! Incorrect! Give it one last try please.`);
  }
}
socialSites();

alert(`Thanks for participating, ${guessName}. Thank you for visiting my site!`);

//DOM elements to interact with
const button = document.getElementById('button');
const message = document.getElementById('message');

//Array of random words
const wordArray1 = ['Hello', 'Hi', 'Yo'];
const wordArray2 = ['Goodbye', 'Bye', 'Cya'];

// Will activate on button click
function displayMessage(){
    let randomNum1 = Math.floor(Math.random() * wordArray1.length);
    let randomNum2 = Math.floor(Math.random() * wordArray2.length);

    let word1 = wordArray1[randomNum1];
    let word2 = wordArray2[randomNum2];

    message.innerHTML = `${word1} mate, ${word2} mate.`;
}

//Button Onclick
button.addEventListener('click', displayMessage);
//DOM elements to interact with
const button = document.getElementById('button');
const message = document.getElementById('message');
const img = document.getElementById('img');

//Array of quote objects
const quotes = [
    {
        quote: 'The Best Way To Get Started Is To Quit Talking And Begin Doing.', 
        author: 'Walt Disney',
        image: './resources/img/waltDisney.jpg'
    },
    {
        quote: 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.',
        author: 'Winston Churchill',
        image: './resources/img/winstonChurchill.jpg'
    },
    {
        quote: 'Don&#39;t Let Yesterday Take Up Too Much Of Today.',
        author: 'Will Rogers',
        image: './resources/img/willRogers.jpg'
    },
    {
        quote: 'Never half-ass two things. Whole-ass one thing.',
        author: 'Ronald Ulysses Swanson',
        image: './resources/img/ronSwanson.jpg'
    },
    {
        quote: 'If You Are Working On Something That You Really Care About, You Don&#39;t Have To Be Pushed. The Vision Pulls You.',
        author: 'Steve Jobs',
        image: './resources/img/steveJobs.jpg'
    },
    {
        quote: 'Creativity is intelligence having fun.',
        author: 'Albert Einstein',
        image: './resources/img/albertEinstein.jpg'
    },
    {
        quote: 'You are never too old to set another goal or to dream a new dream.',
        author: 'C.S. Lewis',
        image: './resources/img/csLewis.jpg'
    }
]

// Choose a random integer between 0 and x
function generateRandomNumber(x) {
    let random = Math.floor(Math.random() * x);
    return random;
  }

//store array length and random number outside of function.
let len = quotes.length;
let num;

//Shuffle function adapted from https://discuss.codecademy.com/t/mixed-messages-philosophers-quotes/547264/13
function shuffle() {
    if (len > 1) {
        button.innerHTML = "New Quote";
        len--;
        [quotes[len], quotes[num]] = [quotes[num], quotes[len]];
    } else {
        button.innerHTML = "Reset?";
        len = quotes.length;
    }
}

// Will activate on button click
function displayMessage(){
    num = generateRandomNumber(len);
    let quote = quotes[num];
    message.innerHTML = `As <strong>${quote.author}</strong> once said, <br/> <br/> <em>${quote.quote}</em>`;
    img.src = quote.image;
    shuffle();
}

//Button Onclick
button.addEventListener('click', displayMessage);
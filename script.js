//DOM elements to interact with
const button = document.getElementById('button');
const message = document.getElementById('message');
const img = document.getElementById('img');

//hide img
img.style.display = 'none';

//Array of quote objects
const quotes = [
    {
        quote: 'The Best Way To Get Started Is To Quit Talking And Begin Doing.', 
        author: 'Walt Disney'
    },
    {
        quote: 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.',
        author: 'Winston Churchill'
    },
    {
        quote: 'Don&#39;t Let Yesterday Take Up Too Much Of Today.',
        author: 'Will Rogers'
    },
    {
        quote: 'You Learn More From Failure Than From Success. Don&#39;t Let It Stop You. Failure Builds Character.',
        author: 'Unknown'
    },
    {
        quote: 'Never half-ass two things. Whole-ass one thing.',
        author: 'Ronald Ulysses Swanson',
        image: './img/ronSwanson.jpg'
    }
];

console.log(quotes);

// Will activate on button click
function displayMessage(){
    let randomNum = Math.floor(Math.random() * quotes.length);

    let quote = quotes[4];

    message.innerHTML = `As <strong>${quote.author}</strong> once said, <br/> <br/> <em>${quote.quote}</em>`;
    img.src = quotes[4].image;
    img.style.display = 'inline-block';
}

//Button Onclick
button.addEventListener('click', displayMessage);
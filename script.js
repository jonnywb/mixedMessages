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
        author: 'Walt Disney',
        image: './img/waltDisney.jpg'
    },
    {
        quote: 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.',
        author: 'Winston Churchill',
        image: './img/winstonChurchill.jpg'
    },
    {
        quote: 'Don&#39;t Let Yesterday Take Up Too Much Of Today.',
        author: 'Will Rogers',
        image: './img/willRogers.jpg'
    },
    {
        quote: 'Never half-ass two things. Whole-ass one thing.',
        author: 'Ronald Ulysses Swanson',
        image: './img/ronSwanson.jpg'
    },
    {
        quote: 'If You Are Working On Something That You Really Care About, You Don&#39;t Have To Be Pushed. The Vision Pulls You.',
        author: 'Steve Jobs',
        image: './img/steveJobs.jpg'
    }
];

console.log(quotes);

// Will activate on button click
function displayMessage(){
    let randomNum;
    if (!randomNum) {   
        randomNum = Math.floor(Math.random() * quotes.length);
    } else {
        let temp = randomNum;
        while (randomNum === temp) {
            randomNum = Math.floor(Math.random() * quotes.length);
        }
    }
    
    let quote = quotes[randomNum];

    message.innerHTML = `As <strong>${quote.author}</strong> once said, <br/> <br/> <em>${quote.quote}</em>`;
    img.src = quote.image;
    img.style.display = 'inline-block';
    button.innerHTML = "Another?";
}

//Button Onclick
button.addEventListener('click', displayMessage);
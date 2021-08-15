document.addEventListener('DOMContentLoaded', ()=>{

    //Card Options

    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'piza',
            img: 'images/pizza.png'
        },
        {
            name: 'piza',
            img: 'images/pizza.png'
        }
    ]

   const grid = document.querySelector('.grid');
   const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    // create your board

    function createBoard(){
        
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
            
        }
    }
    cardArray.sort(()=> 0.5 - Math.random());
 
        // check for match
        function checkForMatch(){
            var cards = document.querySelectorAll('img');
            const optionOneId = cardsChosenId[0];
            const optionTwoId = cardsChosenId[1];
    
            if(cardsChosen[0] === cardsChosen[1]){
                alert('You found a match!');
                cards[optionOneId].setAttribute('src', 'images/white.png');
                cards[optionOneId].classList.add('unclickable');
               cards[optionTwoId].setAttribute('src', 'images/white.png');
               cards[optionTwoId].classList.add('unclickable');
                cardsWon.push(cardsChosen)
            }else{
                cards[optionOneId].setAttribute('src', 'images/blank.png');
                cards[optionTwoId].setAttribute('src', 'images/blank.png');
                alert('Sorry try again.')
            }
    
            cardsChosen = [];
            cardsChosenId = [];
            resultDisplay.textContent = cardsWon.length
            if(cardsWon.length === cardArray.length/2){
                resultDisplay.textContent = 'Congratulations! You found them all!'
                setInterval(() => {
                    location.reload();
                    
                }, 800);
            }
    
        }

    // flip your card

    function flipCard(){

        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);

        this.setAttribute('src', cardArray[cardId].img )
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 100)
        }
    }


    createBoard();
})
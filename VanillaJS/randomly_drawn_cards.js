
const makeDeck = () => {
    return {
            deck: [], //empty array to store the deck of cards
            drawnCards: [], //empty array to store cards been drawn
            suits: ["Hearts","Diamonds","Spades","Clubs"],
            values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",

            //function below makes a full deck of cards that gets stored in the deck array
            initializeDeck(){
                const {suits,values,deck} = this //clearer wording than using this.suits etc
                for(let value of values.split(',')){ //split the string of values by comma, loop through each number
                    for(let suit of suits){ //looping through suits array
                        deck.push({value,suit}) //for each value(card number), forms a pair with each item in the suit
                    }
                }
                return deck;
            },

            //drawCard() removes the last card of the deck and adds it to drawnCards array; assuming that card has been drawn by a player
            drawCard(){
                const card = this.deck.pop() //make card = last card of the deck
                this.drawnCards.push(card) //push the card to the drawnCards deck
                return card
            },

            //drawMultiple(numCards) draws multiple cards to the cards array 
            drawMultiple(numCards){
                const cards = []
                for(let i = 0; i < numCards; i++){
                    cards.push(this.drawCard()) //refers back to the drawCard() function that retrieves the last card
                }
                return cards;
            },

            //shuffle() randomly reorders the deck
            shuffle(){
                const{deck} = this;
                for(let i = deck.length-1; i > 0; i--){ 
                    let j = Math.floor(Math.random()*(i+1)); //pick a random index before the current element's index
                    [deck[i],deck[j]] = [deck[j],deck[i]];//swap current element's index with the random index
                }
            }
    }
}

//instructions for 3 players drawing cards:
const myDeck = makeDeck();
myDeck.initializeDeck();
myDeck.shuffle();
const player1 = myDeck.drawMultiple(2);
const player2 = myDeck.drawMultiple(2);
const player3 = myDeck.drawMultiple(2);

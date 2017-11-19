/*
var cardOne = "king";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "queen";
*/

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];


function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] == cardsInPlay[1]) {
			alert ("You found a match!");
		}
		else {
			alert ("Sorry, try again");	
		}
	}
}

function flipCard (cardId) {
	var cardOne;

	/*
	cardOne = cards[0];
	cardsInPlay.push(cardOne);

	console.log("User flipped "+ cardOne);

	var cardTwo = cards[2];
	cardsInPlay.push(cardTwo);

	console.log("User flipped "+ cardTwo);
	*/

	console.log("User flipped "+cards[cardId]);

	cardsInPlay.push(cards[cardId]);

	checkForMatch();

	/*
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] == cardsInPlay[1]) {
			alert ("You found a match!");
		}
		else {
			alert ("Sorry, try again");	
		}
	}
	*/
}

flipCard(0);
flipCard(2);


/*
for (var i = 0; i < cards.length; i++) {
	
}
*/


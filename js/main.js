/*
var cardOne = "king";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "queen";
*/

//var cards = ['queen', 'queen', 'king', 'king'];
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
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

function flipCard() {

	var cardId = this.getAttribute("data-id");
	//var cardId = document.getElementById("game-board").getAttribute("data-id");
	console.log("cardId = "+ cardId);
	/*
	var cardOne;
	cardOne = cards[0];
	cardsInPlay.push(cardOne);

	console.log("User flipped "+ cardOne);

	var cardTwo = cards[2];
	cardsInPlay.push(cardTwo);

	console.log("User flipped "+ cardTwo);
	*/

	console.log("User flipped "+cards[cardId].rank);
	console.log("User flipped "+cards[cardId].suit);
	console.log("User flipped "+cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
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

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);

		//Adding Event Listener
		cardElement.addEventListener("click", flipCard);
		//cardElement.addEventListener("click", function() { alert();});
		//Append
		document.getElementById("game-board").appendChild(cardElement);
	}
}

//flipCard(0);
//flipCard(2);

createBoard();


angular
	.module('myApp')
		.controller("TicTacToeController", TicTacToeController)

function TicTacToeController(){
	var self = this;
	self.turn = 0;
	self.takeTurns = takeTurns;
	self.chooseBox = chooseBox;
	self.chooseWinner = chooseWinner;
	self.catsGame = catsGame;
	self.reset = reset;
	self.p1Score = 0;
	self.p2Score = 0;

	//sets boxes as array
	self.boxes = [  { isX: false, isO: false },
					{ isX: false, isO: false },
					{ isX: false, isO: false },
					{ isX: false, isO: false },
					{ isX: false, isO: false },
					{ isX: false, isO: false },
					{ isX: false, isO: false },
					{ isX: false, isO: false },
					{ isX: false, isO: false }  ];

	//attaches chooseBox() to controller
	

	function takeTurns(){
	self.turn++;
	if (self.turn % 2 === 0){
		return "X";
	} else {
		return "O";
	}
}

	//reacts to box being clicked
	function chooseBox(index){
		console.log("choosebox running")
		if (self.boxes[index].isX == true || self.boxes[index].isO == true){ 
			alert("Pick another box!");
			return;
		}
		var theTurn = takeTurns();
			if (theTurn == "X"){
				self.boxes[index].isX = true;
			} else {
				self.boxes[index].isO = true;
			}
			chooseWinner();
	}


function chooseWinner(){
	console.log("choosing winner");
	if  ((self.boxes[0].isX=== true && self.boxes[1].isX=== true && self.boxes[2].isX=== true)||
		 (self.boxes[3].isX=== true && self.boxes[4].isX=== true && self.boxes[5].isX=== true)||
		 (self.boxes[6].isX=== true && self.boxes[7].isX=== true && self.boxes[8].isX=== true)||
		 (self.boxes[3].isX=== true && self.boxes[4].isX=== true && self.boxes[5].isX=== true)||
		 (self.boxes[0].isX=== true && self.boxes[3].isX=== true && self.boxes[6].isX=== true)||
		 (self.boxes[1].isX=== true && self.boxes[4].isX=== true && self.boxes[7].isX=== true)||
		 (self.boxes[3].isX=== true && self.boxes[4].isX=== true && self.boxes[5].isX=== true)||
		 (self.boxes[2].isX=== true && self.boxes[5].isX=== true && self.boxes[8].isX=== true)||
		 (self.boxes[0].isX=== true && self.boxes[4].isX=== true && self.boxes[8].isX=== true)||
		 (self.boxes[2].isX=== true && self.boxes[4].isX=== true && self.boxes[6].isX=== true))
		{
			self.p2Score++;
			alert("X Wins!");
	//		reset();
		} else if (
		(self.boxes[0].isO=== true && self.boxes[1].isO=== true && self.boxes[2].isO=== true)||
		(self.boxes[3].isO=== true && self.boxes[4].isO=== true && self.boxes[5].isO=== true)||
		(self.boxes[6].isO=== true && self.boxes[7].isO=== true && self.boxes[8].isO=== true)||
		(self.boxes[3].isO=== true && self.boxes[4].isO=== true && self.boxes[5].isO=== true)||
		(self.boxes[0].isO=== true && self.boxes[3].isO=== true && self.boxes[6].isO=== true)||
		(self.boxes[1].isO=== true && self.boxes[4].isO=== true && self.boxes[7].isO=== true)||
		(self.boxes[3].isO=== true && self.boxes[4].isO=== true && self.boxes[5].isO=== true)||
		(self.boxes[2].isO=== true && self.boxes[5].isO=== true && self.boxes[8].isO=== true)||
		(self.boxes[0].isO=== true && self.boxes[4].isO=== true && self.boxes[8].isO=== true)||
		(self.boxes[2].isO=== true && self.boxes[4].isO=== true && self.boxes[6].isO=== true))

		{
			self.p1Score++;
			alert("O Wins!");
			reset();
		} else {
			catsGame();
		}

	} //closing chooseWinner()

	function catsGame(){
		if (self.turn == 9) {
			alert("Cat's Game!");
			reset();
		}
	}


	function reset(){
		console.log("resetting");
		for (var i = 0; i <= 8; i++){
			self.boxes[i].isX = false;
			self.boxes[i].isO = false;
		}
		self.turn = 0;
	}
				



} //closing TTTCtrl














// 	function reset(){
// 		for(var i = 0; i < boxes.length; i++){
// 			boxes[i].innerHTML = " ";
// 			turn = 0;
// 		}
				
// 	}

{
	function playGame(playerInput){

		clearMessages()

		const getMoveName = function(argMoveId){
			if(argMoveId == 1){
			return 'kamień';
			} else if (argMoveId == 2){
				return 'papier';
			} else if (argMoveId == 3){
				return 'nożyce';
			} else {
			printMessage('Nie znam ruchu o id ' + argMoveId + '.');
			return 'nieznany ruch';
			}
		}



		let randomNumber = Math.floor(Math.random() * 3 + 1);

		console.log('Wylosowana liczba to: ' + randomNumber);

		let computerMove = getMoveName(randomNumber);

		printMessage('Mój ruch to: ' + computerMove);

		console.log('Gracz wpisał: ' + playerInput);

		const getMoveName2 = function(playerInput){
			if(playerInput == 1){
			return 'kamień';
			} else if (playerInput == 2){
				return 'papier';
			} else if (playerInput == 3){
				return 'nożyce';
			} else {
			printMessage('Nie znam ruchu o id ' + playerInput + '.');
			return 'nieznany ruch';
			}
		}

		let playerMove = getMoveName2(playerInput);

		printMessage('Twój ruch to: ' + playerMove);


		const displayResult = function(computerMove, playerMove){
			if( computerMove == 'kamień' && playerMove == 'papier'){
				printMessage('Wygrywasz!');
			} else if (computerMove == 'kamień' && playerMove == 'kamień'){
				printMessage('Remis!');
			} else if (computerMove == 'kamień' && playerMove == 'nożyce'){
				printMessage('Przegrywasz!');
			} else if( computerMove == 'papier' && playerMove == 'papier'){
				printMessage('Remis!');
			} else if (computerMove == 'papier' && playerMove == 'kamień'){
				printMessage('Przegrywasz!');
			} else if (computerMove == 'papier' && playerMove == 'nożyce'){
				printMessage('Wygrywasz!');
			} else if( computerMove == 'nożyce' && playerMove == 'papier'){
				printMessage('Przegrywasz!');
			} else if (computerMove == 'nożyce' && playerMove == 'kamień'){
				printMessage('Wygrywasz!');
			} else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
				printMessage('Remis!');
			}
		}
	displayResult(computerMove, playerMove);
	}

	function buttonClicked1(){
		playGame('1');
	}
	
	let button1 = document.getElementById('button1');
	
	button1.addEventListener('click', buttonClicked1);

	function buttonClicked2(){
		playGame('2');
	}
	
	let button2 = document.getElementById('button2');
	
	button2.addEventListener('click', buttonClicked2);

	function buttonClicked3(){
		playGame('3');
	}
	
	let button3 = document.getElementById('button3');
	
	button3.addEventListener('click', buttonClicked3);
}
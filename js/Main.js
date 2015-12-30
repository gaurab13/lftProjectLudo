function Main(){

var mainWrp = document.getElementById("main-wrapper");
var mainboard= document.getElementById("main-container");
var option1 = document.createElement("button");
var option2 =document.createElement("button");
var option3 = document.createElement("button");
var gameFlag=0;
var that= this;

var ludoOption= document.createElement("button");
ludoOption.setAttribute("class","game");
ludoOption.setAttribute("id","ludo");
ludoOption.innerHTML=("Ludo");

var snakeOption= document.createElement("button");
snakeOption.setAttribute("class","game");
snakeOption.setAttribute("id","snake");
snakeOption.innerHTML=("Snakes and Ladders");

option1.setAttribute("class","option");
option2.setAttribute("class","option");
option3.setAttribute("class","option");

option2.setAttribute("id","three");
option3.setAttribute("id","four");
option1.setAttribute("id","two");

mainboard.style.display="none";

option2.innerHTML=("3");
option3.innerHTML=("4");
option1.innerHTML=("2");

mainWrp.appendChild(option1);
mainWrp.appendChild(option2);
mainWrp.appendChild(option3);
mainWrp.appendChild(ludoOption);
mainWrp.appendChild(snakeOption);


this.init = function(){

	var noOfPlayers = 0;
	var status= document.getElementById("status");
	status.style.display="none";
	var optheader= document.getElementById("options-header");
	optheader.style.display="none";
	selectGame();

	console.log(gameFlag);
	option1.onclick= function(){
		noOfPlayers= 2;
		initiateGame(noOfPlayers,gameFlag);
	}

	option2.onclick= function(){
		noOfPlayers= 3;
		initiateGame(noOfPlayers,gameFlag);
	}
	option3.onclick=function(){
		noOfPlayers= 4;
		initiateGame(noOfPlayers,gameFlag);
	}



}

var initiateGame = function(n, m){
	var optheader= document.getElementById("options-header");
	optheader.style.display="none";
	var noOfPlayers= n;
	var selectedGame= m;
	console.log("Game selected"+ m);
	option1.style.display="none";
	option2.style.display="none";
	option3.style.display="none";
	
	
	
	mainboard.style.display="block";
	
	if(selectedGame==4){
		var lBoard= new LudoBoard();
		lBoard.createBoard();
		var g = new CreateToken();
		g.createTokens();
		var gameLoop1 = new GameLoop();
		gameLoop1.calldice(noOfPlayers,selectedGame);
	}
	else{
		var sBoard= new SnakeBoard();
		sBoard.createBoard2();
		var token = new TokenSnake();
		token.createToken(noOfPlayers);
		var gameLoop = new SnakeLoop();
		
		gameLoop.calldice(noOfPlayers,selectedGame);
	}
	
	
	
}

var selectGame = function(){
	console.log("here");
	option1.style.display="none";
	option2.style.display="none";
	option3.style.display="none";

	ludo.style.display="block";
	snake.style.display="block";

	ludo.onclick= function(){
		gameFlag= 4;
		console.log("clicked");
		setDisplay();
	
	}
	snake.onclick=function(){
		gameFlag= 1;
		console.log("clicked");
		setDisplay();
	
	}


	


}

var setDisplay= function(){
	var optheader= document.getElementById("options-header");
	optheader.style.display="block";

	option1.style.display="block";
	option2.style.display="block";
	option3.style.display="block";
	ludo.style.display="none";
	snake.style.display="none";
}



}
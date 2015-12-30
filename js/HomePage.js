function Homepage(){

var main = document.getElementById("main-wrapper");
var mainboard= document.getElementById("main-container");
var option1 = document.createElement("button");
var option2 =document.createElement("button");
var option3 = document.createElement("button");
var gameFlag=0;
var that= this;

var ludo= document.createElement("button");
	ludo.setAttribute("class","game");
	ludo.setAttribute("id","ludo");
	ludo.innerHTML=("Ludo");

	var snake= document.createElement("button");
	snake.setAttribute("class","game");
	snake.setAttribute("id","snake");
	snake.innerHTML=("Snakes and Ladders");

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

main.appendChild(option1);
main.appendChild(option2);
main.appendChild(option3);
main.appendChild(ludo);
main.appendChild(snake);


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
	/**/
	if(selectedGame==4){
		var lBoard= new Gameboard();
		lBoard.createBoard();
		var g = new CreateGatti();
		g.createGatti();
		var gameLoop1 = new GameLoop();
		gameLoop1.calldice(noOfPlayers,m);
	}
	else{
		var sBoard= new SnakeBoard();
		sBoard.createBoard2();
		var token = new TokenSnake();
		token.createToken(noOfPlayers);
		var gameLoop = new SnakeLoop();
		//gameLoop.setSnakeBoard();
		gameLoop.calldice(noOfPlayers,m);
	}
	/**/
	
	
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


var restart= document.getElementById("restart");
restart.onclick= function(){
	mainboard.style.display="none";
	var container= document.getElementById("main-container");
	container.style.display="none";
	var lboard= document.getElementById("l-board");
	var sboard= document.getElementById("s-board");
	lboard.style.display="none";

	//mainContainer.style.display="none";
  	that.init();
  
}

}
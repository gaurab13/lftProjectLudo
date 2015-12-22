function Homepage(){

var main = document.getElementById("main-wrapper");
var mainboard= document.getElementById("main-container");

this.init = function(){

var start = document.createElement("button");

mainboard.style.display="none";



//dice.style.display="none";



start.setAttribute("class","start");
start.setAttribute("id","start");
start.innerHTML=("Start");
main.appendChild(start);

start.onclick= initiateGame;


}

var initiateGame = function(){
	var start= document.getElementById("start");
	//var dice =document.getElementById("dice1");
	start.style.display="none";
	/*var dice = document.createElement("div");
	dice.setAttribute("class","dice");
	dice.setAttribute("id","dice1");
	main.appendChild("dice");


	dice.style.display="block";*/
	mainboard.style.display="block";
	var board= new Gameboard();
	board.createBoard();
	var g = new CreateGatti();
	g.createGatti();
	var gameLoop = new GameLoop();
	gameLoop.calldice();
}

}
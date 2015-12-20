function Homepage(){

var main = document.getElementById("main-wrapper");
var mainboard= document.getElementById("main-container");

this.init = function(){

var start = document.createElement("button");

mainboard.style.display="none";
start.setAttribute("class","start");
start.innerHTML=("Start");
main.appendChild(start);

start.onclick= initiateGame;


}

var initiateGame = function(){
	mainboard.style.display="block";
	var board= new Gameboard();
	board.createBoard();
	var g = new CreateGatti();
	g.createGatti();
	var gameLoop = new GameLoop();
	gameLoop.calldice();
}

}
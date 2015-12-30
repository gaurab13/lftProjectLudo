function TokenSnake(){
	var board= document.getElementById("s-board");
	/*var sBoard= new SnakeBoard();
	var board = sBoard.board;
*/
	
	this.createToken= function(val){
		var tilewidth=45;
		var count =1;
		var token=[];

		var initPosition = new InitialPosition();
		
	for(var i=0;i<val;i++){
		token[i]= document.createElement("div");
		board.appendChild(token[i]);
		token[i].setAttribute("class","token");
		token[i].style.left= initPosition.initPosSnake.child[i].x*tilewidth+"px";
		token[i].style.top= initPosition.initPosSnake.child[i].y*tilewidth+"px";
		if(i==0){
		token[i].setAttribute("id","red"+1);
		token[i].style.backgroundColor="red";
		}
		else if(i==1){
		token[i].setAttribute("id","green"+1);
		token[i].style.backgroundColor="green";
		}
		else if(i==2){
		token[i].setAttribute("id","yellow"+1);
		token[i].style.backgroundColor="yellow";
		}
		else{
		token[i].setAttribute("id","blue"+1);
		token[i].style.backgroundColor="blue";
		}
		  			
	}

}
}
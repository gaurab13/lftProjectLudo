function SnakeBoard(){
 	var container= document.getElementById("main-container");
	var tilewidth= 45;
	var that= this;
	var board= document.createElement("div");

	board.style.backgroundImage= "url(images/snake3.png)";

	board.setAttribute("class","gameboard");
	board.setAttribute("id","s-board");
	container.style.border="none";
	container.appendChild(board);
	this.createBoard2 = function() {
		

		var arr= [];
		var count=1;
		var i,j=0;
		for (i=0;i<11;i++) {
		arr[i]= new Array();
			for (j=0;j<10;j++) {
		  		arr[i][j]= document.createElement("div");
		  		arr[i][j].setAttribute("class","tiles2");
		  		arr[i][j].innerHTML= count;

		  		arr[i][j].setAttribute("id",count);

		  		//arr[i][j].setAttribute("id","red"+ c1);

		  		arr[i][j].style.left= j*tilewidth + "px";
		  		arr[i][j].style.top= i*tilewidth + "px";
		  	//	arr[i][j].style.backgroundColor= "gray";
		  		board.appendChild(arr[i][j]);
		  		count++;
		  	}
		  }
		}

}
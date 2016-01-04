function SnakeBoard(){
 	var container= document.getElementById("main-container");
	var wrap= document.getElementById("main-wrapper");
	var tilewidth= 45;
	var that= this;
	var board= document.createElement("div");
	board.setAttribute("class","gameboard");
	board.setAttribute("id","s-board");
	container.style.border="none";
	container.appendChild(board);
	
	this.createBoard2 = function() {
		
		wrap.style.backgroundRepeat= "no-repeat";
		wrap.style.backgroundPosition= "center center";
		var arr= [];
		var count=1;
		var index =101;
		var i,j=0;
		for (i=0;i<11;i++) {
		arr[i]= new Array();
			for (j=0;j<10;j++) {
		  		arr[i][j]= document.createElement("div");
		  		arr[i][j].setAttribute("class","tiles2");
		  		arr[i][j].setAttribute("id",count);
		  		if(i % 2==0){
		  			index--;
		  		}
		  		else{
		  			index++;
		  		}
		  		arr[i][j].innerHTML= index;
		  		arr[i][j].style.left= j*tilewidth + "px";
		  		arr[i][j].style.top= i*tilewidth + "px";
		  		if(index%2==0){
		  			arr[i][j].style.backgroundColor= "white";
		  		}
		  		board.appendChild(arr[i][j]);
		  		count++;
		  		if(count>101){
		  			arr[i][j].innerHTML= null;

		  		}
		  	}
		  	if(i%2==0){
		  	index-=11;
		  	}
		  	else{
		  	index-=9;
		  	}
		}

	
	}

}
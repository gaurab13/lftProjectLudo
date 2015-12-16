function Gameboard(){
	
	var board= document.getElementsByClassName("gameboard")[0];
	var tilewidth= 30;
	this.createBoard = function() {
		var arr= [];
		
		var i,j=0;
		for (i=0;i<15;i++) {
		arr[i]= new Array();
			for (j=0;j<15;j++) {
		  		arr[i][j]= document.createElement("div");
		  		arr[i][j].setAttribute("class","tiles");
		  		

		  		//arr[i][j].setAttribute("id","red"+ c1);

		  		arr[i][j].style.left= j*tilewidth + "px";
		  		arr[i][j].style.top= i*tilewidth + "px";
		  		
		  		arr.push(1);
		  		
		  		

		  		board.appendChild(arr[i][j]);

		  		if(i <=5 && j <=5){
		  			arr[i][j].style.backgroundColor= "#FC062F";
		  			

		  		}
		  		if(i<=5 && j >=9){
		  			arr[i][j].style.backgroundColor= "#00d11c";
		  			
		  		}
		  		if(i >=9 && j <=5){
		  			arr[i][j].style.backgroundColor= "#00ad99";
		  		
		  		}
		  		if(i >=9 && j >=9){
		  			arr[i][j].style.backgroundColor= "#fff238";
		  			
		  		}

		  	
		  	

			}
		
	}

}
}
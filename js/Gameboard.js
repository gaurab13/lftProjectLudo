function Gameboard(){
	
	var board= document.getElementsByClassName("gameboard")[0];
	var tilewidth= 30;
	this.createBoard = function() {
		var arr= [];
		var count=1;
		var i,j=0;
		for (i=0;i<15;i++) {
		arr[i]= new Array();
			for (j=0;j<15;j++) {
		  		arr[i][j]= document.createElement("div");
		  		arr[i][j].setAttribute("class","tiles");
		  		//arr[i][j].innerHTML= count;

		  		arr[i][j].setAttribute("id",count);

		  		//arr[i][j].setAttribute("id","red"+ c1);

		  		arr[i][j].style.left= j*tilewidth + "px";
		  		arr[i][j].style.top= i*tilewidth + "px";
		  		
		  		
		  		
		  		

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
		  		if((j>0&&j<=5) && i==7){
		  			arr[i][j].style.backgroundColor= "#FC062F";
		  		}
		  		if((i>0&&i<=5) && j==7){
		  			arr[i][j].style.backgroundColor= "#00d11c";
		  		}
		  		if((i>8&&i<=13) && j==7){
		  			arr[i][j].style.backgroundColor= "#00ad99";
		  		}
		  		if((j>8&&j<=13) && i==7){
		  			arr[i][j].style.backgroundColor= "#fff238";
		  		}

		  		

		  	
		  	count++;

			}
		
	}
	


}
}
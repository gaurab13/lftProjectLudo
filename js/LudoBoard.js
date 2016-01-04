function LudoBoard(){
	var container= document.getElementById("main-container");
	var wrap= document.getElementById("main-wrapper");

	var tilewidth= 30;
	this.createBoard = function() {
		wrap.style.backgroundImage= "url(images/background.png)";
		var board= document.createElement("div");
		board.setAttribute("class","gameboard");
		board.setAttribute("id","l-board");
		container.appendChild(board);
		//wrap.style.backgroundImage= "url(images/green-background.png)";
		var arr= [];
		var count=1;
		var i,j=0;
		for (i=0;i<15;i++) {
			arr[i]= new Array();
				for (j=0;j<15;j++) {
				  		arr[i][j]= document.createElement("div");
				  		arr[i][j].setAttribute("class","tiles");
				  		arr[i][j].setAttribute("id",count);
				  		arr[i][j].style.left= j*tilewidth + "px";
				  		arr[i][j].style.top= i*tilewidth + "px";
				  		arr[i][j].style.backgroundColor= "white";
				  		board.appendChild(arr[i][j]);
				  		//arr[i][j].innerHTML=count;	  		
				  	if(i <=5 && j <=5){
				  			arr[i][j].style.backgroundColor= "white";

				  		}

				  		if(i<=5 && j >=9){
				  			arr[i][j].style.borderStyle="none";
				  			arr[i][j].style.backgroundColor= "white";
				  		}
				  		if(i >=9 && j <=5){
				  			arr[i][j].style.borderStyle="none";
				  			arr[i][j].style.backgroundColor= "white";
				  		}
				  		if(i >=9 && j >=9){
				  			
				  			arr[i][j].style.borderStyle="none";
				  			arr[i][j].style.backgroundColor= "white";
				  		}



				  		if((j>0&&j<=5) && i==7){
				  			arr[i][j].style.backgroundColor= "red";
				  		}
				  		if((i>0&&i<=5) && j==7){
				  			arr[i][j].style.backgroundColor= "green";
				  		}
				  		if((i>8&&i<=13) && j==7){
				  			arr[i][j].style.backgroundColor= "blue";
				  		}
				  		if((j>8&&j<=13) && i==7){
				  			arr[i][j].style.backgroundColor= "yellow";
				  		}
				  		

				  		if((i==6&&j==1)||(i==1&&j==8)||(i==13&&j==6)||(i==8&&j==13)){
				  			arr[i][j].style.backgroundImage= "url(images/star.png)";
				  			arr[i][j].style.backgroundPosition= "center center";
				  			arr[i][j].style.backgroundRepeat= "no-repeat";
				  			if(i==6&&j==1){
				  			arr[i][j].style.backgroundColor= "red";
				  			
				  			}
				  			if(i==1&&j==8){
				  			arr[i][j].style.backgroundColor= "green";
				  			
				  			}
				  			if(i==13&&j==6){
				  			arr[i][j].style.backgroundColor= "blue";
				  			}
				  			if(i==8&&j==13){
				  			arr[i][j].style.backgroundColor= "yellow";
				  			}
				  		}					  	
				  	count++;
					}	
	}
	var outerblock =[];
	var outermost= [];
	var outercircle= [];
	var triangle=[];
	for(var i=1;i<5;i++){
		outerblock[i]= document.createElement("div");
		outerblock[i].setAttribute("class","outer");
		outerblock[i].setAttribute("id","outer"+i);
		board.appendChild(outerblock[i]);

		outermost[i]= document.createElement("div");
		outermost[i].setAttribute("class","outermost");
		outermost[i].setAttribute("id","outermost"+i);
		board.appendChild(outermost[i]);

		outercircle[i]= document.createElement("div");
		outercircle[i].setAttribute("class","outercircle");
		outercircle[i].setAttribute("id","outercircle"+i);
		board.appendChild(outercircle[i]);

		triangle[i]= document.createElement("div");
		triangle[i].setAttribute("class","triangle");
		triangle[i].setAttribute("id","triangle"+i);
		//board.appendChild(triangle[i]);
		
	}
	var home = document.createElement("div");
	home.setAttribute("id","home");
	board.appendChild(home);


	}
}
function LudoBoard(){
	var container= document.getElementById("main-container");
	var tilewidth= 30;
	this.createBoard = function() {
		var board= document.createElement("div");
		board.setAttribute("class","gameboard");
		board.setAttribute("id","l-board");
		container.appendChild(board)

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
				  		arr[i][j].style.backgroundColor= "#white";
				  		board.appendChild(arr[i][j]);
				  		//arr[i][j].innerHTML=count;
				  		
				  		if(i <=5 && j <=5){
				  			arr[i][j].style.backgroundColor= "#87CEFA";
				  		}
				  		if(i<=5 && j >=9){
				  			arr[i][j].style.borderStyle="none";
				  			arr[i][j].style.backgroundColor= "#87CEFA";
				  		}
				  		if(i >=9 && j <=5){
				  			arr[i][j].style.borderStyle="none";
				  			arr[i][j].style.backgroundColor= "#87CEFA";
				  		}
				  		if(i >=9 && j >=9){
				  			
				  			arr[i][j].style.borderStyle="none";
				  			arr[i][j].style.backgroundColor= "#87CEFA";
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
				  			arr[i][j].style.backgroundColor= "#FFFF66";
				  		}
				  		if((i>=6&&i<=8)&&(j>=6&&j<=8)){
				  			arr[i][j].style.backgroundColor= "#87CEFA";
				  		}


				  		if((count==17)||(count==20)||(count==62)||(count==65)){
				  			arr[i][j].style.backgroundColor= "#FC062F";
				  		}

				  		if((count==26)||(count==29)||(count==71)||(count==74)){
				  			arr[i][j].style.backgroundColor= "#00d11c";
				  		}


				  		if((count==152)||(count==155)||(count==197)||(count==200)){
				  			arr[i][j].style.backgroundColor= "#00ad99";
				  		}


				  		if((count==161)||(count==164)||(count==206)||(count==209)){
				  			arr[i][j].style.backgroundColor= "#FFFF66";
				  		}



				  		if((i==6&&j==1)||(i==1&&j==8)||(i==13&&j==6)||(i==8&&j==13)){
				  			arr[i][j].style.backgroundImage= "url(images/star.png)";
				  			arr[i][j].style.backgroundPosition= "center center";
				  			arr[i][j].style.backgroundRepeat= "no-repeat";
				  			if(i==6&&j==1){
				  			arr[i][j].style.backgroundColor= "#FC062F";
				  			}
				  			if(i==1&&j==8){
				  			arr[i][j].style.backgroundColor= "#00d11c";
				  			}
				  			if(i==13&&j==6){
				  			arr[i][j].style.backgroundColor= "#00ad99";
				  			}
				  			if(i==8&&j==13){
				  			arr[i][j].style.backgroundColor= "#FFFF66";
				  			}
				  		}					  	
				  	count++;
					}	
	}
	var outerblock =[];
	for(var i=1;i<5;i++){
		outerblock[i]= document.createElement("div");
		outerblock[i].setAttribute("class","outer");
		outerblock[i].setAttribute("id","outer"+i);
		board.appendChild(outerblock[i]);
	}
	var home = document.createElement("div");
	home.setAttribute("id","home");
	board.appendChild(home);


	}
}
function CreateGatti(){

var board= document.getElementsByClassName("gameboard")[0];
var tilewidth=30;
this.createGatti = function(){

		var gatti= [];
		var c1= c2= c3= c4=1;
		
		var i,j=0;
		for (i=0;i<15;i++) {
		gatti[i]= new Array();
			for (j=0;j<15;j++) {

				if((i==1 && j==1)||(i==1 && j==4)||(i==4 && j==1)||(i==4 && j==4)){
				gatti[i][j]= document.createElement("div");
				gatti[i][j].setAttribute("class","gatti");
				gatti[i][j].setAttribute("id","red"+ c1);
				board.appendChild(gatti[i][j]);
				

				gatti[i][j].style.left=i*tilewidth +"px";
				gatti[i][j].style.top=j*tilewidth +"px";
				gatti[i][j].style.backgroundColor="red";
				c1++;
				}

				if((i==1 && j==10)||(i==4 && j==10)||(i==1 && j==13)||(i==4 && j==13)){
				gatti[i][j]= document.createElement("div");
				gatti[i][j].setAttribute("class","gatti");
				gatti[i][j].setAttribute("id","blue"+c2);
				board.appendChild(gatti[i][j]);
				
				gatti[i][j].style.left=i*tilewidth +"px";
				gatti[i][j].style.top=j*tilewidth +"px";
				gatti[i][j].style.backgroundColor="blue";
				c2++;
				}

				if((i==10 && j==1)||(i==13 && j==1)||(i==10 && j==4)||(i==13 && j==4)){
				gatti[i][j]= document.createElement("div");
				gatti[i][j].setAttribute("class","gatti");
				gatti[i][j].setAttribute("id","green"+c3);
				board.appendChild(gatti[i][j]);
			
				gatti[i][j].style.left=i*tilewidth +"px";
				gatti[i][j].style.top=j*tilewidth +"px";
				gatti[i][j].style.backgroundColor="green";
				c3++;
				}

				if((i==10 && j==10)||(i==13 && j==10)||(i==10 && j==13)||(i==13 && j==13)){
				gatti[i][j]= document.createElement("div");
				gatti[i][j].setAttribute("class","gatti");
				gatti[i][j].setAttribute("id","yellow"+c4);
				board.appendChild(gatti[i][j]);
				
				gatti[i][j].style.left=i*tilewidth +"px";
				gatti[i][j].style.top=j*tilewidth +"px";
				gatti[i][j].style.backgroundColor="yellow";
				c4++;
				}
				
				
			}
		}

	}
}
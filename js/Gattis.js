function CreateGatti(){

var board= document.getElementsByClassName("gameboard")[0];
var tilewidth=30;
this.createGatti = function(){

		var token= [];
		var c1= c2= c3= c4=1;
		var initPosition= new InitialPosition();
		

	for(var i=0;i<16;i++){
		token[i]= document.createElement("div");
		board.appendChild(token[i]);
		token[i].setAttribute("class","token");

		if(i<4){
		token[i].style.left= initPosition.posRed.child[c1-1].x*tilewidth+"px";
		token[i].style.top= initPosition.posRed.child[c1-1].y*tilewidth+"px";
	
		token[i].setAttribute("id","red"+c1);
		token[i].style.backgroundColor="red";
		c1++;
		}
		else if(i<8){
		token[i].style.left= initPosition.posGreen.child[c2-1].x*tilewidth+"px";
		token[i].style.top= initPosition.posGreen.child[c2-1].y*tilewidth+"px";
	
		token[i].setAttribute("id","green"+c2);
		token[i].style.backgroundColor="green";
		c2++;
		}
		else if(i<12){
		token[i].style.left= initPosition.posYellow.child[c3-1].x*tilewidth+"px";
		token[i].style.top= initPosition.posYellow.child[c3-1].y*tilewidth+"px";
	
		token[i].setAttribute("id","yellow"+c3);
		token[i].style.backgroundColor="yellow";
		c3++;
		}
		else{
		token[i].style.left= initPosition.posBlue.child[c4-1].x*tilewidth+"px";
		token[i].style.top= initPosition.posBlue.child[c4-1].y*tilewidth+"px";
	
		token[i].setAttribute("id","blue"+c4);
		token[i].style.backgroundColor="blue";
		c4++;
		}

	}


	

	}
}
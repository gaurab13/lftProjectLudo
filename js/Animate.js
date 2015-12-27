function Animate(element) {

	this.el = element;
	var that = this;
	var tilewidth1=45;
	var tilewidth2=30;
	var initPosition = new InitialPosition();
	var routeno = new Route();
	
this.animate= function(element1,val,step){
	var diceValue= step;
	var value =val;
	var currentcolor= element1.style.backgroundColor;
	if(value==1){		
	var y= parseInt(element1.style.left)/tilewidth1;
	var x= parseInt(element1.style.top)/tilewidth1;
	var upperLimit= 10;
	}
	else{
		var y= parseInt(element1.style.left)/tilewidth2;
		var x= parseInt(element1.style.top)/tilewidth2;
		var upperLimit= 15;
	}
	console.log("current pos is "+ element1.style.top);
	console.log("currentcolor"+ currentcolor);
	console.log("x is : "+ x);
	console.log("y is : "+ y);
	var arr= [];
	var i,j=0;
	var count=1;
		for (i=0;i<upperLimit;i++) {
		arr[i]= new Array();
			for (j=0;j<upperLimit;j++) {
				if(i==x&&j==y){
					if(value==1){
					console.log("inside snakeee");
					
					var index= routeno.pathSnake.indexOf(count);

					if((index+step)<routeno.pathSnake.indexOf(1)){
					var nextindex= routeno.pathSnake[index+1];
					console.log("next point is "+ nextindex + "index was "+index + "count was"+count);
					var tile = document.getElementById(nextindex);
					element1.style.left= parseInt(tile.style.left)+"px";
					element1.style.top= parseInt(tile.style.top)+"px";
						}
					}
					else{
						if (currentcolor=="red"){
							var index= routeno.pathred.indexOf(count);
							var nextindex= routeno.pathred[index+1];
							console.log("next point is "+ nextindex + "count was "+count);
							var tile = document.getElementById(nextindex);
							element1.style.left= parseInt(tile.style.left)+"px";
							element1.style.top= parseInt(tile.style.top)+"px";

						}
						if (currentcolor=="green"){
							var index= routeno.pathgreen.indexOf(count);
							var nextindex= routeno.pathgreen[index+1];
							console.log("next point is "+ nextindex + "count was "+count);
							var tile = document.getElementById(nextindex);
							element1.style.left= parseInt(tile.style.left)+"px";
							element1.style.top= parseInt(tile.style.top)+"px";

						}
						if (currentcolor=="yellow"){
							var index= routeno.pathyellow.indexOf(count);
							var nextindex= routeno.pathyellow[index+1];
							console.log("next point is "+ nextindex + "count was "+count);
							var tile = document.getElementById(nextindex);
							
							element1.style.left= parseInt(tile.style.left)+"px";
							element1.style.top= parseInt(tile.style.top)+"px";

						}
						if (currentcolor=="blue"){
							var index= routeno.pathblue.indexOf(count);
							var nextindex= routeno.pathblue[index+1];
							console.log("next point is "+ nextindex + "count was "+count);
							var tile = document.getElementById(nextindex);
							
							element1.style.left= parseInt(tile.style.left)+"px";
							element1.style.top= parseInt(tile.style.top)+"px";

						}
					}

						}		
				count++;
	
				
				
				
			}
		}



}
this.hittestForRed=function(element2,num){
	if(element2.style.backgroundColor!="red"){
		var left = parseInt(element2.style.left);
		var top = parseInt(element2.style.top);
		/*var tempx= left/tilewidth;
		var tempy= top/tilewidth; */
		console.log(left+":"+top);
	
	for(var k=1;k<num+1;k++){
		var testSubject= document.getElementById("red"+k);
		var testLeft= parseInt(testSubject.style.left);
		var testTop= parseInt(testSubject.style.top);
		
		console.log(testLeft+":"+testTop);
		if((left==testLeft)&&(top==testTop)){
			console.log("HITTT");
			if(num==1){
			var initx = initPosition.initPosSnake.child[0].x;
			var inity = initPosition.initPosSnake.child[0].y;
			testSubject.style.left= initx*tilewidth1 + "px";
			testSubject.style.top= inity*tilewidth1 + "px";
			}
			else{
			var initx = initPosition.posRed.child[k-1].x;
			var inity = initPosition.posRed.child[k-1].y;
			testSubject.style.left= initx*tilewidth2 + "px";
			testSubject.style.top= inity*tilewidth2 + "px";
			}
			
			return k;
			//gatti.setPassive("red",k);
		}

		}
		return 0;

	}
	else{
		console.log("hereeeee in outer else");
		return 0;
	}	

}
this.hittestForBlue=function(element2,num){
	if(element2.style.backgroundColor!="blue"){
		var left = parseInt(element2.style.left);
		var top = parseInt(element2.style.top);
		console.log(left+":"+top);

	for(var k=1;k<num+1;k++){
		var testSubject= document.getElementById("blue"+k);
		var testLeft= parseInt(testSubject.style.left);
		var testTop= parseInt(testSubject.style.top);
		console.log(testLeft+":"+testTop);
		if((left==testLeft)&&(top==testTop)){
			console.log("HITTT");
			if(num==1){
			var initx = initPosition.initPosSnake.child[3].x;
			var inity = initPosition.initPosSnake.child[3].y;
			testSubject.style.left= initx*tilewidth1 + "px";
			testSubject.style.top= inity*tilewidth1 + "px";
			}
			else{
			var initx = initPosition.posBlue.child[k-1].x;
			var inity = initPosition.posBlue.child[k-1].y;
			testSubject.style.left= initx*tilewidth2 + "px";
			testSubject.style.top= inity*tilewidth2 + "px";
			}
			//console.log("value of initx:" +initx);
		
			return k;
			//gatti.setPassive("blue",k);
		}
	
		}
		return 0;	
	}
	else{
		console.log("hereeeee in outer else");
	return 0;	
}
}
this.hittestForGreen=function(element2,num){
	if(element2.style.backgroundColor!="green"){
		var left = parseInt(element2.style.left);
		var top = parseInt(element2.style.top);
		console.log(left+":"+top);
	for(var k=1;k<num+1;k++){
		var testSubject= document.getElementById("green"+k);
		var testLeft= parseInt(testSubject.style.left);
		var testTop= parseInt(testSubject.style.top);
			console.log(testLeft+":"+testTop);
		if((left==testLeft)&&(top==testTop)){
			console.log("HITTT");
			if(num==1){
			var initx = initPosition.initPosSnake.child[1].x;
			var inity = initPosition.initPosSnake.child[1].y;
			testSubject.style.left= initx*tilewidth1 + "px";
			testSubject.style.top= inity*tilewidth2 + "px";

			}
			else{
			var initx = initPosition.posGreen.child[k-1].x;
			var inity = initPosition.posGreen.child[k-1].y;
			testSubject.style.left= initx*tilewidth2 + "px";
			testSubject.style.top= inity*tilewidth2 + "px";
			}
			console.log("value of initx:" +initx);
			//gatti.setPassive("green",k);
			return k;
		}
		
		
		}	
		return 0;
	}
	else{
		console.log("hereeeee in outer else");
		return 0;
		
	}	

}
this.hittestForYellow=function(element2,num){
	if(element2.style.backgroundColor!="yellow"){
		var left = parseInt(element2.style.left);
		var top = parseInt(element2.style.top);
			console.log(left+":"+top);
	for(var k=1;k<num+1;k++){
		var testSubject= document.getElementById("yellow"+k);
		var testLeft= parseInt(testSubject.style.left);
		var testTop= parseInt(testSubject.style.top);
			console.log(testLeft+":"+testTop);
		if((left==testLeft)&&(top==testTop)){
			console.log("HITTT");
			if(num==1){
				var initx = initPosition.initPosSnake.child[2].x;
				var inity = initPosition.initPosSnake.child[2].y;
				testSubject.style.left= initx*tilewidth1 + "px";
				testSubject.style.top= inity*tilewidth1 + "px";
			}
			else{
				var initx = initPosition.posYellow.child[k-1].x;
				var inity = initPosition.posYellow.child[k-1].y;
				testSubject.style.left= initx*tilewidth2 + "px";
				testSubject.style.top= inity*tilewidth2 + "px";
			}
			console.log("value of initx:" +initx);
			
			return k;
			//gatti.setPassive("yellow",k);

		}
		
		}	
		return 0;
	}	
	else{
		console.log("hereeeee in outer else");
		return 0;
	}

}





}
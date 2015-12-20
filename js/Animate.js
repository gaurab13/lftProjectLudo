function Animate(element) {

	this.el = element;
	var that = this;
	var tilewidth=30;
	var initPosition = new InitialPosition();
	
this.animate= function(element1,val){
	var value =val;
	var currentcolor= element1.style.backgroundColor;		
	var y= parseInt(element1.style.left)/tilewidth;
	var x= parseInt(element1.style.top)/tilewidth;
	console.log("current pos is "+ element1.style.top);
	console.log("currentcolor"+ currentcolor);
	console.log("x is : "+ x);
	console.log("y is : "+ y);
	var arr= [];
	var i,j=0;
	var count=1;
		for (i=0;i<15;i++) {
		arr[i]= new Array();
			for (j=0;j<15;j++) {
				if(i==x&&j==y){
					var routeno = new Route();
						if (currentcolor=="red"){
							var index= routeno.pathred.indexOf(count);
							var nextindex= routeno.pathred[index+1];
							console.log("next point is "+ nextindex + "count was "+count);
							var tile = document.getElementById(nextindex);
							var prevTile= document.getElementById(count);
							element1.style.left= parseInt(tile.style.left)+"px";
							element1.style.top= parseInt(tile.style.top)+"px";
							//prevTile.style.backgroundColor="gray";
							//tile.style.backgroundColor="purple";
						}
						if (currentcolor=="green"){
							var index= routeno.pathgreen.indexOf(count);
							var nextindex= routeno.pathgreen[index+1];
							console.log("next point is "+ nextindex + "count was "+count);
							var tile = document.getElementById(nextindex);
							
							element1.style.left= parseInt(tile.style.left)+"px";
							element1.style.top= parseInt(tile.style.top)+"px";
							var prevTile= document.getElementById(count);
							//prevTile.style.backgroundColor="gray";
							//tile.style.backgroundColor="purple";

						}
						if (currentcolor=="yellow"){
							var index= routeno.pathyellow.indexOf(count);
							var nextindex= routeno.pathyellow[index+1];
							console.log("next point is "+ nextindex + "count was "+count);
							var tile = document.getElementById(nextindex);
							
							element1.style.left= parseInt(tile.style.left)+"px";
							element1.style.top= parseInt(tile.style.top)+"px";
							var prevTile= document.getElementById(count);
							//prevTile.style.backgroundColor="gray";
							//tile.style.backgroundColor="purple";

						}
						if (currentcolor=="blue"){
							var index= routeno.pathblue.indexOf(count);
							var nextindex= routeno.pathblue[index+1];
							console.log("next point is "+ nextindex + "count was "+count);
							var tile = document.getElementById(nextindex);
							
							element1.style.left= parseInt(tile.style.left)+"px";
							element1.style.top= parseInt(tile.style.top)+"px";
							var prevTile= document.getElementById(count);
							//prevTile.style.backgroundColor="gray";
							//tile.style.backgroundColor="purple";

						}


				}
				
					count++;
				
			}
		}



}
this.hittestForRed=function(element2){
	if(element2.style.backgroundColor!="red"){
		var left = parseInt(element2.style.left);
		var top = parseInt(element2.style.top);
		console.log(left+":"+top);
	for(var k=1;k<5;k++){
		var testSubject= document.getElementById("red"+k);
		var testLeft= parseInt(testSubject.style.left);
		var testTop= parseInt(testSubject.style.top);
		console.log(testLeft+":"+testTop);
		if((left==testLeft)&&(top==testTop)){
			console.log("HITTT");
			var initx = initPosition.posRed.child[k-1].x;
			var inity = initPosition.posRed.child[k-1].y;
			testSubject.style.left= initx*30 + "px";
			console.log("value of initx:" +initx);
			testSubject.style.top= inity*30 + "px";
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
this.hittestForBlue=function(element2){
	if(element2.style.backgroundColor!="blue"){
		var left = parseInt(element2.style.left);
		var top = parseInt(element2.style.top);
		console.log(left+":"+top);

	for(var k=1;k<5;k++){
		var testSubject= document.getElementById("blue"+k);
		var testLeft= parseInt(testSubject.style.left);
		var testTop= parseInt(testSubject.style.top);
		console.log(testLeft+":"+testTop);
		if((left==testLeft)&&(top==testTop)){
			console.log("HITTT");
			var initx = initPosition.posBlue.child[k-1].x;
			var inity = initPosition.posBlue.child[k-1].y;
			console.log("value of initx:" +initx);
			testSubject.style.left= initx*30 + "px";
			testSubject.style.top= inity*30 + "px";
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
this.hittestForGreen=function(element2){
	if(element2.style.backgroundColor!="green"){
		var left = parseInt(element2.style.left);
		var top = parseInt(element2.style.top);
		console.log(left+":"+top);
	for(var k=1;k<5;k++){
		var testSubject= document.getElementById("green"+k);
		var testLeft= parseInt(testSubject.style.left);
		var testTop= parseInt(testSubject.style.top);
			console.log(testLeft+":"+testTop);
		if((left==testLeft)&&(top==testTop)){
			console.log("HITTT");
			var initx = initPosition.posGreen.child[k-1].x;
			var inity = initPosition.posGreen.child[k-1].y;
			console.log("value of initx:" +initx);
			testSubject.style.left= initx*30 + "px";
			testSubject.style.top= inity*30 + "px";
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
this.hittestForYellow=function(element2){
	if(element2.style.backgroundColor!="yellow"){
		var left = parseInt(element2.style.left);
		var top = parseInt(element2.style.top);
			console.log(left+":"+top);
	for(var k=1;k<5;k++){
		var testSubject= document.getElementById("yellow"+k);
		var testLeft= parseInt(testSubject.style.left);
		var testTop= parseInt(testSubject.style.top);
			console.log(testLeft+":"+testTop);
		if((left==testLeft)&&(top==testTop)){
			console.log("HITTT");
			var initx = initPosition.posYellow.child[k-1].x;
			var inity = initPosition.posYellow.child[k-1].y;
			console.log("value of initx:" +initx);
			testSubject.style.left= initx*30 + "px";
			testSubject.style.top= inity*30 + "px";
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
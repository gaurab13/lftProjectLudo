function Animate(element) {

	this.el = element;
	var that = this;
	var tilewidth=30;
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
							var board = document.getElementById(nextindex);
							element1.style.left= parseInt(board.style.left)+"px";
							element1.style.top= parseInt(board.style.top)+"px";

						}
						if (currentcolor=="green"){
							var index= routeno.pathgreen.indexOf(count);
							var nextindex= routeno.pathgreen[index+1];
							console.log("next point is "+ nextindex + "count was "+count);
							var board = document.getElementById(nextindex);
							element1.style.left= parseInt(board.style.left)+"px";
							element1.style.top= parseInt(board.style.top)+"px";

						}
						if (currentcolor=="yellow"){
							var index= routeno.pathyellow.indexOf(count);
							var nextindex= routeno.pathyellow[index+1];
							console.log("next point is "+ nextindex + "count was "+count);
							var board = document.getElementById(nextindex);
							element1.style.left= parseInt(board.style.left)+"px";
							element1.style.top= parseInt(board.style.top)+"px";

						}
						if (currentcolor=="blue"){
							var index= routeno.pathblue.indexOf(count);
							var nextindex= routeno.pathblue[index+1];
							console.log("next point is "+ nextindex + "count was "+count);
							var board = document.getElementById(nextindex);
							element1.style.left= parseInt(board.style.left)+"px";
							element1.style.top= parseInt(board.style.top)+"px";

						}


				}
				
					count++;
				
			}
		}



}
	/*this.animate = function(currentPos, step) {
		var pixeltomove= step*30 + currentPos;
		
		var intervalId= setInterval(function(){
			currentPos+=30;
			element.style.left= currentPos + "px";

			if(currentPos>= pixeltomove){
				clearInterval(intervalId);
			}

		},500);

	}*/
}
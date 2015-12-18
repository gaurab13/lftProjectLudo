function Gatti(){
	

	var board= document.getElementsByClassName("gameboard")[0];
	var that= this;
	var tilewidth=30;
	var step=0;
	
	var controlflag =0;
	var redgatti = {
			child: [{
				license: 0,
				outflag: 0	
				},
				{
				license: 0,
				outflag: 0	
				},
				{
				license: 0,
				outflag: 0	
				},
				{
				license: 0,
				outflag: 0	
				}]
		}
	var greengatti = {
				 child: [{
				 license: 0,
				outflag: 0
				},
				{
				license: 0,
				outflag: 0	
				},
				{
				license: 0,
				outflag: 0	
				},
				{
				license: 0,
				outflag: 0	
				}]

		}
	var bluegatti = {
				child: [{
				license: 0,
				outflag: 0
				},
				{
				license: 0,
				outflag: 0	
				},
				{
				license: 0,
				outflag: 0	
				},
				{
				license: 0,
				outflag: 0	
				}]

		}
	var yellowgatti = {
				child: [{
				license: 0,
				outflag: 0
				},
				{
				license: 0,
				outflag: 0	
				},
				{
				license: 0,
				outflag: 0	
				},
				{
				license: 0,
				outflag: 0	
				}]

		}

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

this.calldice= function(){
		var dice= document.getElementsByClassName("dice")[0];
		
		console.log("ROLL THE DICE!!!");
		//controlflag++;
		dice.addEventListener('click',function(event){
				
				

				   rolldice();

				});
		
}



		function rolldice(){
			var gatti=[];
			
			if (controlflag==4){
				controlflag=0;
				
			}
			controlflag++;
			var active = loop();
		 	step = getrandom();
			console.log("you have got: " +step);
			console.log("current active gatti is: " + active);
				if (step==1 ||step==6||step==4){
				for (var i=1;i<5;i++){
				gatti[i] = document.getElementById(active+i);
				// console.log("value of k is: " +k);
				
				gatti[i].style.borderColor= "white";
				if(controlflag==1){
					redgatti.child[i-1].license=1;

				}
				else if(controlflag==2){
					greengatti.child[i-1].license=1;
				}
				else if(controlflag==3){
					yellowgatti.child[i-1].license=1;
				}
				else{
					bluegatti.child[i-1].license=1;
				}

				}
			}
			else{
				for(var i=1;i<5;i++){
				gatti[i] = document.getElementById(active+i);

				if(controlflag==1){
					if(redgatti.child[i-1].outflag==1){
						redgatti.child[i-1].license=1;
						gatti[i].style.borderColor= "white";
					}
				}
				if(controlflag==2){
					if(greengatti.child[i-1].outflag==1){
						greengatti.child[i-1].license=1;
						gatti[i].style.borderColor= "white";
					}
				}
				if(controlflag==3){
					if(yellowgatti.child[i-1].outflag==1){
						yellowgatti.child[i-1].license=1;
						gatti[i].style.borderColor= "white";
					}
				}
				if(controlflag==4){
					if(bluegatti.child[i-1].outflag==1){
						bluegatti.child[i-1].license=1;
						gatti[i].style.borderColor= "white";
					}
				}

				}

			}
			

			document.getElementById(active+1).onclick= replyClick;
			document.getElementById(active+2).onclick= replyClick;
			document.getElementById(active+3).onclick= replyClick;
			document.getElementById(active+4).onclick= replyClick;
			
			
		}

		var replyClick= function(){
				//alert("Button clicked, id "+this.id);
				var currentid = this.id;
				var length = currentid.length;
				var index = currentid.charAt(length-1);
				console.log("the number is : "+ index);
				var clicked = document.getElementById(currentid);
				var clickedcolor= clicked.style.backgroundColor;
		if(clickedcolor=="red"){
			if (redgatti.child[index-1].license==1){
				if(redgatti.child[index-1].outflag==0){				
				movegattiout(clicked,index);
				redgatti.child[index-1].license=0;	
				}
				else{
				movegatti(clicked,index);
				redgatti.child[index-1].license=0;	
				}
				for(var i=0;i<4;i++){
						if(i!=index-1){
						redgatti.child[i].license=0;
						var ntclickedid= clickedcolor+(i+1);
						
						var ntclicked= document.getElementById(ntclickedid);
						ntclicked.style.borderColor="black";
						}
					}				
			}
		}

		if(clickedcolor=="green"){
			if (greengatti.child[index-1].license==1){
				if(greengatti.child[index-1].outflag==0){
				movegattiout(clicked,index);
				greengatti.child[index-1].license==0;
				}
				else{
				movegatti(clicked,index);
				redgatti.child[index-1].license=0;	
				}
				for(var i=0;i<4;i++){
					if(i!=index-1){
						greengatti.child[i].license=0;
						var ntclickedid= clickedcolor+(i+1);
						
						var ntclicked= document.getElementById(ntclickedid);
						ntclicked.style.borderColor="black";
						}
					}
	
				}

			}


		if(clickedcolor=="yellow"){
			if (yellowgatti.child[index-1].license==1){
				if(yellowgatti.child[index-1].outflag==0){
				movegattiout(clicked,index);
				yellowgatti.child[index-1].license==0;
				}
				else{
				movegatti(clicked,index);
				redgatti.child[index-1].license=0;	
				}
				for(var i=0;i<4;i++){
					if(i!=index-1){
						yellowgatti.child[i].license=0;
						var ntclickedid= clickedcolor+(i+1);
						
						var ntclicked= document.getElementById(ntclickedid);
						ntclicked.style.borderColor="black";
						}
					}
	
				}

			}


		if(clickedcolor=="blue"){
			if (bluegatti.child[index-1].license==1){
				if(bluegatti.child[index-1].outflag==0){
				movegattiout(clicked,index);
				bluegatti.child[index-1].license==0;
				}
				else{
				movegatti(clicked,index);
				redgatti.child[index-1].license=0;	
				}
				for(var i=0;i<4;i++){
					if(i!=index-1){
						bluegatti.child[i].license=0;
						var ntclickedid= clickedcolor+(i+1);
						
						var ntclicked= document.getElementById(ntclickedid);
						ntclicked.style.borderColor="black";
						}
					}
	
				}

			}
			
		}

		function loop(){
				if (controlflag==1){
					var active= "red";
				}
				if (controlflag==2){
					var active= "green";
				}
				if (controlflag==4){
					var active= "blue";
				}
				if (controlflag==3){
					var active= "yellow";
				}


			return active;
		}
			
	var movegattiout = function(element,value){
			this.element= element;
			this.pos=value;
			/*this.control= control;*/
			
			if (element.style.backgroundColor=="red"){
				redgatti.child[pos-1].outflag=1;
				element.style.left=tilewidth*1 + "px";
				element.style.top=tilewidth*6 + "px";

			}
			if (element.style.backgroundColor=="green"){
				greengatti.child[pos-1].outflag=1;
				element.style.left=tilewidth*8 + "px";
				element.style.top=tilewidth*1 + "px";
			}
			if (element.style.backgroundColor=="blue"){
				bluegatti.child[pos-1].outflag=1;
				element.style.left=tilewidth*6 + "px";
				element.style.top=tilewidth*13 + "px";
			}
			if (element.style.backgroundColor=="yellow"){
				yellowgatti.child[pos-1].outflag=1;
				element.style.left=tilewidth*13 + "px";
				element.style.top=tilewidth*8 + "px";
			}

			console.log("player out");
			// /controlflag++;
			element.style.borderColor="black";
			console.log("the current controlflag was: "+ controlflag);
		
	}


	
	var movegatti = function(element,value){

		this.element=element;
		this.val= value;
		var currentstep = 1;
		console.log("i want to move " +step+ " steps");

		var intervalid = setInterval(function(){
			var a = new Animate(board);
			a.animate(element,val);
			currentstep++;
			if(currentstep==step+1){
				clearInterval(intervalid);
			}
		},500);

		element.style.borderColor="black";
		
		
	}

	var getrandom= function(){
		return Math.floor(Math.random() * (6 - 1) + 1);
	}

}
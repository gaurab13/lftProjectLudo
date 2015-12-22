function GameLoop(){
	

	var board= document.getElementsByClassName("gameboard")[0];
	var that= this;
	var tilewidth=30;
	var step=0;
	var indicatorflag=0;
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

	

this.calldice= function(){
		//var dice= document.getElementsByClassName("dice")[0];
		var dice = document.getElementById("dice");
		dice.style.backgroundImage="url('images/one.png')";
		


		console.log("ROLL THE DICE!!!");
		
		showactive(controlflag);

		//controlflag++;
		dice.addEventListener('click',function(event){
			var initial=1;
			
				var intervalid1 = setInterval(function(){
					if(initial%6==1){
						dice.style.backgroundImage="url('images/one.png')";
					}
					else if(initial%6==2){
						dice.style.backgroundImage="url('images/two.png')";
					}
					else if(initial%6==3){
						dice.style.backgroundImage="url('images/three.png')";
					}
					else if(initial%6==4){
						dice.style.backgroundImage="url('images/four.png')";
					}
					else if(initial%6==5){
						dice.style.backgroundImage="url('images/five.png')";
					}
					else if(initial%6==0){
						dice.style.backgroundImage="url('images/six.png')";
					}

					initial++;

					if (initial>=20){
						clearInterval(intervalid1);
						 rolldice(dice);

					}

				},50);



				  

				});
		
}



		function rolldice(dice){
			var gatti=[];
			
			if (controlflag==4){
				controlflag=0;
				
			}

			controlflag++;
			var active = loop();
		 	step = getrandom();
		 
	 			if(step==1){
						dice.style.backgroundImage="url('images/one.png')";
					}
				if(step==2){
						dice.style.backgroundImage="url('images/two.png')";
					}
				if(step==3){
						dice.style.backgroundImage="url('images/three.png')";
					}
				if(step==4){
						dice.style.backgroundImage="url('images/four.png')";
					}
				if(step==5){
						dice.style.backgroundImage="url('images/five.png')";
					}
				if(step==6){
						dice.style.backgroundImage="url('images/six.png')";
					}

			
		 
			console.log("you have got: " +step);
			console.log("current active gatti is: " + active);

				if (step==1||step==6){
				for (var i=1;i<5;i++){
				gatti[i] = document.getElementById(active+i);
				// console.log("value of k is: " +k);
				
				gatti[i].style.borderColor= "white";
				
				gatti[i].style.zIndex= "2";

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
						gatti[i].style.zIndex= "2";
						indicatorflag=1;
					}
					
				}
				else if(controlflag==2){
					if(greengatti.child[i-1].outflag==1){
						greengatti.child[i-1].license=1;
						gatti[i].style.borderColor= "white";
						gatti[i].style.zIndex= "2";
						indicatorflag=1;
					}
					
				}
				else if(controlflag==3){
					if(yellowgatti.child[i-1].outflag==1){
						yellowgatti.child[i-1].license=1;
						gatti[i].style.borderColor= "white";
						gatti[i].style.zIndex= "2";
						indicatorflag=1;
					}
					
				}
				else if(controlflag==4){
					if(bluegatti.child[i-1].outflag==1){
						bluegatti.child[i-1].license=1;
						gatti[i].style.borderColor= "white";
						gatti[i].style.zIndex= "2";
						indicatorflag=1;
					}
					
				}

				}
				if(indicatorflag==0){
					showactive();
				}
				else{
					indicatorflag=0;
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
						ntclicked.style.zIndex= "1";
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
						ntclicked.style.zIndex= "1";
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
						ntclicked.style.zIndex= "1";
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
						ntclicked.style.zIndex= "1";
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
			if(step==1||step==6||step==3){
			controlflag--;
			console.log("your move again");
			}
	showactive();

			//that.calldice();

	
	}




	
	var movegatti = function(element,value){

		this.element=element;
		this.val= value;
		var currentstep = 1;
		console.log("i want to move " +step+ " steps");

		var intervalid = setInterval(function(){

			
			var a = new Animate(board);
			a.animate(element,step);
			currentstep++;
			if(currentstep==step+1){
				clearInterval(intervalid);
				
				
			var temp1 = a.hittestForRed(element);
			console.log("direct here"+temp1);
			if(temp1!=0){
			redgatti.child[temp1-1].outflag=0;
			redgatti.child[temp1-1].license=0;
			}
			var temp2 =	a.hittestForBlue(element);
			console.log("direct here"+temp2);
			if(temp2!=0){
			bluegatti.child[temp2-1].outflag=0;
			bluegatti.child[temp2-1].license=0;
			}
			var temp3 = a.hittestForGreen(element);
			console.log("direct here"+temp3);
			if(temp3!=0){
			greengatti.child[temp3-1].outflag=0;
			greengatti.child[temp3-1].license=0;
			}
			var temp4 =	a.hittestForYellow(element);
			if(temp4!=0){
			yellowgatti.child[temp4-1].outflag=0;
			yellowgatti.child[temp4-1].license=0;
			}
			console.log("direct here"+temp4);
			
				if(step==1||step==6){
					controlflag--;
					console.log("your move again");
				}
				showactive();

			}
		},200);
	
		element.style.borderColor="black";
		element.style.zIndex= "1";
		//that.calldice();
		//showactive(controlflag);
		
	}
	var showactive= function(){
		console.log("inside indicator when control flag is "+ controlflag);
		var activeindicator= controlflag+1;
		var indicator1= document.getElementById("indicator1");
		var outer1= document.getElementById("outer1");
		var outer2= document.getElementById("outer2");
		var outer3= document.getElementById("outer3");
		var outer4= document.getElementById("outer4");
		if(activeindicator==1){
			outer3.style.borderColor="#87CEFA";
			outer1.style.borderColor="red";
			indicator1.style.backgroundColor="red";
		}
		else if(activeindicator==2){
			outer1.style.borderColor="#87CEFA";
			outer2.style.borderColor="green";
			indicator1.style.backgroundColor="green";
		}
		else if(activeindicator==3){
			outer2.style.borderColor="#87CEFA";
			indicator1.style.backgroundColor="yellow";
			outer4.style.borderColor="yellow";
		}
		else if(activeindicator==4){
			outer4.style.borderColor="#87CEFA";
			indicator1.style.backgroundColor="blue";
			outer3.style.borderColor="blue";
		}
		else{	
			outer3.style.borderColor="#87CEFA";
			indicator1.style.backgroundColor="red";
			outer1.style.borderColor="red";
		}
	}

	var getrandom= function(){
		return Math.floor(Math.random() * (7 - 1) + 1);
	}



}
function LudoLoop(){
	var board= document.getElementsByClassName("gameboard")[0];
	var that= this;
	var tilewidth1=45;
	var tilewidth2=30;
	var step=0;
	var indicatorflag=0;
	var controlflag =0;
	var number=0;
	var number2=0;
	var flag= new Flags();
	var toggle= 1;
	
	this.calldice= function(noOfPlayers,noOfTokens){
		var dice = document.getElementById("dice");
		dice.style.backgroundImage="url('images/one.png')";
		number= noOfPlayers;
		number2= noOfTokens;
		console.log("number of players"+ number);
		console.log("ROLL THE DICE!!!");
		var audio= document.getElementById("audio1");
		
		if(number2==4){
			showactive();
		}	
		dice.addEventListener('click',function(event){
			var initial=1;
			audio.play();
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
		var token=[];
		var elem= [];
		
		if (controlflag==number){
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

			if (step==1||step==6){
			for (var i=1;i<number2+1;i++){
			token[i] = document.getElementById(active+i);
			token[i].style.borderColor= "white";
			token[i].style.zIndex= "2";

			if(controlflag==1){
				flag.redToken.child[i-1].license=1;

			}
			else if(controlflag==2){
				if(number==2){
				flag.yellowToken.child[i-1].license=1;
				}
				else{
				flag.greenToken.child[i-1].license=1;	
				}
			}
			else if(controlflag==3){
				flag.yellowToken.child[i-1].license=1;
			}
			else{
				flag.blueToken.child[i-1].license=1;
			}

			}
		}
		else{
			for(var i=1;i<number2+1;i++){
			token[i] = document.getElementById(active+i);

			if(controlflag==1){
				if(flag.redToken.child[i-1].outflag==1){
					flag.redToken.child[i-1].license=1;
					token[i].style.borderColor= "white";
					token[i].style.zIndex= "2";
					indicatorflag=1;
				}
				
			}
			else if(controlflag==2){
				if(number==2){
					if(flag.yellowToken.child[i-1].outflag==1){
					flag.yellowToken.child[i-1].license=1;
					token[i].style.borderColor= "white";
					token[i].style.zIndex= "2";
					indicatorflag=1;
					}
				}
				else{
					if(flag.greenToken.child[i-1].outflag==1){
					flag.greenToken.child[i-1].license=1;
					token[i].style.borderColor= "white";
					token[i].style.zIndex= "2";
					indicatorflag=1;
					}
				}
				}					
			
			else if(controlflag==3){
				if(flag.yellowToken.child[i-1].outflag==1){
					flag.yellowToken.child[i-1].license=1;
					token[i].style.borderColor= "white";
					token[i].style.zIndex= "2";
					indicatorflag=1;
				}
				
			}
			else if(controlflag==4){
				if(flag.blueToken.child[i-1].outflag==1){
					flag.blueToken.child[i-1].license=1;
					token[i].style.borderColor= "white";
					token[i].style.zIndex= "2";
					indicatorflag=1;
				}
				
			}

			}
			if((number2==4)&&(indicatorflag==0)){
				showactive();
			}
			else{
				indicatorflag=0;
			}

		}
		
		if(number2==1){
			document.getElementById(active+1).onclick= replyClick;
		}
		else{
		document.getElementById(active+1).onclick= replyClick;
		document.getElementById(active+2).onclick= replyClick;
		document.getElementById(active+3).onclick= replyClick;
		document.getElementById(active+4).onclick= replyClick;
		}
		
	}

	var replyClick= function(){	
		var currentid = this.id;
		var length = currentid.length;
		var index = currentid.charAt(length-1);
		var clicked = document.getElementById(currentid);
		var clickedcolor= clicked.style.backgroundColor;
		if(clickedcolor=="red"){
			if(controlflag==1){
				if (flag.redToken.child[index-1].license==1){
					if(flag.redToken.child[index-1].outflag==0){				
						movetokenout(clicked,index);
						flag.redToken.child[index-1].license=0;	
					}
					else{
						movetoken(clicked,index);
						flag.redToken.child[index-1].license=0;	
					}
					for(var i=0;i<number2;i++){
						if(i!=index-1){
							flag.redToken.child[i].license=0;
							var ntclickedid= clickedcolor+(i+1);
							
							var ntclicked= document.getElementById(ntclickedid);
							ntclicked.style.borderColor="black";
							ntclicked.style.zIndex= "1";
						}
					}				
				}
			}
		}

		if(clickedcolor=="green"){
			if(controlflag==2){
				if (flag.greenToken.child[index-1].license==1){
					if(flag.greenToken.child[index-1].outflag==0){
						movetokenout(clicked,index);
						flag.greenToken.child[index-1].license==0;
					}
					else{
						movetoken(clicked,index);
						flag.redToken.child[index-1].license=0;	
					}
					for(var i=0;i<number2;i++){
						if(i!=index-1){
							flag.greenToken.child[i].license=0;
							var ntclickedid= clickedcolor+(i+1);
							
							var ntclicked= document.getElementById(ntclickedid);
							ntclicked.style.borderColor="black";
							ntclicked.style.zIndex= "1";
						}
					}

				}
			}
		}


		if(clickedcolor=="yellow"){
			if((controlflag==3)||((controlflag=2)&&(number=2))){
				if (flag.yellowToken.child[index-1].license==1){
					if(flag.yellowToken.child[index-1].outflag==0){
						movetokenout(clicked,index);
						flag.yellowToken.child[index-1].license==0;
					}
					else{
						movetoken(clicked,index);
						flag.redToken.child[index-1].license=0;	
					}
					for(var i=0;i<number2;i++){
						if(i!=index-1){
							flag.yellowToken.child[i].license=0;
							var ntclickedid= clickedcolor+(i+1);
							
							var ntclicked= document.getElementById(ntclickedid);
							ntclicked.style.borderColor="black";
							ntclicked.style.zIndex= "1";
						}
					}

				}

			}
		}

		if(clickedcolor=="blue"){
			if(controlflag==4){
				if (flag.blueToken.child[index-1].license==1){
					if(flag.blueToken.child[index-1].outflag==0){
						movetokenout(clicked,index);
						flag.blueToken.child[index-1].license==0;
					}
					else{
						movetoken(clicked,index);
						flag.redToken.child[index-1].license=0;	
					}
					for(var i=0;i<number2;i++){
						if(i!=index-1){
							flag.blueToken.child[i].license=0;
							var ntclickedid= clickedcolor+(i+1);
							
							var ntclicked= document.getElementById(ntclickedid);
							ntclicked.style.borderColor="black";
							ntclicked.style.zIndex= "1";
						}
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
			if(number==2){
				var active= "yellow";
			}
			else{
				var active= "green";
			}
		}
		if (controlflag==4){
			var active= "blue";
		}
		if (controlflag==3){
			var active= "yellow";
		}


		return active;
	}
			
	var movetokenout = function(element,value){
			this.element= element;
			this.pos=value;
			/*this.control= control;*/
			if(number2==4){
				console.log("shouldnt be here");
			if (element.style.backgroundColor=="red"){
				flag.redToken.child[pos-1].outflag=1;
				element.style.left=tilewidth2*1 + "px";
				element.style.top=tilewidth2*6 + "px";

			}
			if (element.style.backgroundColor=="green"){
				flag.greenToken.child[pos-1].outflag=1;
				element.style.left=tilewidth2*8 + "px";
				element.style.top=tilewidth2*1 + "px";
			}
			if (element.style.backgroundColor=="blue"){
				flag.blueToken.child[pos-1].outflag=1;
				element.style.left=tilewidth2*6 + "px";
				element.style.top=tilewidth2*13 + "px";
			}
			if (element.style.backgroundColor=="yellow"){
				flag.yellowToken.child[pos-1].outflag=1;
				element.style.left=tilewidth2*13 + "px";
				element.style.top=tilewidth2*8 + "px";
			}
		}
		else{
			console.log("inside snakes here");
			if (element.style.backgroundColor=="red"){
				flag.redToken.child[pos-1].outflag=1;
			}
			if (element.style.backgroundColor=="green"){
				flag.greenToken.child[pos-1].outflag=1;
			}
			if (element.style.backgroundColor=="blue"){
				flag.blueToken.child[pos-1].outflag=1;
			}
			if (element.style.backgroundColor=="yellow"){
				flag.yellowToken.child[pos-1].outflag=1;
			}
			element.style.left=tilewidth1*0 + "px";
			element.style.top=tilewidth1*9 + "px";
		}

			console.log("player out");
			// /controlflag++;
			element.style.borderColor="black";
			console.log("the current controlflag was: "+ controlflag);
			if(step==1||step==6){
			controlflag--;
			console.log("your move again");
			}
			if(number2==4){
			showactive();
				}

	}


	var movetoken = function(element,value){

		this.element=element;
		this.val= value;
		var currentstep = 1;
		console.log("i want to move " +step+ " steps");

		var intervalid = setInterval(function(){

			
			var a = new Animate(board);
			var lastPosition= a.animate(element,number2,step);
			console.log("latest position"+lastPosition);
			currentstep++;
			if(currentstep==step+1){
			clearInterval(intervalid);						
			var temp1 = a.hittestForRed(element,number2);			
			if(temp1!=0){
			flag.redToken.child[temp1-1].outflag=0;
			flag.redToken.child[temp1-1].license=0;
			}
			var temp2 =	a.hittestForBlue(element,number2);
			
			if(temp2!=0){
			flag.blueToken.child[temp2-1].outflag=0;
			flag.blueToken.child[temp2-1].license=0;
			}
			var temp3 = a.hittestForGreen(element,number2);
			
			if(temp3!=0){
			flag.greenToken.child[temp3-1].outflag=0;
			flag.greenToken.child[temp3-1].license=0;
			}
			var temp4 =	a.hittestForYellow(element,number2);
			if(temp4!=0){
			flag.yellowToken.child[temp4-1].outflag=0;
			flag.yellowToken.child[temp4-1].license=0;
			}
			
			var gameTest= a.finishTest(lastPosition);
			console.log("tested game is "+ gameTest);
			if(gameTest==1){
				var currentId= element.id;
				console.log("last id is "+ currentId);
				var l= currentId.length;
				var last= currentId.charAt(l-1);
				var c1=c2=c3=c4=1;
				if(element.style.backgroundColor=="red"){
					flag.redToken.child[last-1].finishflag=1;
					for(var i= 0;i<4;i++){
						if(flag.redToken.child[i].finishflag==1){
							c1++;
						}
					}
					if(c1==5){
						gameWon("red");
					}
				}
				if(element.style.backgroundColor=="yellow"){
					flag.yellowToken.child[last-1].finishflag=1;
					for(var i= 0;i<4;i++){
						if(flag.yellowToken.child[i]==1){
							c2++;
						}
					}
					if(c2==5){
						gameWon("yellow");
					}
				}
				if(element.style.backgroundColor=="blue"){
					flag.blueToken.child[last-1].finishflag=1;
					for(var i= 0;i<4;i++){
						if(flag.blueToken.child[i]==1){
							c3++;
						}
					}
					if(c3==5){
						gameWon("blue");
					}
				}
				if(element.style.backgroundColor=="green"){
					flag.greenToken.child[last-1].finishflag=1;
					for(var i= 0;i<4;i++){
						if(flag.greenToken.child[i]==1){
							c4++;
						}
					}
					if(c4==5){
						gameWon("green");
					}
				}


			}


			
				if(step==1||step==6){
					controlflag--;
					console.log("your move again");
				}
				if (number2==4){
					showactive();
					}
				}
		},200);
	
		element.style.borderColor="black";
		element.style.zIndex= "1";
		
		
	}
	var showactive= function(){
		console.log("inside indicator when control flag is "+ controlflag);
		if(controlflag==number){
			var activeindicator= 1;
		}
		else{
		var activeindicator= controlflag+1;
			}

		var info= document.getElementById("status");
		info.style.display="block";
		
		var outer1= document.getElementById("outer1");
		var outer2= document.getElementById("outer2");
		var outer3= document.getElementById("outer3");
		var outer4= document.getElementById("outer4");
		if(activeindicator==1){
			outer3.style.borderColor="#a3531e";
			outer4.style.borderColor="#a3531e";
			outer1.style.borderColor="red";
			info.innerHTML= "Red's Turn to Click and Roll the Dice";
			/*info.style.color="red";*/
		}
		else if(activeindicator==2){
			if(number==2){
			outer1.style.borderColor="#a3531e";
			
			outer4.style.borderColor="yellow";
			
			info.innerHTML= "Yellow's Turn to Click and Roll the Dice";
			}
			else{
			outer1.style.borderColor="#a3531e";
			outer2.style.borderColor="green";
			info.innerHTML= "Green's Turn to Click and Roll the Dice";
			}
		}
		else if(activeindicator==3){
			outer2.style.borderColor="#a3531e";
			
			outer4.style.borderColor="yellow";
			
			info.innerHTML= "Yellow's Turn to Click and Roll the Dice";
		}
		else if(activeindicator==4){
			outer4.style.borderColor="#a3531e";
			
			outer3.style.borderColor="blue";
			
			info.innerHTML= "Blue's Turn to Click and Roll the Dice";
		}
		else{	
			outer3.style.borderColor="#a3531e";
			outer1.style.borderColor="red";
			info.innerHTML= "Red's Turn to Click and Roll the Dice";
		}
	}

	var getrandom= function(){
		return Math.floor(Math.random() * (7 - 1) + 1);
	}

	var gameWon= function(win){
		var winningToken=win;
		//var winningDiv= document.createElement("div");
		var wrap= document.getElementById("main-wrapper");
		var winningDiv= document.getElementById("win");

		winningDiv.style.display="block";
		//winningDiv.setAttribute("id","win");
		/*wrap.appendChild(winningDiv);*/
		wrap.style.opacity= 0.3;
		winningDiv.style.opacity=1;
		document.getElementById("dice").style.display="none";
		if(winningToken=="red"){
			winningDiv.innerHTML="RED WINS";
			winningDiv.style.color="red";
			console.log("RED WINS");
		}
		if(winningToken=="blue"){
			winningDiv.innerHTML="BLUE WINS";
			winningDiv.style.color="blue";
			console.log("BLUE WINS");
		}
		if(winningToken=="green"){
			winningDiv.innerHTML="GREEN WINS";
			winningDiv.style.color="green";
			console.log("GREEN WINS");
		}
		if(winningToken=="yellow"){
			winningDiv.innerHTML="YELLOW WINS";
			winningDiv.style.color="yellow";
			console.log("YELLOW WINS");
		}
	}

	var vol= document.createElement("volume");
	vol.setAttribute("class","volume");
	wrap= document.getElementById("main-wrapper");
	wrap.appendChild(vol);
	vol.style.backgroundImage= "url(images/vol-on.png)";
	vol.addEventListener('click',function(event){

		if(toggle==1){
			for(var i=1;i<3;i++){
				document.getElementById("audio"+i).muted=true;
			}
			console.log("in volume");
			toggle=0;	
			vol.style.backgroundImage= "url(images/vol-off.png)";
		}
		else{
			toggle=1;
			for(var i=1;i<3;i++){
				document.getElementById("audio"+i).muted=false;
			}
			vol.style.backgroundImage= "url(images/vol-on.png)";

		}
	});
		
	
}
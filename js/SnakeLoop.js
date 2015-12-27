function SnakeLoop(){
	

	var board= document.getElementsByClassName("gameboard")[0];
	var that= this;
	var tilewidth=45;
	var step=0;
	var indicatorflag=0;
	var controlflag =0;
	var number=0;
	var number2=0;
	var flag= new Flags();
	var dragObj= null;
	var tilewidth2= 45;
	var ladderindex=0;
	var l= new Ladders();

	
var setSnakeBoard=function(){
	var wrap = document.getElementById("main-wrapper");
	var ladder= [];
	
		for(var i=1;i<5;i++){
		ladder[i]= document.createElement("div");
		ladder[i].setAttribute("class","ladder");
		ladder[i].setAttribute("id","ladder"+i);
		wrap.appendChild(ladder[i]);
		//ladder[i].setAttribute('draggable', true);
		dragLadders(ladder[i],0,i);

		  	}

		for(var i=1;i<5;i++){
		snake[i]= document.createElement("div");
		snake[i].setAttribute("class","snakes");
		snake[i].setAttribute("id","snake"+i);
		wrap.appendChild(snake[i]);
		//ladder[i].setAttribute('draggable', true);
		dragSnakes(snake[i],0,i);
		
		  	}
		}
var dragLadders= function(ladderObj,a, i){
	
	
	ladderObj.onmousedown = function(){
		if(a==0){
       		dragObj = ladderObj;
    	}
    	else{
    		dragObj = null;
    	}
    }

	

    document.onmouseup = function(e){
    
    dragObj = null;
	};

	document.onmousemove = function(e){
    var x = e.pageX;
    var y = e.pageY;

	
    if(dragObj== null)
        return;

    dragObj.style.left = x +"px";
   	dragObj.style.top= y +"px";

   	var xcordTest= (parseInt(dragObj.style.left)-450)/45;
   	var ycordTest= Math.floor((parseInt(dragObj.style.top)-10)/45); 
   	var xcordFloor = Math.floor(xcordTest);
   	if((xcordTest-xcordFloor)> 0.7){
   	var xcord1 = Math.ceil(xcordTest);

   	}
   	else{
   	var xcord1 = xcordFloor;
   	}
   	var xcord2 = xcord1;
   	var ycord1= ycordTest;
   	var ycord2= ycordTest+ 2;
   	var currentid= dragObj.id;

   	console.log("id is "+ currentid);
    //console.log("x coordinate of tail"+Math.floor(parseInt(dragObj.style.left)-450)/45);
    console.log("y coorsdinate top"+ ycord1);
    console.log("y coordinate bottom"+ ycord2);
    var index= currentid.charAt(6)
    l.ladderPos.child[index-1].x1= xcord1;
    l.ladderPos.child[index-1].x2= xcord2;
  	l.ladderPos.child[index-1].y1= ycord1;
    l.ladderPos.child[index-1].y2= ycord2;
     console.log("x1 of child  "+(index-1)+"is  "+l.ladderPos.child[index-1].x1);

    //setPosition(xcord1,xcord2,ycord1,ycord2,i);
    console.log("y coordinate bottom from flags"+ l.ladderPos.child[0].y1);
  
	};
}

var dragSnakes= function(snakeObj,a, i){
	
	
	snakeObj.onmousedown = function(){
		if(a==0){
       		dragObj = snakeObj;
    	}
    	else{
    		dragObj = null;
    	}
    }

	

    document.onmouseup = function(e){
    
    dragObj = null;
	};

	document.onmousemove = function(e){
    var x = e.pageX;
    var y = e.pageY;

	
    if(dragObj== null)
        return;

    dragObj.style.left = x +"px";
   	dragObj.style.top= y +"px";

   	var xcordTest= (parseInt(dragObj.style.left)-450)/45;
   	var ycordTest= Math.floor((parseInt(dragObj.style.top)-10)/45); 
   	var xcordFloor = Math.floor(xcordTest);
   	if((xcordTest-xcordFloor)> 0.7){
   	var xcord1 = Math.ceil(xcordTest);

   	}
   	else{
   	var xcord1 = xcordFloor;
   	}
   	var xcord2 = xcord1;
   	var ycord1= ycordTest;
   	var ycord2= ycordTest+ 2;
   	var currentid= dragObj.id;

   	console.log("id is "+ currentid);
    //console.log("x coordinate of tail"+Math.floor(parseInt(dragObj.style.left)-450)/45);
    console.log("y coorsdinate top"+ ycord1);
    console.log("y coordinate bottom"+ ycord2);
    var index= currentid.charAt(5)
    l.snakePos.child[index-1].x1= xcord1;
    l.snakePos.child[index-1].x2= xcord2;
  	l.snakePos.child[index-1].y1= ycord1;
    l.snakePos.child[index-1].y2= ycord2;
     console.log("x1 of child  "+(index-1)+"is  "+l.snakePos.child[index-1].x1);

    //setPosition(xcord1,xcord2,ycord1,ycord2,i);
    console.log("y coordinate bottom from flags"+ l.snakePos.child[0].y1);
  
	};
}
		


this.calldice= function(noOfPlayers,noOfToken){
		setSnakeBoard();
		//var dice= document.getElementsByClassName("dice")[0];
		var dice = document.getElementById("dice");
		dice.style.backgroundImage="url('images/one.png')";
		number= noOfPlayers;
		number2= noOfToken;
		console.log("number of players"+ number);
		
		console.log("ROLL THE DICE!!!");
		
		showactive();

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



				  
00
				});
		
}

		function rolldice(dice){
			var gatti=[];
			var elem=[];
			if(number2==1){
			for(var i=1;i<5;i++){
			elem= document.getElementById("ladder"+i);
			dragLadders(elem,1,i);
			}
		}
			
			if (controlflag==number){
				controlflag=0;
				
			}

			controlflag++;
			var active = loop();
			var info= document.getElementById("status");
			

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
				for (var i=1;i<number2+1;i++){
				gatti[i] = document.getElementById(active+i);
				// console.log("value of k is: " +k);
				
				gatti[i].style.borderColor= "white";
				
				gatti[i].style.zIndex= "2";

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
				gatti[i] = document.getElementById(active+i);

				if(controlflag==1){
					if(flag.redToken.child[i-1].outflag==1){
						flag.redToken.child[i-1].license=1;
						gatti[i].style.borderColor= "white";
						gatti[i].style.zIndex= "2";
						indicatorflag=1;
					}
					
				}
				else if(controlflag==2){
					
						if(flag.greenToken.child[i-1].outflag==1){
						flag.greenToken.child[i-1].license=1;
						gatti[i].style.borderColor= "white";
						gatti[i].style.zIndex= "2";
						indicatorflag=1;
						}
					}
										
				
				else if(controlflag==3){
					if(flag.yellowToken.child[i-1].outflag==1){
						flag.yellowToken.child[i-1].license=1;
						gatti[i].style.borderColor= "white";
						gatti[i].style.zIndex= "2";
						indicatorflag=1;
					}
					
				}
				else if(controlflag==4){
					if(flag.blueToken.child[i-1].outflag==1){
						flag.blueToken.child[i-1].license=1;
						gatti[i].style.borderColor= "white";
						gatti[i].style.zIndex= "2";
						indicatorflag=1;
					}
					
				}

				}
				/*if(indicatorflag==0){
					showactive();
				}
				else{
					indicatorflag=0;
				}*/

			}
			

			document.getElementById(active+1).onclick= replyClick;
			
		
			
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
			if(controlflag==1){
			if (flag.redToken.child[index-1].license==1){
				if(flag.redToken.child[index-1].outflag==0){				
				movegattiout(clicked,index);
				flag.redToken.child[index-1].license=0;	
				}
				else{
				movegatti(clicked,index);
				flag.redToken.child[index-1].license=0;	
				}
			}
							
			}
		}

		if(clickedcolor=="green"){
			if(controlflag==2){
			if (flag.greenToken.child[index-1].license==1){
				if(flag.greenToken.child[index-1].outflag==0){
				movegattiout(clicked,index);
				flag.greenToken.child[index-1].license==0;
				}
				else{
				movegatti(clicked,index);
				flag.redToken.child[index-1].license=0;	
				}
				
				}

			}
		}

		if(clickedcolor=="yellow"){
			if(controlflag==3){
			if (flag.yellowToken.child[index-1].license==1){
				if(flag.yellowToken.child[index-1].outflag==0){
				movegattiout(clicked,index);
				flag.yellowToken.child[index-1].license==0;
				}
				else{
				movegatti(clicked,index);
				flag.redToken.child[index-1].license=0;	
				}
				
	
				}

			}
		}


		if(clickedcolor=="blue"){
			if(controlflag==4){
			if (flag.blueToken.child[index-1].license==1){
				if(flag.blueToken.child[index-1].outflag==0){
				movegattiout(clicked,index);
				flag.blueToken.child[index-1].license==0;
				}
				else{
				movegatti(clicked,index);
				flag.redToken.child[index-1].license=0;	
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
			element.style.left=tilewidth*0 + "px";
			element.style.top=tilewidth*9 + "px";

			console.log("player out");
			// /controlflag++;
			element.style.borderColor="black";
			console.log("the current controlflag was: "+ controlflag);
			if(step==1||step==6||step==3){
			controlflag--;
			console.log("your move again");
			}
			showactive();

	
	}




	
	var movegatti = function(element,value){

		this.element=element;
		this.val= value;
		var currentstep = 1;
		console.log("i want to move " +step+ " steps");

		var intervalid = setInterval(function(){

			
			var a = new Animate(board);
			a.animate(element,number2,step);
			currentstep++;
			if(currentstep==step+1){
				clearInterval(intervalid);
				
			
			var temp1 = a.hittestForRed(element,number2);
			console.log("direct here"+temp1);
			if(temp1!=0){
			flag.redToken.child[temp1-1].outflag=0;
			flag.redToken.child[temp1-1].license=0;
			}
			var temp2 =	a.hittestForBlue(element,number2);
			console.log("direct here"+temp2);
			if(temp2!=0){
			flag.blueToken.child[temp2-1].outflag=0;
			flag.blueToken.child[temp2-1].license=0;
			}
			var temp3 = a.hittestForGreen(element,number2);
			console.log("direct here"+temp3);
			if(temp3!=0){
			flag.greenToken.child[temp3-1].outflag=0;
			flag.greenToken.child[temp3-1].license=0;
			}
			var temp4 =	a.hittestForYellow(element,number2);
			if(temp4!=0){
			flag.yellowToken.child[temp4-1].outflag=0;
			flag.yellowToken.child[temp4-1].license=0;
			}
			//console.log("value of flags"+ l.ladderPos.child[0].y1);
			
				
			ladderTest(element);
			

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
	
	var getrandom= function(){
		return Math.floor(Math.random() * (7 - 1) + 1);
	}
	var ladderTest= function(element3){
	console.log("ladder tested");
	//console.log("test value"+that.ladder.child[0].x2);
	var left = parseInt(element3.style.left)/tilewidth2;
	var top = parseInt(element3.style.top)/tilewidth2;
	console.log("left value of gatt"+ left);
	console.log("top value of gatt"+ top);
	for(var i=0;i<4;i++){
		var x1= l.ladderPos.child[i].x1;
		
		var x2= l.ladderPos.child[i].x2;
		var y1= l.ladderPos.child[i].y1;
		var y2= l.ladderPos.child[i].y2;
		console.log(x2+":"+y1+":"+y2);
		if((left==x1)&&(top==y2)){
			element3.style.left= x2*tilewidth2 +"px";
			element3.style.top= y1*tilewidth2 +"px";
			//element3.style.backgroundColor="purple";
		console.log("HITTTT");
		}	
	}
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
		if(activeindicator==1){
			info.innerHTML= "Red's Turn to Click and Roll the Dice";
		}
		else if(activeindicator==2){
			info.innerHTML= "Green's Turn to Click and Roll the Dice";
		}
		else if(activeindicator==3){
			info.innerHTML= "Yellow's Turn to Click and Roll the Dice";
		}
		else if(activeindicator==4){
			info.innerHTML= "Blue's Turn to Click and Roll the Dice";
		}
		else{	
			info.innerHTML= "Red's Turn to Click and Roll the Dice";
		}
	}


}
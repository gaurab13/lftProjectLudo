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
	var l= new Ladders();

	var setSnakeBoard=function(){
		var wrap = document.getElementById("main-wrapper");
		var info= document.getElementById("status");
		info.style.display="none";
		var item= [];
		
		for(var i=1;i<9;i++){
			item[i]= document.createElement("div");
			item[i].setAttribute("class","item");
			item[i].setAttribute("id","item"+i);
			wrap.appendChild(item[i]);
			dragLadders(item[i],0);
		}
		var info= document.createElement("div");
		info.setAttribute("id","infoSnake");
		info.innerHTML="Have Fun Dragging the Snakes and Ladders and Designing your Own Board";
		wrap.appendChild(info);

		var info2= document.createElement("div");
		info2.setAttribute("id","infoSnake2");
		info2.innerHTML="Or choose the default Board";
		wrap.appendChild(info2);

		var defaultPosition= document.createElement("button");
		defaultPosition.setAttribute("id","defaultPosition");
		defaultPosition.innerHTML="Set Default";
		
		defaultPosition.onclick= setDefaultPosition ;
		wrap.appendChild(defaultPosition);	
	}

	var dragLadders= function(ladderObj,a){
		ladderObj.onmousedown = function(){
			if(a==0){
				dragObj = ladderObj;
			}
			else{
				dragObj = null;
				return;
			}
		}
		document.onmouseup = function(e){
			dragObj = null;
		};

		document.onmousemove = function(e){
			var x = e.pageX;
			var y = e.pageY;

			if(dragObj== null){
				return;
			}
			var currentid= dragObj.id;
			var index= currentid.charAt(4);
			lengthItem= l.itemPos.child[index-1].dy*45;

			if((y>=60)){
				dragObj.style.left = x +"px";
				dragObj.style.top= y +"px";
			}
			var xcordTest1= (parseInt(dragObj.style.left)-450+l.itemPos.child[index-1].dx1)/45;
			var xcordTest2= (parseInt(dragObj.style.left)-450+l.itemPos.child[index-1].dx2)/45;
			var ycordTest= Math.floor((parseInt(dragObj.style.top)-60)/45); 

			var xcordFloor1 = Math.floor(xcordTest1);
			var xcordFloor2 = Math.floor(xcordTest2);
			console.log("xcordTest1: "+xcordTest1);
			console.log("xcordTest2: "+xcordTest2);
			if(index<=4){
				if((xcordTest1-xcordFloor1)> 0.7){
					var xcord1 = Math.ceil(xcordTest1);
				}
				else{
					var xcord1 =  Math.floor(xcordTest1);	
				}

				if((xcordTest2-xcordFloor2)> 0.7){
					var xcord2 = Math.ceil(xcordTest2);
				}
				else{
					var xcord2 =  Math.floor(xcordTest2);	
				}
			}
			else{
				var xcord1 = Math.floor(xcordTest1);
				var xcord2 = Math.floor(xcordTest2);
			}
			var ycord1= ycordTest;
			var ycord2= ycordTest+ l.itemPos.child[index-1].dy;
			l.itemPos.child[index-1].x1= xcord1;
			l.itemPos.child[index-1].x2= xcord2;
			l.itemPos.child[index-1].y1= ycord1;
			l.itemPos.child[index-1].y2= ycord2;
			console.log("x1 of child  "+(index-1)+"is  "+l.itemPos.child[index-1].x1);
			console.log("x2 of child  "+(index-1)+"is  "+l.itemPos.child[index-1].x2);
			console.log("y coordinate bottom from flags"+ l.itemPos.child[0].y1);

		};
	}

	var setDefaultPosition= function(){
		var item= [];
		console.log("clicked");
		var itemInit= new InitialPosition();
		for( var i=1;i<9;i++){
			item[i]= document.getElementById("item"+i);
			var x= itemInit.initPosItem.child[i-1].x;
			var y= itemInit.initPosItem.child[i-1].y;
			item[i].style.left=x*tilewidth+450+"px";
			item[i].style.top= y*tilewidth+60+"px";
			
			dragLadders(item[i],1);

			var xcordTest1= (parseInt(item[i].style.left)-450+l.itemPos.child[i-1].dx1)/45;
			var xcordTest2= (parseInt(item[i].style.left)-450+l.itemPos.child[i-1].dx2)/45;
			var ycordTest= Math.floor((parseInt(item[i].style.top)-60)/45); 

			var xcordFloor1 = Math.floor(xcordTest1);
			var xcordFloor2 = Math.floor(xcordTest2);
			console.log("xcordTest1: "+xcordTest1);
			console.log("xcordTest2: "+xcordTest2);
			if(i<=4){
				if((xcordTest1-xcordFloor1)> 0.7){
					var xcord1 = Math.ceil(xcordTest1);
				}
				else{
					var xcord1 =  Math.floor(xcordTest1);	
				}

				if((xcordTest2-xcordFloor2)> 0.7){
					var xcord2 = Math.ceil(xcordTest2);
				}
				else{
					var xcord2 =  Math.floor(xcordTest2);	
				}
			}
			else{
				var xcord1 = Math.floor(xcordTest1);
				var xcord2 = Math.floor(xcordTest2);
			}
			var ycord1= ycordTest;
			var ycord2= ycordTest+ l.itemPos.child[i-1].dy-1;
			l.itemPos.child[i-1].x1= xcord1;
			l.itemPos.child[i-1].x2= xcord2;
			l.itemPos.child[i-1].y1= ycord1;
			l.itemPos.child[i-1].y2= ycord2;
		}
		
		setDisplayOff();
		
	}


	this.calldice= function(noOfPlayers,noOfToken){
		setSnakeBoard();
		var dice = document.getElementById("dice");

		dice.style.backgroundImage="url('images/one.png')";
		number= noOfPlayers;
		number2= noOfToken;
		console.log("number of players"+ number);

		console.log("ROLL THE DICE!!!");
		showactive();
		dice.addEventListener('click',function(event){
			var initial=1;
			setDisplayOff();

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
		var elem = [];
		showactive();

		for(var i=1;i<9;i++){
			elem= document.getElementById("item"+i);
			dragLadders(elem,1);
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

		if (step==1||step==6){
			for (var i=1;i<number2+1;i++){
			token[i] = document.getElementById(active+i);
			token[i].style.borderColor= "white";
			token[i].style.zIndex= "2";

			if(controlflag==1){
				flag.redToken.child[i-1].license=1;

			}
			else if(controlflag==2){
				
				flag.greenToken.child[i-1].license=1;	
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
					
				}
				
			}
			else if(controlflag==2){
				
				if(flag.greenToken.child[i-1].outflag==1){
					flag.greenToken.child[i-1].license=1;
					token[i].style.borderColor= "white";
					token[i].style.zIndex= "2";
					
				}
			}

			
			else if(controlflag==3){
				if(flag.yellowToken.child[i-1].outflag==1){
					flag.yellowToken.child[i-1].license=1;
					token[i].style.borderColor= "white";
					token[i].style.zIndex= "2";
					
				}
				
			}
			else if(controlflag==4){
				if(flag.blueToken.child[i-1].outflag==1){
					flag.blueToken.child[i-1].license=1;
					token[i].style.borderColor= "white";
					token[i].style.zIndex= "2";
					
				}
				
			}

		}
		showactive();
	}
		document.getElementById(active+1).onclick= replyClick;
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
					moveTokenOut(clicked,index);
					flag.redToken.child[index-1].license=0;	
				}
				else{
					moveToken(clicked,index);
					flag.redToken.child[index-1].license=0;	
				}
			}

		}
	}

	if(clickedcolor=="green"){
		if(controlflag==2){
			if (flag.greenToken.child[index-1].license==1){
				if(flag.greenToken.child[index-1].outflag==0){
					moveTokenOut(clicked,index);
					flag.greenToken.child[index-1].license==0;
				}
				else{
					moveToken(clicked,index);
					flag.redToken.child[index-1].license=0;	
				}
			}
		}
	}

	if(clickedcolor=="yellow"){
		if(controlflag==3){
			if (flag.yellowToken.child[index-1].license==1){
				if(flag.yellowToken.child[index-1].outflag==0){
					moveTokenOut(clicked,index);
					flag.yellowToken.child[index-1].license==0;
				}
				else{
					moveToken(clicked,index);
					flag.redToken.child[index-1].license=0;	
				}				
			}
		}
	}


	if(clickedcolor=="blue"){
		if(controlflag==4){
			if (flag.blueToken.child[index-1].license==1){
				if(flag.blueToken.child[index-1].outflag==0){
					moveTokenOut(clicked,index);
					flag.blueToken.child[index-1].license==0;
				}
				else{
					moveToken(clicked,index);
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

	var moveTokenOut = function(element,value){
		this.element= element;
		this.pos=value;
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
		element.style.borderColor="black";
		if(step==1||step==6||step==3){
			controlflag--;
		}
		showactive();
	}

	var moveToken = function(element,value){
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
				ladderTest(element);
				ladderTest(element);
				var temp1 = a.hittestForRed(element,number2);
				if(temp1!=0){
					flag.redToken.child[temp1-1].outflag=0;
					flag.redToken.child[temp1-1].license=0;
				}
				var temp3 = a.hittestForGreen(element,number2);
				if(temp3!=0){
					flag.greenToken.child[temp3-1].outflag=0;
					flag.greenToken.child[temp3-1].license=0;
				}

				if(number>=3){
					var temp4 =	a.hittestForYellow(element,number2);
					if(temp4!=0){
						flag.yellowToken.child[temp4-1].outflag=0;
						flag.yellowToken.child[temp4-1].license=0;
					}
				}
				if(number==4){
					var temp2 =	a.hittestForBlue(element,number2);
					if(temp2!=0){
						flag.blueToken.child[temp2-1].outflag=0;
						flag.blueToken.child[temp2-1].license=0;
					}
				}
				if(step==1||step==6){
					controlflag--;
				}
				showactive();

			}
		},200);

		element.style.borderColor="black";
		element.style.zIndex= "1";
	}

	var getrandom= function(){
		return Math.floor(Math.random() * (7 - 1) + 1);
	}

	var ladderTest= function(element3){
		var left = parseInt(element3.style.left)/tilewidth;
		var top = parseInt(element3.style.top)/tilewidth;
		for(var i=0;i<8;i++){
			var x1= l.itemPos.child[i].x1;	
			var x2= l.itemPos.child[i].x2;
			var y1= l.itemPos.child[i].y1;
			var y2= l.itemPos.child[i].y2;
			console.log(x2+":"+y1+":"+y2);
			if(i<4){
				if((left==x2)&&(top==y2)){
					element3.style.left= x1*tilewidth +"px";
					element3.style.top= y1*tilewidth +"px";	
					console.log("HITTTT");
				}
			}
			else{
				if((left==x1)&&(top==y1)){
					if((x2*tilewidth2)<=510){
						element3.style.left= x2*tilewidth +"px";
						element3.style.top= y2*tilewidth +"px";
						console.log("HITTTT");
					}
				}
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
		info.style.display="block";
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

	var setDisplayOff= function(){
		var info1= document.getElementById("infoSnake");
		var info2= document.getElementById("infoSnake2");
		var defButton= document.getElementById("defaultPosition");

		info1.style.display="none";
		info2.style.display="none";
		defButton.style.display="none";
	}


}
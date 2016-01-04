function Main(){

	var mainWrp = document.getElementById("main-wrapper");
	var mainboard= document.getElementById("main-container");
	var option1 = document.createElement("button");
	var option2 =document.createElement("button");
	var option3 = document.createElement("button");
	var gameFlag=0;
	var that= this;
	var toggle= 1;

	var ludoOption= document.createElement("button");
	ludoOption.setAttribute("class","game");
	ludoOption.setAttribute("id","ludo");
	ludoOption.innerHTML=("Ludo");

	var snakeOption= document.createElement("button");
	snakeOption.setAttribute("class","game");
	snakeOption.setAttribute("id","snake");
	snakeOption.innerHTML=("Snakes and Ladders");

	option1.setAttribute("class","option");
	option2.setAttribute("class","option");
	option3.setAttribute("class","option");

	option2.setAttribute("id","three");
	option3.setAttribute("id","four");
	option1.setAttribute("id","two");

	mainboard.style.display="none";

	option2.innerHTML=("THREE");
	option3.innerHTML=("FOUR");
	option1.innerHTML=("TWO");

	mainWrp.appendChild(option1);
	mainWrp.appendChild(option2);
	mainWrp.appendChild(option3);
	mainWrp.appendChild(ludoOption);
	mainWrp.appendChild(snakeOption);


	this.init = function(){

		var noOfPlayers = 0;
		var status= document.getElementById("status");
		status.style.display="none";
		var optheader= document.getElementById("options-header");
		optheader.style.display="none";
		selectGame();
		option1.onclick= function(){
			noOfPlayers= 2;
			initiateGame(noOfPlayers,gameFlag);
		}

		option2.onclick= function(){
			noOfPlayers= 3;
			initiateGame(noOfPlayers,gameFlag);
		}
		option3.onclick=function(){
			noOfPlayers= 4;
			initiateGame(noOfPlayers,gameFlag);
		}



	}

	var initiateGame = function(n, m){
		var optheader= document.getElementById("options-header");
		optheader.style.display="none";
		var noOfPlayers= n;
		var selectedGame= m;
		console.log("Game selected"+ m);
		option1.style.display="none";
		option2.style.display="none";
		option3.style.display="none";
		
		mainboard.style.display="block";
		
		if(selectedGame==4){
			var lBoard= new LudoBoard();
			lBoard.createBoard();
			var g = new CreateToken();
			g.createTokens();
			var ludoLoop1 = new LudoLoop();
			ludoLoop1.calldice(noOfPlayers,selectedGame);
		}
		else{
			var sBoard= new SnakeBoard();
			sBoard.createBoard2();
			var token = new TokenSnake();
			token.createToken(noOfPlayers);
			var snakeLoop = new SnakeLoop();
			snakeLoop.calldice(noOfPlayers,selectedGame);
		}	
	}

	var selectGame = function(){
		option1.style.display="none";
		option2.style.display="none";
		option3.style.display="none";

		ludoOption.style.display="block";
		snakeOption.style.display="block";

		ludoOption.onclick= function(){
			gameFlag= 4;
			setDisplay();
		
			/*animate(ludoOption,snakeOption);*/
			
		
		}
		snakeOption.onclick=function(){
			gameFlag= 1;
			setDisplay();
		
			/*animate(snakeOption,ludoOption);*/
		
		}
	}

	var setDisplay= function(){
		var optheader= document.getElementById("options-header");
		optheader.style.display="block";

		option1.style.display="block";
		option2.style.display="block";
		option3.style.display="block";
		ludo.style.display="none";
		snake.style.display="none";
	}

	var animate= function(elem1,elem2){
	
	var element= document.getElementById(elem1.id);
	var element2= document.getElementById(elem2.id);
	console.log("here");
	
	
	if(elem1.id=="ludo"){
		var left= 450;	
		var dx=5;
	}
	else{
		var left= 700;	
		var dx=-5;
	}
	
	var count=0;
	var intervalid= setInterval(function(){
		count++;
		if(count<=20){
			left= left- dx;
			element.style.left=left+"px";
		}
		else{
			left+=2*dx;
			element.style.left=left+"px";
		}
	

	if(count==2){
		clearInterval(intervalid);
		setDisplay();
		
	}

	},100);
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
function Animate(element) {
	this.el = element;
	var that = this;

	this.animate = function(currentPos, step) {
		var pixeltomove= step*30 + currentPos;
		
		var intervalId= setInterval(function(){
			currentPos+=30;
			element.style.left= currentPos + "px";

			if(currentPos>= pixeltomove){
				clearInterval(intervalId);
			}

		},500);

	}
}
function Preloader() {
  var view = document.getElementsByTagName("body")[0];
  var load;
  var imageSources;
  var that = this;
  this.init = function() {
    load = document.createElement("div");
    load.setAttribute("class","loading-percent");
    load.innerHTML= "0%";

    view.appendChild(load);

    imageSources = {
      1: 'images/one.png',
      2: 'images/two.png',
      3: 'images/three.png',
      4: 'images/four.png',
      5: 'images/five.png',
      6: 'images/six.png',
      7: 'images/ladder1.png',
      8: 'images/ladder2.png',
      9: 'images/ladder3.png',
      10: 'images/snake1.png',
      11: 'images/snake2.png',
      12: 'images/snake4.png',
      13: 'images/snake5.png',
      14: 'images/star.png',
      15: 'images/outercircle-img.png',
    }

    that.loadImages(imageSources);
  }

  this.loadImages = function(imageSources) {
    var images = {};
    var loadedImages = 0;
    var totalImages = 0;

    for (var key in imageSources) {
      totalImages++;
    }

    for (var key in imageSources) {
      images[key] = new Image();
      images[key].src = imageSources[key];

      images[key].onload = function() {
        loadedImages++;
        percentage = Math.floor((loadedImages * 100) / totalImages);
        load.innerHTML= percentage+"%";
        if (loadedImages >= totalImages) {
         load.style.display="none";
          that.initMainApp();
        }
      }

    }

  }

  this.initMainApp = function() {
    var home = new Main();
      home.init();
  }
  
}

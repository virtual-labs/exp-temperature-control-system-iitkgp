
var knobPositionX;
      var knobPositionY;
      var mouseX;
      var mouseY;
      var knobCenterX;
      var knobCenterY;
      var adjacentSide;
      var oppositeSide;
      var currentRadiansAngle;
      var getRadiansInDegrees;
      var finalAngleInDegrees;
      var volumeSetting;
      //var tickHighlightPosition;
      //var audio = new Audio("https://www.cineblueone.com/maskWall/audio/skylar.mp3"); //Celine Dion's "Ashes"
      //var startingTickAngle = -135;
      //var tickContainer = document.getElementById("tickContainer");
      var knob1 = document.getElementById("knob1");
	  var knob2 = document.getElementById("knob2");
	  var knob3 = document.getElementById("knob3");
	  var knob4 = document.getElementById("knob4");
	   
      var boundingRectangle1 = document.getElementById("knob1").getBoundingClientRect(); //get rectangular geometric data of knob (x, y, width, height)
	  var boundingRectangle2 = knob2.getBoundingClientRect();
	  var boundingRectangle3 = knob3.getBoundingClientRect();
	  var boundingRectangle4 = knob4.getBoundingClientRect();

      function main1()
      {
	  onMouseDown1();
	  onMouseUp1();
          //knob1.addEventListener(getMouseDown(), onMouseDown1); //listen for mouse button click
          //document.addEventListener(getMouseUp(), onMouseUp1); //listen for mouse button release
	  }
	  function main2()
      {
          knob2.addEventListener(getMouseDown(), onMouseDown2); //listen for mouse button click
          document.addEventListener(getMouseUp(), onMouseUp2); //listen for mouse button release
	  }
	  function main3()
      {
          knob3.addEventListener(getMouseDown(), onMouseDown3); //listen for mouse button click
          document.addEventListener(getMouseUp(), onMouseUp3); //listen for mouse button release
	  }
	  function main4()
      {
          knob4.addEventListener(getMouseDown(), onMouseDown4); //listen for mouse button click
          document.addEventListener(getMouseUp(), onMouseUp4); //listen for mouse button release
	  }

      //on mouse buttons down
      function onMouseDown1()
      {
	  document.addEventListener(getMouseMove(), onMouseMove1); //start drag
      }	  
	  function onMouseDown2()
      {
	  document.addEventListener(getMouseMove(), onMouseMove2); //start drag
      }
	  function onMouseDown3()
      {
	  document.addEventListener(getMouseMove(), onMouseMove3); //start drag
      }
	  function onMouseDown4()
      {
	  document.addEventListener(getMouseMove(), onMouseMove4); //start drag
      }

      //on mouse buttons release
      function onMouseUp1()
      {
          document.removeEventListener(getMouseMove(), onMouseMove1); //stop drag
      }
	  function onMouseUp2()
      {
          document.removeEventListener(getMouseMove(), onMouseMove2); //stop drag
      }
	  function onMouseUp3()
      {
          document.removeEventListener(getMouseMove(), onMouseMove3); //stop drag
      }
	  function onMouseUp4()
      {
          document.removeEventListener(getMouseMove(), onMouseMove4); //stop drag
      }

      //compute mouse angle relative to center of volume knob
      //For clarification, see my basic trig explanation at:
      //https://www.quora.com/What-is-the-significance-of-the-number-pi-to-the-universe/answer/Kevin-Lam-15
      function onMouseMove1(event)
      {	  
          knobPositionX = boundingRectangle1.left; //get knob's global x position
          knobPositionY = boundingRectangle1.top; //get knob's global y position

          if(detectMobile() == "desktop")
          {
              mouseX = event.pageX; //get mouse's x global position
              mouseY = event.pageY; //get mouse's y global position
          } else {
              mouseX = event.touches[0].pageX; //get finger's x global position
              mouseY = event.touches[0].pageY; //get finger's y global position
          }

          knobCenterX = boundingRectangle1.width / 2 + knobPositionX; //get global horizontal center position of knob relative to mouse position
          knobCenterY = boundingRectangle1.height / 2 + knobPositionY; //get global vertical center position of knob relative to mouse position

          adjacentSide = knobCenterX - mouseX; //compute adjacent value of imaginary right angle triangle
          oppositeSide = knobCenterY - mouseY; //compute opposite value of imaginary right angle triangle

          //arc-tangent function returns circular angle in radians
          //use atan2() instead of atan() because atan() returns only 180 degree max (PI radians) but atan2() returns four quadrant's 360 degree max (2PI radians)
          currentRadiansAngle = Math.atan2(adjacentSide, oppositeSide);

          getRadiansInDegrees = currentRadiansAngle * 180 / Math.PI; //convert radians into degrees

          finalAngleInDegrees = -(getRadiansInDegrees - 135); //knob is already starting at -135 degrees due to visual design so 135 degrees needs to be subtracted to compensate for the angle offset, negative value represents clockwise direction

          //only allow rotate if greater than zero degrees or lesser than 270 degrees
          if(finalAngleInDegrees >= 0 && finalAngleInDegrees <= 300)
          {
              knob1.style.transform = "rotate(" + finalAngleInDegrees + "deg)"; //use dynamic CSS transform to rotate volume knob

              //270 degrees maximum freedom of rotation / 100% volume = 1% of volume difference per 2.7 degrees of rotation
              volumeSetting = Math.round(finalAngleInDegrees / (300 / 100));
              var voltValue = volumeSetting * (1/100); 
              document.getElementById("P").value = Math.floor(voltValue *10)/10 ;//+ "%"; //update volume text
          }
      }

///knob2/////
function onMouseMove2(event)
      {
          knobPositionX = boundingRectangle2.left; //get knob's global x position
          knobPositionY = boundingRectangle2.top; //get knob's global y position

          if(detectMobile() == "desktop")
          {
              mouseX = event.pageX; //get mouse's x global position
              mouseY = event.pageY; //get mouse's y global position
          } else {
              mouseX = event.touches[0].pageX; //get finger's x global position
              mouseY = event.touches[0].pageY; //get finger's y global position
          }

          knobCenterX = boundingRectangle2.width / 2 + knobPositionX; //get global horizontal center position of knob relative to mouse position
          knobCenterY = boundingRectangle2.height / 2 + knobPositionY; //get global vertical center position of knob relative to mouse position

          adjacentSide = knobCenterX - mouseX; //compute adjacent value of imaginary right angle triangle
          oppositeSide = knobCenterY - mouseY; //compute opposite value of imaginary right angle triangle

          //arc-tangent function returns circular angle in radians
          //use atan2() instead of atan() because atan() returns only 180 degree max (PI radians) but atan2() returns four quadrant's 360 degree max (2PI radians)
          currentRadiansAngle = Math.atan2(adjacentSide, oppositeSide);

          getRadiansInDegrees = currentRadiansAngle * 180 / Math.PI; //convert radians into degrees

          finalAngleInDegrees = -(getRadiansInDegrees - 135); //knob is already starting at -135 degrees due to visual design so 135 degrees needs to be subtracted to compensate for the angle offset, negative value represents clockwise direction

          //only allow rotate if greater than zero degrees or lesser than 270 degrees
          if(finalAngleInDegrees >= 0 && finalAngleInDegrees <= 300)
          {
              knob2.style.transform = "rotate(" + finalAngleInDegrees + "deg)"; //use dynamic CSS transform to rotate volume knob

              //270 degrees maximum freedom of rotation / 100% volume = 1% of volume difference per 2.7 degrees of rotation
              volumeSetting = Math.round(finalAngleInDegrees / (300 / 100));
              var voltValue = volumeSetting * (1/100); 
              document.getElementById("I").value = Math.floor(voltValue *10)/10 ;//+ "%"; //update volume text
              
             // document.getElementById("volumeValue").innerHTML = volumeSetting + "%"; //update volume text
          }
      }
	  
	  ///knob3/////
function onMouseMove3(event)
      {
          knobPositionX = boundingRectangle3.left; //get knob's global x position
          knobPositionY = boundingRectangle3.top; //get knob's global y position

          if(detectMobile() == "desktop")
          {
              mouseX = event.pageX; //get mouse's x global position
              mouseY = event.pageY; //get mouse's y global position
          } else {
              mouseX = event.touches[0].pageX; //get finger's x global position
              mouseY = event.touches[0].pageY; //get finger's y global position
          }

          knobCenterX = boundingRectangle3.width / 2 + knobPositionX; //get global horizontal center position of knob relative to mouse position
          knobCenterY = boundingRectangle3.height / 2 + knobPositionY; //get global vertical center position of knob relative to mouse position

          adjacentSide = knobCenterX - mouseX; //compute adjacent value of imaginary right angle triangle
          oppositeSide = knobCenterY - mouseY; //compute opposite value of imaginary right angle triangle

          //arc-tangent function returns circular angle in radians
          //use atan2() instead of atan() because atan() returns only 180 degree max (PI radians) but atan2() returns four quadrant's 360 degree max (2PI radians)
          currentRadiansAngle = Math.atan2(adjacentSide, oppositeSide);

          getRadiansInDegrees = currentRadiansAngle * 180 / Math.PI; //convert radians into degrees

          finalAngleInDegrees = -(getRadiansInDegrees - 135); //knob is already starting at -135 degrees due to visual design so 135 degrees needs to be subtracted to compensate for the angle offset, negative value represents clockwise direction

          //only allow rotate if greater than zero degrees or lesser than 270 degrees
          if(finalAngleInDegrees >= 0 && finalAngleInDegrees <= 300)
          {
              knob3.style.transform = "rotate(" + finalAngleInDegrees + "deg)"; //use dynamic CSS transform to rotate volume knob

              //270 degrees maximum freedom of rotation / 100% volume = 1% of volume difference per 2.7 degrees of rotation
              volumeSetting = Math.round(finalAngleInDegrees / (300 / 100));
              var voltValue = volumeSetting * (1/100); 
              document.getElementById("D").value = Math.floor(voltValue *10)/10 ;//+ "%"; //update volume text
              
             // document.getElementById("volumeValue").innerHTML = volumeSetting + "%"; //update volume text
          }
      }
	  
	  ///knob4/////
function onMouseMove4(event)
      {
          knobPositionX = boundingRectangle4.left; //get knob's global x position
          knobPositionY = boundingRectangle4.top; //get knob's global y position

          if(detectMobile() == "desktop")
          {
              mouseX = event.pageX; //get mouse's x global position
              mouseY = event.pageY; //get mouse's y global position
          } else {
              mouseX = event.touches[0].pageX; //get finger's x global position
              mouseY = event.touches[0].pageY; //get finger's y global position
          }

          knobCenterX = boundingRectangle4.width / 2 + knobPositionX; //get global horizontal center position of knob relative to mouse position
          knobCenterY = boundingRectangle4.height / 2 + knobPositionY; //get global vertical center position of knob relative to mouse position

          adjacentSide = knobCenterX - mouseX; //compute adjacent value of imaginary right angle triangle
          oppositeSide = knobCenterY - mouseY; //compute opposite value of imaginary right angle triangle

          //arc-tangent function returns circular angle in radians
          //use atan2() instead of atan() because atan() returns only 180 degree max (PI radians) but atan2() returns four quadrant's 360 degree max (2PI radians)
          currentRadiansAngle = Math.atan2(adjacentSide, oppositeSide);

          getRadiansInDegrees = currentRadiansAngle * 180 / Math.PI; //convert radians into degrees

          finalAngleInDegrees = -(getRadiansInDegrees - 135); //knob is already starting at -135 degrees due to visual design so 135 degrees needs to be subtracted to compensate for the angle offset, negative value represents clockwise direction

          //only allow rotate if greater than zero degrees or lesser than 270 degrees
          if(finalAngleInDegrees >= 0 && finalAngleInDegrees <= 300)
          {
              knob4.style.transform = "rotate(" + finalAngleInDegrees + "deg)"; //use dynamic CSS transform to rotate volume knob

              //270 degrees maximum freedom of rotation / 100% volume = 1% of volume difference per 2.7 degrees of rotation
              volumeSetting = Math.round(finalAngleInDegrees / (300 / 100));
              var voltValue = volumeSetting * (100/100); 
              document.getElementById("temp").value = voltValue;//+ "%"; //update volume text
              
             // document.getElementById("volumeValue").innerHTML = volumeSetting + "%"; //update volume text
          }
      }
    
      //detect for mobile devices from https://www.sitepoint.com/navigator-useragent-mobiles-including-ipad/
      function detectMobile()
      {
          var result = (navigator.userAgent.match(/(iphone)|(ipod)|(ipad)|(android)|(blackberry)|(windows phone)|(symbian)/i));

          if(result !== null)
          {
              return "mobile";
          } else {
              return "desktop";
          }
      }

      function getMouseDown()
      {
          if(detectMobile() == "desktop")
          {
              return "mousedown";
          } else {
              return "touchstart";
          }
      }

      function getMouseUp()
      {
          if(detectMobile() == "desktop")
          {
              return "mouseup";
          } else {
              return "touchend";
          }
      }

      function getMouseMove()
      {
          if(detectMobile() == "desktop")
          {
              return "mousemove";
          } else {
              return "touchmove";
          }
      }

      //main1();
	  //main2();
	  //main3();
	  //main4();

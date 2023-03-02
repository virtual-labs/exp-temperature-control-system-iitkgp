 
   /* This HTML page and script files are developed by
    Piyali Chattopadhyay
    Project Scientist-Technical,
    Virtual Labs IIT Kharagpur.*/      

	
/*$(document).ready(function(){
  $("#instcontrol").click(function(){
	//$("#inst").css("display","block");  
    $("#inst").slideDown();
  });
  //$(".btn2").click(function(){
    //$("p").slideDown();
  });	*/

/////////////////////////////////////////////ALL FUNCTIONS FOR ROTATING KNOBS///////////////////////////////////
var angle1= 0,angle2= 0,angle3= 0,angle4= 0,angle5= 0,angle6= 0,angle7= 0,angle8= 0,angle9= 0,angle10= 0;
function rotate1(){
	
	angle1++;
	var deg = angle1*20;
	//alert(deg);
	var knob1= document.getElementById('knob1');	
	knob1.style.transform="rotate("+deg+"deg)";
	 
   document.getElementById('P').stepUp(1);
   
   if( deg>200){
	alert('This is the highest value, can not rotate knob') ;  
	knob1.style.transform=null; 
	
	angle=0;
	return;
   }
    
 }
 function rotate2(){
	
	angle1--;
	var deg = angle1*20;
	//alert(deg);
	var knob1= document.getElementById('knob1');	
	knob1.style.transform="rotate("+deg+"deg)";
	 /*str1 = document.getElementById('span1').innerHTML;
	 sp = parseInt(str1 ,10)+n;
	 n++;
	 alert(sp);*/
	
   document.getElementById('P').stepDown(1);
   
   if(deg<0 ){
	alert('This is the lowest value, can not rotate knob') ;  
	knob1.style.transform=null; 
	
	angle=0;
	return;
   }
    
 }
 function rotate3(){
	
	angle2++;
	var deg = angle2*20;
	//alert(deg);
	var knob2= document.getElementById('knob2');	
	knob2.style.transform="rotate("+deg+"deg)";
	
   document.getElementById('I').stepUp(1);
   
   if( deg>200){
	alert('This is the highest value, can not rotate knob') ;  
	knob2.style.transform=null; 
	
	angle2=0;
	return;
   }
    
 }
 function rotate4(){
	
	angle2--;
	var deg = angle2*20;
	//alert(deg);
	var knob2= document.getElementById('knob2');	
	knob2.style.transform="rotate("+deg+"deg)";
	
   document.getElementById('I').stepDown(1);
   
   if(deg<0 ){
	alert('This is the lowest value, can not rotate knob') ;  
	knob2.style.transform=null; 
	
	angle2=0;
	return;
   }
    
 }
 function rotate5(){
	
	angle3++;
	var deg = angle3*20;
	//alert(deg);
	var knob3= document.getElementById('knob3');	
	knob3.style.transform="rotate("+deg+"deg)";
	
   document.getElementById('D').stepUp(1);
   
  
   
   if( deg>200){
	alert('This is the highest value, can not rotate knob') ;  
	knob3.style.transform=null; 
	
	angle3=0;
	return;
   }
    
 }
 function rotate6(){
	
	angle3--;
	var deg = angle3*20;
	//alert(deg);
	var knob3= document.getElementById('knob3');	
	knob3.style.transform="rotate("+deg+"deg)";
	
   document.getElementById('D').stepDown(1);
   
   if(deg<0 ){
	alert('This is the lowest value, can not rotate knob') ;  
	knob3.style.transform=null; 
	
	angle3=0;
	return;
   }
    
 }
 function rotate7(){
	
	angle4++;
	var deg = angle4*10;
	//alert(deg);
	var knob4= document.getElementById('knob4');	
	knob4.style.transform="rotate("+deg+"deg)";
	
   document.getElementById('temp').stepUp(1);//to show the setting of temperature
   document.getElementById('seudotemp').stepUp(1);//to keep the applied step volt at fixed value with changing temp
   
   if( deg>200){
	alert('This is the highest value, can not rotate knob') ;  
	knob4.style.transform=null; 
	
	angle4=0;
	return;
   }
    
 }
 function rotate8(){
	
	angle4--;
	var deg = angle4*10;
	//alert(deg);
	var knob4= document.getElementById('knob4');	
	knob4.style.transform="rotate("+deg+"deg)";
	
   document.getElementById('temp').stepDown(1);
   document.getElementById('seudotemp').stepDown(1);
   
   if(deg<0 ){
	alert('This is the lowest value, can not rotate knob') ;  
	knob4.style.transform=null; 
	
	angle4=0;
	return;
   }
    
 }
 
 /////////switch on off///////////////
 function OnOff(){
var myImage = document.getElementById('on-off');	 
 if(myImage.src.match("./images/off.png")){
	
	myImage.src = "./images/on.png";	
	document.getElementById('temp').style.color="red";
	
	document.getElementById('knob1').style['pointer-events'] = "auto";
	document.getElementById('knob2').style['pointer-events'] = "auto";
	document.getElementById('knob3').style['pointer-events'] = "auto";
	document.getElementById('knob4').style['pointer-events'] = "auto";
	
 }
else if(myImage.src.match("./images/on.png")){
	
	myImage.src = "./images/off.png";
	document.getElementById('temp').style.color="#A8AFB5";
	document.getElementById('knob1').style['pointer-events'] = "none";
	document.getElementById('knob2').style['pointer-events'] = "none";
	document.getElementById('knob3').style['pointer-events'] = "none";
	document.getElementById('knob4').style['pointer-events'] = "auto";
	
	
}	 
	 
 }
 
 /////////switch Run Wait///////////////
 function RunWait(){
var myImage = document.getElementById('run-wait');	 
 if(myImage.src.match("./images/off.png")){
	
	myImage.src = "./images/on.png";	
	
	
	document.getElementById('knob1').style['pointer-events'] = "auto";
	document.getElementById('knob2').style['pointer-events'] = "auto";
	document.getElementById('knob3').style['pointer-events'] = "auto";
	document.getElementById('knob4').style['pointer-events'] = "auto";
	
 }
else if(myImage.src.match("./images/on.png")){
	
	myImage.src = "./images/off.png";
	
	document.getElementById('knob1').style['pointer-events'] = "none";
	document.getElementById('knob2').style['pointer-events'] = "none";
	document.getElementById('knob3').style['pointer-events'] = "none";
	document.getElementById('knob4').style['pointer-events'] = "auto";
	
	
}	 
	 
 }

/////////switch Set Measure///////////////
 function SetMeasure(){
var myImage = document.getElementById('set-measure');	 
 if(myImage.src.match("./images/off.png")){
	
	myImage.src = "./images/on.png";	
	
	//openLoop();
	document.getElementById('knob1').style['pointer-events'] = "auto";
	document.getElementById('knob2').style['pointer-events'] = "auto";
	document.getElementById('knob3').style['pointer-events'] = "auto";
	document.getElementById('knob4').style['pointer-events'] = "auto";
	
 }
else if(myImage.src.match("./images/on.png")){
	
	myImage.src = "./images/off.png";
	
	document.getElementById('knob1').style['pointer-events'] = "none";
	document.getElementById('knob2').style['pointer-events'] = "none";
	document.getElementById('knob3').style['pointer-events'] = "none";
	document.getElementById('knob4').style['pointer-events'] = "auto";
	
	
}	 
	 
 }
//////////////////////////////////////////////STOP WATCH/////////////////////////////////////////////////////// 
/*let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;
function startwatch(){
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
};
function stopwatch(){
    clearInterval(int);
};
function resetwatch(){
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
};
function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
 timerRef.innerHTML =  `{h} : {m} : {s} : {ms}`;
}*/
 
 window.onload = function () {
  
  var seconds = 00; 
  var tens = 00; 
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ; var outputTemp;  

  buttonStart.onclick = function() {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }
  
   
  
  function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
	  
	  //PI_Testing();
	  if(document.getElementById('controltype').value == 1){
		 openLoop(); 
	  }
	  if(document.getElementById('controltype').value == 2){
		 P_Control(); 
	  }
	    
	  if(document.getElementById('controltype').value == 3){
		 PI_Control(); 
	  }
	  
	  if(document.getElementById('controltype').value == 4){
		 PID_Control(); 
	  }
	  
	  
	  
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  }

function openLoop(){
	
	//var ambT = parseFloat(document.getElementById('ambtemp').value);
	var secstr = document.getElementById('seconds').innerHTML;
	
	var secnum = (+secstr);
	console.log(secnum);
	var dc_k = parseFloat(132.2);// back calculation from lab test,where final value of oven 101.4 degreeC,ambient was 31.2. 
	 
	var pvalue =  document.getElementById('P').value;
	var kpMax = 20;
	var gain  = parseFloat(kpMax*pvalue);
	//alert(gain);
	var temp = document.getElementById('seudotemp').value;
	var sensorgain = parseFloat(10* Math.pow(10,-3));//in v...//10mv/degreC
	var stepVolt = parseFloat(temp*sensorgain*gain);
	
    var tau = 270;//70;//acc to matlab plot for 62.3% of final value 101.4
	var t = secnum;
	var td = 15;//delay time,from lab test and matlab plot approx less than 20,hence taking 15 avg value.
	var delay = parseFloat(t-td);
	
	//if(t < td){
		 //outputTemp = 0;
	//}
	//else if(t >= td){
	 var epow = parseFloat(parseFloat(t-td)/tau);	
	 outputTemp = parseFloat(stepVolt*dc_k*(1-Math.exp(-epow)));
	 var degreeC=parseFloat(28.2+outputTemp);
	 //alert(degreeC);
	//}
	//setTimeout(function() {
		if(degreeC<28.2){
			degreeC= 28.2;
		}
		else if(degreeC>=28.2){
			
			degreeC=parseFloat(28.2+outputTemp);
		}
	document.getElementById('temp').value = degreeC ; //taking average temp ambient as 27 degree
	//console.log(outputTemp);
	//},1000);
	
 }
 

function P_Control(){	
////acc. practical observation k= (101.4-31.2)/5 =14.04~ 14, from matlab plot with practical observation T1=61.25,T2=~20..so P setting is 60% or 0.6
	//var ambT = parseFloat(document.getElementById('ambtemp').value);
	var secstr = document.getElementById('seconds').innerHTML;
	
	var secnum = (+secstr);
	console.log(secnum);
	
	 
	var pvalue =  document.getElementById('P').value;
	var kpMax = 20;
	var kp  = parseFloat(kpMax*pvalue);
	//alert(kp);
	var temp = document.getElementById('seudotemp').value;
	//alert('tempP ='+temp);
	var sensorgain = parseFloat(10* Math.pow(10,-3));//in v...//10mv/degreC
	var stepVolt = parseFloat(temp*sensorgain);
	
    //var tau = 61.25;//acc to matlab and back calculation taking final value of oven 101.4 degreeC
	var t = secnum;

	//////Now 2nd order equn acc to plant equn///////////////////////////////
	var k = parseFloat(132.2);//from back calculation final value of oven 102.5 degreeC 
	var T1 =parseFloat(270);///acc. matlab
	var T2 =parseFloat(15);/// acc. matlab
	
	var wn = Math.sqrt((parseFloat(1+parseFloat(kp*k)))/(parseFloat(T1*T2)));
	//alert(wn);
	var zeta = parseFloat((0.5*((T1+T2)/(parseFloat(T1*T2))))*(parseFloat(1/wn)));
	//alert(zeta);
	
	var k_scnd = parseFloat(parseFloat((parseFloat(kp*k))/parseFloat(parseFloat(kp*k)+1))*stepVolt);
	var y = parseFloat(k_scnd*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
	var op_simulation = parseFloat(y*100);//actual output
	
	///////////////////Incorporating 12% stedystate error acc to lab test/////////////////////////
	//var op_err = parseFloat(op_simulation*0.15);
	
	if(op_simulation<28.2){
		
		op_simulation =28.2;// parseFloat(op_simulation+27);
		
	}																					//taking average temp ambient as 27 degree,in lab test it was 31.2
	else if(op_simulation>28.2){
		
		op_simulation = parseFloat(op_simulation);//-op_err);
	}
	document.getElementById('temp').value = parseFloat(op_simulation); 
	console.log(op_simulation);
	
	
	
	} 
	
	
	
	function PI_Control(){
		
	////acc. practical observation k= (101.4-31.2)/5 =14.04~ 14, from matlab plot with practical observation T1=61.25,T2=~20..
	//so acc. to Ziegler-Nichols Rule of tuning Kp= is (0.9/k)*(T1/T2)..P setting = 0.9approx
	//// Ki = 1/(3.3T2) I setting = 0.6 approx
	//var ambT = parseFloat(document.getElementById('ambtemp').value);
	var secstr = document.getElementById('seconds').innerHTML;
	
	var secnum = (+secstr);
	console.log(secnum);
	
	 
	var pvalue =  document.getElementById('P').value;
	var kpMax = 20;
	var kp  = parseFloat(kpMax*pvalue);
	//alert(kp);
	var ivalue =  document.getElementById('I').value;
	var kimax = parseFloat(0.024);
	var ki = parseFloat(kimax*ivalue);
	
	
	
	
	var temp = document.getElementById('seudotemp').value;
	//alert('tempPI ='+temp);
	var sensorgain = parseFloat(10* Math.pow(10,-3));//in v...//10mv/degreC
	var stepVolt = parseFloat(temp*sensorgain);
	
    
	var t = secnum;

	//////Now 2nd order equn acc to plant equn///////////////////////////////
	var k = parseFloat(132.2);//from Lab reports 
	var T1 =parseFloat(270);///acc. matlab
	var T2 =parseFloat(15);/// acc. matlab	
	//var ki= parseFloat(1/parseFloat(3.3*T2));
	// start math model
	
	var num1 = math.complex(-0.499827,0.0274715);	
	var num2 = math.complex(-0.034352,-0.625024);
	var exp1comp = math.multiply(num2,t);
	var exp1 = math.pow(math.e,exp1comp);
	var frstcomp = math.multiply(num1,exp1);
	
	var num3 = math.complex(0.993977,0.109593);
	var num4 = math.complex(0,1.25005);
	var exp2comp = math.multiply(num4,t);
	var exp2 = math.pow(math.e,exp2comp);
	var scndcomp = math.add(num3,exp2);
	
	var thirdcomp = math.multiply((-0.000346006),math.pow(math.e,math.multiply((-0.00166601),t)));
	
	var y =  math.multiply(stepVolt , math.add(math.multiply(frstcomp,scndcomp),thirdcomp,1));
	//var op_actual = math.add(27,y);
	var op_simulation = math.multiply(y.re,100);//in v 
	//now convert it to degree centigrate
	//0.01v = 1 degree centigrate
	//   1v = 1/0.01 = 100 degree centigrate
		if(op_simulation<28.2){
		
		op_simulation = 28.2;
		
	}																					//taking average temp ambient as 27 degree,in lab test it was 31.2
	else if(op_simulation>28.2){
		
		op_simulation = op_simulation;
	}
	document.getElementById('temp').value = op_simulation;// math.add(27,math.multiply(op_simulation,temp)) ; //taking average temp ambient as 27 degree
	//console.log(op_simulation);*/
	
	/*var wn = parseFloat(Math.sqrt(parseFloat((parseFloat(kp*k))/(parseFloat(T1*T2))))); /*----------Researched approximated model--------------*/
	/*console.log("wn ="+ wn);
	var zeta =  parseFloat(kp/(parseFloat(2*T1*T2*ki*wn)));
	console.log("zeta="+ zeta);
	
	
	var y = parseFloat(stepVolt*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
	var op_simulation = parseFloat(y*100);//actual output
	
	///////////////////Incorporating 12% stedystate error acc to lab test/////////////////////////
	//var op_err = parseFloat(op_simulation*0.15);
	
	if(op_simulation<31.2){
		
		op_simulation =31.2;// parseFloat(op_simulation+27);
		
	}																					//taking average temp ambient as 27 degree,in lab test it was 31.2
	else if(op_simulation>31.2){
		
		op_simulation = op_simulation;
	}
	document.getElementById('temp').value = parseFloat(op_simulation); 
	console.log(op_simulation);*/
	
}

function PID_Control(){
////acc. practical observation k= (101.4-31.2)/5 =14.04~ 14, from matlab plot with practical observation T1=61.25,T2=~20..so acc. to Ziegler-Nichols Rule of tuning Kp= is (0.9/k)*(T1/T2)..P setting = 0.9approx
	//// Ki = 1/(3.3T2) I setting = 0.6 approx
	//var ambT = parseFloat(document.getElementById('ambtemp').value);
	var secstr = document.getElementById('seconds').innerHTML;
	
	var secnum = (+secstr);
	console.log(secnum);
	
	 
	var pvalue =  document.getElementById('P').value;
	var kpMax = 20;
	var kp  = parseFloat(kpMax*pvalue);
	//alert(kp);
	var temp = document.getElementById('seudotemp').value;
	//alert('tempPID ='+temp);
	var sensorgain = parseFloat(10* Math.pow(10,-3));//in v...//10mv/degreC
	var stepVolt = parseFloat(temp*sensorgain);
	
    
	var t = secnum;

	//////Now 2nd order equn acc to plant equn///////////////////////////////
	var k = parseFloat(132.2);//from lab test
	var T1 =parseFloat(270);///lab test
	var T2 =parseFloat(15);/// acc.lab test	
	
	// start math model

	var num1= math.complex(-0.499898,-0.0619702);
	var num2= math.complex(-0.156577,-0.712152);
	var exp1comp= math.multiply(num2,t);
	var exp1 = math.pow(math.e,exp1comp);
	var frstcomp = math.multiply(num1,exp1);
	
	var num3= math.complex(0.96973,-0.244179);
	var num4= math.complex(0,1.4243);
	var exp2comp = math.multiply(num4,t);
	var exp2 = math.pow(math.e,exp2comp);
	var scndcomp= math.multiply(num3,exp2);
	
	/*var num5 = math.complex(0.050286,0.397152);
	var exp3comp= math.multiply(num5,t);
	var exp3 = math.pow(math.e,exp3comp);
	var thrdcomp = exp3;*/
	
	var frthcomp = math.multiply((-0.000204421),math.pow(math.e,math.multiply((-0.00202567),t)));
	
	var y = math.multiply(stepVolt,math.add(math.multiply(frstcomp,scndcomp),frthcomp,1));
	
	
	var op_simulation = math.multiply(y.re,100);//in v 
	//now convert it to degree centigrate
	//0.01v = 1 degree centigrate
	//   1v = 1/0.01 = 100 degree centigrate
		if(op_simulation<28.2){
		
		op_simulation = 28.2;//parseFloat(op_simulation+27);
		
	}																					//taking average temp ambient as 27 degree,in lab test it was 31.2
	else if(op_simulation>28.2){
		
		op_simulation = op_simulation;
	}
	document.getElementById('temp').value = op_simulation;
	//console.log(op_simulation);
	
	
}
  
 /*function PI_Testing(){
	 
	////acc. practical observation k= (101.4-31.2)/5 =14.04~ 14, from matlab plot with practical observation T1=61.25,T2=~20..so acc. to Ziegler-Nichols Rule of tuning Kp= is (0.9/k)*(T1/T2)..P setting = 0.9approx
	//// Ki = 1/(3.3T2) I setting = 0.6 approx
	//var ambT = parseFloat(document.getElementById('ambtemp').value);
	var secstr = document.getElementById('seconds').innerHTML;
	
	var secnum = (+secstr);
	console.log(secnum);
	
	 
	var pvalue =  document.getElementById('P').value;
	var kpMax = 20;
	var kp  = parseFloat(kpMax*pvalue);
	//alert(kp);
	var temp = document.getElementById('seudotemp').value;
	//alert('tempPI ='+temp);
	var sensorgain = parseFloat(10* Math.pow(10,-3));//in v...//10mv/degreC
	var stepVolt = parseFloat(temp*sensorgain);
	
    
	var t = secnum;

	//////Now 2nd order equn acc to plant equn///////////////////////////////
	/*var k = parseFloat(14.04);//from back calculation final value of oven 102.5 degreeC 
	var T1 =parseFloat(70);///acc. matlab
	var T2 =parseFloat(20);/// acc. matlab	
	
	// start math model 
	 
	var A = stepVolt;
	
	var wn = Math.sqrt(parseFloat(parseFloat(14.04*0.6)/20));
	
	var zeta = parseFloat(1/parseFloat(2*20*wn));
	
	var zwn = parseFloat(zeta*wn);
	
	var zprt = parseFloat(Math.sqrt(parseFloat(parseFloat(1.0000)- parseFloat(Math.pow(zeta,2)))));

	
	var epart = parseFloat(Math.pow(2.7182,parseFloat(-(zwn*t))));
	
	var s1 = parseFloat(epart/zprt);
	var wd = parseFloat(wn*zprt);
	var phi = parseFloat(Math.acos(zeta));
	var s2 = Math.sin(parseFloat(parseFloat(wd*t) + phi));
	
	var scndprt = parseFloat(s1*s2);
	var output = parseFloat(A*(parseFloat(1.0000)-scndprt));//in volt
	console.log("volt="+ output);
	
	var opt = parseFloat(output*100);//in centigrate
	
	document.getElementById('temp').value = opt ; 
	console.log("temp="+ opt); 
	 
 }*/
 
} 

 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////Table Creation//////////////////////////////////////////////////////////////////////////////////////
 
 var tabrowindex = 0;
var arr = [];
var table;

var chart;

// var showAlert;
//------------------------------------------------- Table Creation -----------------------------------------------//
function createTable() {//Ec = 220v


    arr[0] = tabrowindex+1 ;
    arr[1] = document.getElementById("seconds").innerHTML;
    arr[2] = document.getElementById("temp").value;
   
	
	table = document.getElementById("myTable");
        
    var row = table.insertRow(++tabrowindex);
   
    if (table.rows.length <= 500) {
        
         // Row increment
        for (var q = 0; q < 3; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];

    }

    }

}    
 

  
/////////////////////////////////////////////////////////////////////Plot creation Torque vs. Speed////////////////////////////////////////////////////////////////////////// 



	var y = new Array();
    var dataPoints1=[];
	
	
	function plot(){
	 document.getElementById('plotbucket').style.display  = "block"; 
	 document.getElementById('chartContainer').style.display  = "block";
	 document.getElementById('result').style.display  = "block";
 
    var table1 = document.getElementById('myTable');
    for (var tabrowindex1 = 1; tabrowindex1 < table1.rows.length; tabrowindex1++) {
        var rwe1 = table1.rows[tabrowindex1].cells;

        dataPoints1.push({x: parseFloat((rwe1[1].innerHTML)), y: parseFloat(rwe1[2].innerHTML)});
    }
 
	
 
	var chart = new CanvasJS.Chart("chartContainer",
    {
      //animationEnabled: true,
		  //animationDuration: 10000, 
	  title:{
      text: "Temperature Vs. Time Plot "
	  
      },
	  
	  axisX:
	  
	  {
        interlacedColor: "#B2F9FA",
        title: "Time(sec)"
      },
	  
	  
	  
	  
	  
    axisY: 
	      {// Y axis
            title: "Temperature",
			
			//maximum:28,
        },
		
		
	data: [
      {        
        type: "spline",
		color:"109DB6",
        dataPoints:dataPoints1
	
       },
       
      ]	
	});

	chart.render();
	
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
	}
 
 
 function showcalcDiv(){
	 
	 if(document.getElementById('controltype').value == 1){
		 
		 document.getElementById('calcbucket').style.display  = "block";
		 document.getElementById('oltf').style.display = "block";
		 document.getElementById('Presult').style.display = "none";
		  document.getElementById('calculate').style.display = "none";
		 //document.getElementById('PIresult').style.display = "none";
		 //document.getElementById('PIDresult').style.display = "none";
		 
		 
	 }
	 else if(document.getElementById('controltype').value == 2){
		 
		 document.getElementById('calcbucket').style.display  = "block";
		 
		 document.getElementById('oltf').style.display = "none";
		 document.getElementById('Presult').style.display = "block";
		  document.getElementById('calculate').style.display = "block";
		 //document.getElementById('PIresult').style.display = "none";
		 //document.getElementById('PIDresult').style.display = "none";
		 
		 
	 }
	  else if(document.getElementById('controltype').value == 3){
		  
		  document.getElementById('calcbucket').style.display  = "block";
		 
		 document.getElementById('oltf').style.display = "none";
		 //document.getElementById('PIresult').style.display = "block";
		 document.getElementById('Presult').style.display = "block";
		  document.getElementById('calculate').style.display = "block";
		 //document.getElementById('PIDresult').style.display = "none";
		 
		 
	 }
	  else if(document.getElementById('controltype').value == 4){
		  
		  document.getElementById('calcbucket').style.display  = "block";
		 
		 document.getElementById('oltf').style.display = "none";
		 //document.getElementById('PIDresult').style.display = "block";
		 document.getElementById('Presult').style.display = "block";
		  document.getElementById('calculate').style.display = "block";
		 //document.getElementById('PIresult').style.display = "none";
		 
		 
	 } 
	 
	 
	 
 }

 function calc(){
	 
	var fv = parseFloat(document.getElementById('fv').value);
	var tp = parseFloat(document.getElementById('tp').value);
	var temp = document.getElementById('seudotemp').value;
	alert('tempclc ='+temp);
	document.getElementById('ess').value =  parseFloat(parseFloat(parseFloat(temp-fv)/temp)*100);
	document.getElementById('ov').value  =  parseFloat(parseFloat(parseFloat(tp-fv)/fv)*100);	 
	 
 }
 
 function Refresh(){
	var temp = document.getElementById('seudotemp').value;
	var Dtable= document.getElementById('myTable');
	var Trow = Dtable.rows.length;
	for (var i= Trow-1;i>0;i--){

	Dtable.deleteRow(i);
	}
	//Dtable.style.display="none";
	tabrowindex=0;
	dataPoints1 = [];
	document.getElementById('plotbucket').style.display="none"; 
	document.getElementById('temp').value =temp;	 
	document.getElementById('Presult').style.display = "none"; 
	document.getElementById('oltf').style.display = "none";
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
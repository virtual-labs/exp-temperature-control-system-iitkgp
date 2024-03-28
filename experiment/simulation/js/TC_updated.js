 
   /* This HTML page and script files are developed by
    Piyali Chattopadhyay
    Project Scientist-Technical,
    Virtual Labs IIT Kharagpur.*/      

	

 
 /////////switch on off///////////////
 function OnOff(){
var myImage = document.getElementById('on-off');
var ambient = document.getElementById('ambT').value;	
 
 if(myImage.src.match("./images/off.png")&& (document.getElementById('temp').value==0 || document.getElementById('temp').value==ambient)){
	
	myImage.src = "./images/on.png";	
	document.getElementById('temp').style.color="red";
	
	document.getElementById('knob1').style['pointer-events'] = "auto";
	document.getElementById('knob2').style['pointer-events'] = "auto";
	document.getElementById('knob3').style['pointer-events'] = "auto";
	document.getElementById('knob4').style['pointer-events'] = "auto";
	//document.getElementById('temp').value = 5;
 }
else if(myImage.src.match("./images/on.png")){
	
	myImage.src = "./images/off.png";
	document.getElementById('temp').style.color="#A8AFB5";
	document.getElementById('knob1').style['pointer-events'] = "none";
	document.getElementById('knob2').style['pointer-events'] = "none";
	document.getElementById('knob3').style['pointer-events'] = "none";
	document.getElementById('knob4').style['pointer-events'] = "auto";
	//document.getElementById('temp').value = 0;
	//Cool();
	coolPlant();
	
}
else if(myImage.src.match("./images/off.png") && (document.getElementById('temp').value!=0 || document.getElementById('temp').value!=ambient)){
	alert('Allow the oven to reach room temperature. Wait for a while.');
}


 }
 
 /////////switch Run Wait///////////////
 function RunWait(){
var myImage = document.getElementById('run-wait');	 
 if(myImage.src.match("./images/off.png")){
	
	myImage.src = "./images/on.png";	
	
 }
else if(myImage.src.match("./images/on.png")){
	
	myImage.src = "./images/off.png";
}	 
	 
 }

/////////switch Set Measure///////////////
 function SetMeasure(){
var myImage = document.getElementById('setm');
var settemp = Number(document.getElementById('seudotemp').value);
var ambtemp = Number(document.getElementById('ambT').value);

 if(myImage.src.match("./images/off.png")){
	
	myImage.src = "./images/on.png";	
	document.getElementById('temp').value = ambtemp;
 }
else if(myImage.src.match("./images/on.png")){
	
	myImage.src = "./images/off.png";
	document.getElementById('temp').value = settemp;
}	 
	 
 }

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
      //console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
	  
	  //PI_Testing();
	  if(document.getElementById('controltype').value == 1 && document.getElementById('setm').src.match('./images/on.png') && document.getElementById('run-wait').src.match('./images/off.png')){
		 openLoop(); 
	  }
	  if(document.getElementById('controltype').value == 2 && document.getElementById('setm').src.match('./images/on.png') && document.getElementById('run-wait').src.match('./images/off.png')){
		 P_Control(); 
	  }
	    
	  if(document.getElementById('controltype').value == 3 && document.getElementById('setm').src.match('./images/on.png') && document.getElementById('run-wait').src.match('./images/off.png')){
		 PI_Control(); 
	  }
	  
	  if(document.getElementById('controltype').value == 4 && document.getElementById('setm').src.match('./images/on.png') && document.getElementById('run-wait').src.match('./images/off.png')){
		 PID_Control(); 
	  }
	  
	  
	  
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  }


function openLoop(){
	
	var ambient = parseFloat(Number(document.getElementById('ambT').value));///room temperature entered by user
	console.log('ambT =' + ambient);
	
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
	 var degreeC=parseFloat(ambient+outputTemp);
	 //alert(degreeC);
	//}
	//setTimeout(function() {
		if(degreeC<ambient){
			degreeC= ambient;
		}
		else if(degreeC>=ambient){
			
			degreeC=parseFloat(ambient+outputTemp);
		}
	document.getElementById('temp').value = degreeC ; //taking average temp ambient as 27 degree
	
 }
 

function P_Control(){	
///kp= 1/k.(T1/T2) = 0.136...P setting = 0.136/0.2 = 0.68 = 0.7 approax


var ambient = parseFloat(Number(document.getElementById('ambT').value));///room temperature entered by user
	var secstr = document.getElementById('seconds').innerHTML;
	
	var secnum = (+secstr);
	console.log(secnum);
	
	 
	var pvalue =  document.getElementById('P').value;
	var kpMax = 20;
	var kpMaxV = 0.2;///in v/deg C
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
	
	var wn = Math.sqrt((parseFloat(1+parseFloat(kp*k*0.01)))/(parseFloat(T1*T2)));
	//alert(wn);
	var zeta = parseFloat((0.5*((T1+T2)/(parseFloat(T1*T2))))*(parseFloat(1/wn)));
	//alert(zeta);
	
	var k_scnd = parseFloat(parseFloat((parseFloat(kp*k))/parseFloat(parseFloat(kp*k*0.01)+1))*stepVolt);
	var y = parseFloat(k_scnd*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
	var op_simulation = y;//parseFloat(y*100);//actual output
	
	///////////////////Incorporating 12% stedystate error acc to lab test/////////////////////////
	//var op_err = parseFloat(op_simulation*0.15);
	
	if(op_simulation<ambient){
		
		op_simulation =ambient;// parseFloat(op_simulation+27);
		
	}																					//taking average temp ambient as 27 degree,in lab test it was 31.2
	else if(op_simulation>ambient){
		
		op_simulation = parseFloat(op_simulation);//-op_err);
	}
	document.getElementById('temp').value = parseFloat(op_simulation); 
	console.log(op_simulation);
	
	
	} 
	
	
	
	function PI_Control(){
		
	////acc. practical observation k= 132.2, from matlab plot with practical observation T1=270,T2=~15..kpmax = 20, kimax = 0.024
	//so acc. to Ziegler-Nichols Rule of tuning Kp= is (0.9/k)*(T1/T2)= 0.122..P setting = (0.122/(20X0.01))= 0.6approx
	//// Ki = 1/(3.3T2)= 0.020 I setting = (0.020/0.024) = 0.8 approx
	
	var ambient = parseFloat(Number(document.getElementById('ambT').value));///room temperature entered by user
	var secstr = document.getElementById('seconds').innerHTML;
	
	var secnum = (+secstr);
	
	
	 
	var pvalue =  document.getElementById('P').value;
	var kpMax = 20;///in v/deg C
	var kpgain  = math.multiply(kpMax,pvalue);//in v/deg c
	
	var ivalue =  document.getElementById('I').value;
	var kimax = 0.024;
	var kigain = math.multiply(kimax,ivalue);
	
	/* console.log('kp ='+ kpgain);
	console.log('ki='+ kigain); */
	
	
	var temperature = document.getElementById('seudotemp').value;
	//alert('tempPI ='+temp);
	var sensorgain = 0.01;///parseFloat(10* Math.pow(10,-3));//in v...//10mv/degreC
	var A = math.multiply(temperature,sensorgain);
	//console.log('stepVolt'+A);
    
	var t = secnum;

	//////Now 2nd order equn acc to plant equn///////////////////////////////
	var dcgain = 132.2;
	var timeconstant = 270;
	var delaytime = 15;
	
	var factor = math.multiply(timeconstant,delaytime);
	
	var c1 = math.divide(math.multiply(dcgain,kigain,0.01),factor);
	var c2 = math.divide(math.add(1,math.multiply(dcgain,0.01,kpgain)),factor);
	var c3 = math.divide(math.add(timeconstant,delaytime),factor);
	var c4 = 1;
	
	
	var pols = math.polynomialRoot(c1,c2,c3,c4);
	
	var pol1 = pols[0];
	var pol2 = pols[1];
	var pol3 = pols[2];
	
	/* console.log('pol1 ='+ pol1);
	console.log('pol2 ='+ pol2);
	console.log('pol3 ='+ pol3); */
	
	var LHS_B = math.divide(math.multiply(A,dcgain,kigain),factor);
	var LHS_C = math.divide(math.multiply(A,dcgain,math.add(math.multiply(kpgain,pol1),kigain)),factor);
	var LHS_D = math.divide(math.multiply(A,dcgain,math.add(math.multiply(kpgain,pol2),kigain)),factor);
	var LHS_E = math.divide(math.multiply(A,dcgain,math.add(math.multiply(kpgain,pol3),kigain)),factor);
	
	/* var dco1 = math.divide(math.multiply(A,dcgain,math.add(math.multiply(kpgain,pol3),kigain)),math.multiply(pol3,math.subtract(pol3,pol1)));
	var dco2 = math.divide(math.multiply(A,dcgain,math.add(math.multiply(kpgain,pol2),kigain)),math.multiply(pol2,math.subtract(pol2,pol1)));
	var D = math.divide(math.subtract(dco1,dco2),math.subtract(pol3,pol2));
	var E = math.subtract(dco1, math.multiply(D,pol3));
	
	var A1 = math.divide(math.add(math.multiply(D,pol2),E),math.subtract(pol2,pol3));
	var A2 = math.divide(math.add(math.multiply(D,pol3),E),math.subtract(pol3,pol2)); */
	
	var RHS_B = math.multiply(math.subtract(0,pol1),math.subtract(0,pol2),math.subtract(0,pol3));
	var RHS_C = math.multiply(pol1,math.subtract(pol1,pol2),math.subtract(pol1,pol3));
	var RHS_D = math.multiply(pol2,math.subtract(pol2,pol1),math.subtract(pol2,pol3));
	var RHS_E = math.multiply(pol3,math.subtract(pol3,pol1),math.subtract(pol3,pol2));
	
	var B = math.divide(LHS_B,RHS_B);
	var C = math.divide(LHS_C,RHS_C);
	var D = math.divide(LHS_D,RHS_D);
	var E = math.divide(LHS_E,RHS_E);
	
	console.log('B =' + B);
	console.log('C =' + C);
	console.log('D =' + D);
	console.log('E =' + E);
	
	var opTemp = math.add(B,math.multiply(C,math.pow(math.e,math.multiply(pol1,t))),math.multiply(D,math.pow(math.e,math.multiply(pol2,t))),math.multiply(E,math.pow(math.e,math.multiply(pol3,t))));

	var Act_output = (opTemp.re);
	
		if(Act_output < ambient){
		
		Act_output = ambient;
		
	}																					//taking average temp ambient as 27 degree,in lab test it was 31.2
	else if(Act_output > ambient){
		
		Act_output = Act_output;
	}
	$('#temp').val(Act_output);
	

}

function PID_Control(){
////acc. practical observation k= 132.2, from matlab plot with practical observation T1=270,T2=~15..kpmax = 20, kimax = 0.024
	//so acc. to Ziegler-Nichols Rule of tuning Kp= is (1.2/k)*(T1/T2)= 0.163..P setting = (0.122/(20X0.01))= 0.8approx
	//// Ki = 1/(2T2)= 0.03 I setting = (0.03/0.024) = 1.38 = 1 approx
	///kd = 0.5T2 = 7.5...D setting = 7.5/23.5 = 0.3 approax
	
	var ambient = parseFloat(Number(document.getElementById('ambT').value));///room temperature entered by user
	var secstr = document.getElementById('seconds').innerHTML;
	
	var secnum = (+secstr);
	
	
	 
	var pvalue =  document.getElementById('P').value;
	var kpMax = 20;///in v/deg C
	var kpgain  = math.multiply(kpMax,pvalue);//in v/deg c
	
	var ivalue =  document.getElementById('I').value;
	var kimax = 0.024;
	var kigain = math.multiply(kimax,ivalue);
	
	var dvalue = $('#D').val();
	var kdmax = 23.5;
	var kdgain = math.multiply(kdmax,dvalue);
	
	/* console.log('kp ='+ kpgain);
	console.log('ki='+ kigain); */
	
	
	var temperature = document.getElementById('seudotemp').value;
	//alert('tempPI ='+temp);
	var sensorgain = 0.01;///parseFloat(10* Math.pow(10,-3));//in v...//10mv/degreC
	var A = math.multiply(temperature,sensorgain);
	//console.log('stepVolt'+A);
    
	var t = secnum;

	//////Now 2nd order equn acc to plant equn///////////////////////////////
	var dcgain = 132.2;
	var timeconstant = 270;
	var delaytime = 15;
	
	var factor = math.multiply(timeconstant,delaytime);
	
	var c1 = math.divide(math.multiply(dcgain,kigain,0.01),factor);
	var c2 = math.divide(math.add(1,math.multiply(dcgain,0.01,kpgain)),factor);
	var c3 = math.divide(math.add(timeconstant,delaytime,math.multiply(dcgain,kdgain,0.01)),factor);
	var c4 = 1;
	
	
	var pols = math.polynomialRoot(c1,c2,c3,c4);
	
	var pol1 = pols[0];
	var pol2 = pols[1];
	var pol3 = pols[2];
	
	/* console.log('pol1 ='+ pol1);
	console.log('pol2 ='+ pol2);
	console.log('pol3 ='+ pol3); */
	
	var LHS_B = math.divide(math.multiply(A,dcgain,kigain),factor);
	var LHS_C = math.divide(math.multiply(A,dcgain,math.add(math.multiply(kdgain,math.pow(pol1,2)),math.multiply(kpgain,pol1),kigain)),factor);
	var LHS_D = math.divide(math.multiply(A,dcgain,math.add(math.multiply(kdgain,math.pow(pol2,2)),math.multiply(kpgain,pol2),kigain)),factor);
	var LHS_E = math.divide(math.multiply(A,dcgain,math.add(math.multiply(kdgain,math.pow(pol3,2)),math.multiply(kpgain,pol3),kigain)),factor);
	
	/* var dco1 = math.divide(math.multiply(A,dcgain,math.add(math.multiply(kpgain,pol3),kigain)),math.multiply(pol3,math.subtract(pol3,pol1)));
	var dco2 = math.divide(math.multiply(A,dcgain,math.add(math.multiply(kpgain,pol2),kigain)),math.multiply(pol2,math.subtract(pol2,pol1)));
	var D = math.divide(math.subtract(dco1,dco2),math.subtract(pol3,pol2));
	var E = math.subtract(dco1, math.multiply(D,pol3));
	
	var A1 = math.divide(math.add(math.multiply(D,pol2),E),math.subtract(pol2,pol3));
	var A2 = math.divide(math.add(math.multiply(D,pol3),E),math.subtract(pol3,pol2)); */
	
	var RHS_B = math.multiply(math.subtract(0,pol1),math.subtract(0,pol2),math.subtract(0,pol3));
	var RHS_C = math.multiply(pol1,math.subtract(pol1,pol2),math.subtract(pol1,pol3));
	var RHS_D = math.multiply(pol2,math.subtract(pol2,pol1),math.subtract(pol2,pol3));
	var RHS_E = math.multiply(pol3,math.subtract(pol3,pol1),math.subtract(pol3,pol2));
	
	var B = math.divide(LHS_B,RHS_B);
	var C = math.divide(LHS_C,RHS_C);
	var D = math.divide(LHS_D,RHS_D);
	var E = math.divide(LHS_E,RHS_E);
	
	console.log('B =' + B);
	console.log('C =' + C);
	console.log('D =' + D);
	console.log('E =' + E);
	
	var opTemp = math.add(B,math.multiply(C,math.pow(math.e,math.multiply(pol1,t))),math.multiply(D,math.pow(math.e,math.multiply(pol2,t))),math.multiply(E,math.pow(math.e,math.multiply(pol3,t))));

	var Act_output = (opTemp.re);
	
		if(Act_output < ambient){
		
		Act_output = ambient;
		
	}																					//taking average temp ambient as 27 degree,in lab test it was 31.2
	else if(Act_output > ambient){
		
		Act_output = Act_output;
	}
	$('#temp').val(Act_output);
	
	
}
  
 
} 


///function for cooling of oven after switching off the unit for openloop , p, pi, pid all controls.
///After practical lab test it is observed that the cooling of oven is a time curve from 93.6 deg C to 33 deg C. Time constant is 600 sec. of the decaying graph
var coolOven;

function Cool(){
//clearInterval(coolOven);
coolOven = setInterval("cooling();", 1000);
}

function stopUpdate(){ 
 clearInterval(coolOven);
 }
 function coolPlant(){
	 var ambient = Number(document.getElementById('ambT').value);
	 var temperature = Number(document.getElementById('temp').value);
	 
	 if(document.getElementById('temp').value != ambient){
		 Cool();	
	 }
 }

var timer = 0;
function cooling(){
	if(document.getElementById('on-off').src.match('./images/off.png')){
	timer++;
var finalTemp = Number(document.getElementById('temp').value);
var ambTemp = Number(document.getElementById('ambT').value);

var sensorgain = 0.01;
var A = math.multiply(finalTemp,sensorgain);
var timec = 600;///T1 = 600 sec

var dck = math.divide(1,timec);
var epow = -math.divide(timer,timec);
var cooltemp = math.multiply(A,dck,math.pow(math.e,epow));///in volt	

var degc = math.subtract(finalTemp,math.multiply(cooltemp,100));///math.subtract(finalTemp,cooltemp);

if(degc>ambTemp){
degc = math.subtract(finalTemp,math.multiply(cooltemp,100));//math.subtract(finalTemp,cooltemp);	
}
if(degc<=ambTemp){
degc = ambTemp;	
clearInterval(coolOven);
alert('Plant is ready. Start experiment.');
}

$('#temp').val(degc);

	}

	
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
		var dataPoints1=[];
		var dataPoints2=[];///down x-axis 
	var dataPoints3=[];///up x-axis to show slope touching points
	
	 document.getElementById('plotbucket').style.display  = "block"; 
	 document.getElementById('chartContainer').style.display  = "block";
	 document.getElementById('result').style.display  = "block";
	 
	if(document.getElementById('controltype').value == 1){
	document.getElementById("slopeline").style.display="block";
	document.getElementById("btnangl").style.visibility ="visible";
	document.getElementById("btnlngth").style.visibility ="visible";
	document.getElementById("btnhpos").style.visibility ="visible";
	document.getElementById("btnvpos").style.visibility ="visible";		
	} 
	 
	 if(document.getElementById('controltype').value != 1){
	document.getElementById("slopeline").style.display="none";
	document.getElementById("btnangl").style.visibility ="hidden";
	document.getElementById("btnlngth").style.visibility ="hidden";
	document.getElementById("btnhpos").style.visibility ="hidden";
	document.getElementById("btnvpos").style.visibility ="hidden";		
	} 
	 
    var table1 = document.getElementById('myTable');
    for (var tabrowindex1 = 1; tabrowindex1 < table1.rows.length; tabrowindex1++) {
        var rwe1 = table1.rows[tabrowindex1].cells;
		var val = document.querySelector('table tr:last-child td:last-child').innerHTML;
        dataPoints1.push({x: parseFloat((rwe1[1].innerHTML)), y: parseFloat(rwe1[2].innerHTML)});
		
		if(document.getElementById('controltype').value == 1){		
		dataPoints2.push({x: parseFloat((rwe1[1].innerHTML)), y: (0)});
		dataPoints3.push({x: parseFloat((rwe1[1].innerHTML)), y: parseFloat(Number(val))});
		}
		if(document.getElementById('controltype').value != 1){		
		dataPoints2.push({x: parseFloat((0)), y: (0)});
		dataPoints3.push({x: parseFloat((0)), y: parseFloat(0)});
		}
    }
 
	
 
	var chart = new CanvasJS.Chart("chartContainer",
    {
      //animationEnabled: true,
		  //animationDuration: 10000, 
	  title:{
      text: "Temperature Vs. Time Plot "
	  
      },
	  toolTip: {
		fontColor: "black",
		},
	  axisX:[
	  
	  {
        interlacedColor: "#B2F9FA",
        title: "Time (sec)"
      },
	  {/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
	  
	  ],
	  axisX2: {
        title: "",
		gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
      },
	  
	  
    axisY: 
	      {// Y axis
            title: "Temperature (\u00B0C)",
			
        },
		
		
	data: [
      { 
		 axisXType: "primary",
        type: "spline",
		color:"109DB6",
        dataPoints:dataPoints1
	
       },
      {
		 axisXType: "primary", 
        type: "line",
		color:"#D8D8D8",
		 markerSize: 2,
        dataPoints:dataPoints2
	  },
	  {
		 axisXType: "secondary", 
        type: "line",
		color:"#ae061f",
		 markerSize: 2,
        dataPoints:dataPoints3
	  }
	   
      ],	
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
	if(document.getElementById('controltype').value == 1){
		
	var pvalue = $('#P').val();	
		
		
	var dck = $('#dcgain').val();
	var tc = $('#tau').val();
	var dt = $('#delaytime').val();
	$('#tfn1').val(dck);
	$('#tfn').val(dt);	
	$('#tfd').val(tc);
		
	}
	
	if(document.getElementById('controltype').value != 1){	
	var fv = parseFloat(document.getElementById('fv').value);
	var tp = parseFloat(document.getElementById('tp').value);
	var temp = document.getElementById('seudotemp').value;
	//alert('tempclc ='+temp);
	document.getElementById('ess').value =  parseFloat(parseFloat(Math.abs(parseFloat(temp-fv))/temp)*100);
	document.getElementById('ov').value  =  parseFloat(parseFloat(parseFloat(tp-fv)/fv)*100);	 
	} 
 }
 
 function Refresh(){
	//var temp = document.getElementById('seudotemp').value;
	var Dtable= document.getElementById('myTable');
	var Trow = Dtable.rows.length;
	for (var i= Trow-1;i>0;i--){

	Dtable.deleteRow(i);
	}
	//Dtable.style.display="none";
	tabrowindex=0;
	dataPoints1 = [];
	document.getElementById('plotbucket').style.display="none"; 
	document.getElementById('tp').value = 0;	
	document.getElementById('fv').value = 0;
	document.getElementById('ess').value = 0;
	document.getElementById('ov').value = 0;
	document.getElementById('Presult').style.display = "none"; 
	document.getElementById('oltf').style.display = "none";
	
	document.getElementById('plot').disabled =true;
	document.getElementById('tabled').disabled =true;
	document.getElementById('refresh').disabled =true;
 }
 
 
 ///////////////////////////////////////Slope section//////////////////////////////////
var pos = 10;  
	var countL = 0;  
	function moveL(){
	countL++;
		
	document.getElementById('slopeline').style.left = (pos+countL) + '%';	
		
	}  
	function moveR(){
	countL--;
		
	document.getElementById('slopeline').style.left = (pos+countL) + '%';	
		
	}   
	  
	var posT = 20;  
	var countT = 0;  
	function moveT(){
	countT++;
		
	document.getElementById('slopeline').style.top = (posT+countT) + '%';	
		
	}  
	function moveD(){
	countT--;
		
	document.getElementById('slopeline').style.top = (posT+countT) + '%';	
		
	}    
	
	var angle = 0;	
	function rotateLine(){
	angle++;
	var deg = angle*4;
	//alert(deg);
	
	var obj = document.getElementById('slopeline');
	
	obj.style.transform ="rotate("+deg+"deg)";
	//obj.style.transformOrigin ="49.8% 51%";	
		
	}  
	function rotateLineRev(){
	angle--;
	var deg = angle*4;
	//alert(deg);
	
	var obj = document.getElementById('slopeline');
	
	obj.style.transform ="rotate("+deg+"deg)";
	//obj.style.transformOrigin ="49.8% 51%";	
		
	}    
	var length = 80;///slope height  
	var countH = 0;  
	function InLine(){
	countH++;
		
	document.getElementById('slopeline').style.height = (length+countH) + '%';	
		
	}  
	function DeLine(){
	countH--;
		
	document.getElementById('slopeline').style.height = (length+countH) + '%';	
		
	}    

/////////////////////////////////////////////////////////////////////////////////////////
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
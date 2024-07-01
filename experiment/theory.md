# Theory

The first step in the analysis of control system is to derive the mathematical model of the complete system. This would help in understanding the working of the complete system.


**The Plant (Oven)**

The plant to be controlled is an electric oven, the temperature of which must adjust itself in accordance with the reference or command. This is a thermal system which basically involves transfer of heat from one section to another. In present case we are interested in transfer of heat from heater coil to the oven and leakage of heat from the oven to the atmosphere. Here, a lumped parameter model is considered. For precise analysis, a distributed parameter model must be used. Another difficulty associated with temperature control system is that the temperature rise is produced by energy input, which is controllable but the temperature fall is due to heat loss, which is uncontrollable. There are three modes of heat transfer viz. conduction, convection, radiation. Heat transfer through radiation may be neglected in the present case since the temperatures involved are quite small. 


<div align="center">				
<img alt="" src="./images/fig2.png" class = "img-fluid">

<b>Fig.1. Electrical Analogy</b>
</div>


<div align="center">				
<img alt="" src="./images/fig3.png" class = "img-fluid">

<b>Fig.2. Closed loop Temperature Control System</b>
</div>


For conductive and convective heat transfer,

$$ {\Theta = \alpha \Delta T} \tag{1}$$

where, <span style="font-family:'Bodoni MT'">&Theta;</span>  = Rate of heat flow in Joule/sec.

&Delta;<i style="font-family:'Bodoni MT'">T</i>  = Temperature difference in  &deg;C

<i style="font-family:'Bodoni MT'">&alpha;</i> = Constant


Under assumption of linearity, the themal resistance is defined as, 

$$R = \frac{ Temperature \ difference \ }{rate \ of \ heat \ flow}$$

$$ = \frac{\Delta T}{\Theta} = \frac{1}{\alpha} $$

This is analogous to electrical resistance defined by <span style="font-family:'Bodoni MT'">I = V/R</span>. In a similar manner thermal capacitance of the mass is defined by

$$ \Theta = C \ \frac{d(\Delta T)}{dT} \tag{2}$$

which is analogous to the <span style="font-family:'Bodoni MT'">V - I</span> relationship of a capacitor, namely <span style="font-family:'Time New Roman'">I = <i>C</i> dV/dt</span>. In the case of heat,

<i style="font-family:'Bodoni MT'">C</i> = Rate of heat flow / Rate of temperature change. 


The equation of an oven may now be written by combining the equations 1-2, implying
that a part of the heat input is used in increasing the temperature of the oven and the rest goes
out as loss. Thus

$$ \Theta = C \ \frac{dT}{dt} + \frac{1}{R} \ T, \tag{3}$$

with the initial condition <span style="font-family:'Bodoni MT'"><i>T</i> (t = 0) = <i>T</i><sub>amb</sub></span>. Now, taking Laplace transform with zero
initial condition,

$$ \frac{T(s)}{\Theta(s)} = \frac{R}{1+sCR} \tag{4}$$
An analogous electrical network and block diagram may be drawn as shown in Fig. 1, defined
by the equation 

$$I = C \frac{dV}{dt} + \frac{V}{R} \tag{5}$$

The temperature rise in response to the heat input is not instantaneous. A certain amount
of time is needed to transfer the heat by convection and conduction inside the oven. This requires a delay or transportation lag term, 

<span style="font-family:'Bodoni MT';font-size:20px"><i>e</i><sup><i>-sT</i><sub>2</sub></sup></span>, to be included in the transfer


function, where <span style="font-family:'Time New Roman'"><i>T</i><sub>2</sub></span> is the time lag in seconds.


The open loop transfer function of the plant is given by 

$$ G(s)= \frac{ke^{-sT_2}}{1+sT_1} \tag{6}$$

<br>where <i style="font-family:'Bodoni MT';font-size:18px">k</i> = DC gain of the system, <span style="font-family:'Bodoni MT'"><i>T</i><sub>1</sub></span> = Time Constant , <span style="font-family:'Bodoni MT'"><i>T</i><sub>2</sub></span> = Delay Time


<div align = "center">
<img alt=""  src="./images/ol.png" class="img-fluid">

<b>Fig. 3. Open loop response of the oven</b>
</div>

<b>Controller</b><br>
Basic control actions commonly used in temperature control systems are,

1) Proportional

2) Proportional-Integral

3) Proportional-Integral-Derivative

These are described below.


<b>Proportional Controller</b>

Proportional controller is simply an amplifier of gain <span style="font-family:'Bodoni MT';font-size:18px"><i>k<sub>p</sub></i></span> which amplifies the error signal and passes it to the actuator.
A typical proportional controller may have input output characteristics as shown in Fig. 4.
Such controller gives a non-zero steady state error to step input for a type-0 system. The proportional block in the system consists of a variable gain amplifier having a maximum value, <span style="font-family:'Bodoni MT';font-size:18px"><i>k<sub>p</i></sub><sub> max</sub></span> of 20.


<div align="center">				
<img alt=""  src="./images/P.png" class="img-fluid"><br/>
<b>Fig. 4. P Controller</b>
</div>


<b>Proportional Integral Controller</b>

Mathematical equation of such a controller is given by,

$$  m(t)= k_{p} e(t)+ k_i \int_{0}^{t}e(t)dt = k_p e(t)+\frac{1}{T_i}\int_{0}^{t}e(t)dt \tag{7}$$

It may be easily seen that this controller introduces a pole to origin, i.e. increases the system type by unity. The steady state error therefore gets reduced. A block diagram representation is shown in Fig. 5. Qualitatively, any small error signal <span style="font-family:'Bodoni MT';font-size:20px"><i>e(t)</i></span>, present in the system, would get continuously integrated and generate actuator signal <span style="font-family:'Bodoni MT';font-size:20px"><i>m(t)</i></span> forcing the plant output to exactly correspond to the reference input so that error is zero. In practical system the error may not be zero due to imperfections in an electronic integrator caused by biased current needed, noise ,drift present and leakage of the integrator capacitor. The integral block in the present system is realized with a circuit, that has a transfer function :

$$ G_{r}(s)=\frac{1}{41 \ s}=\frac{k_{i}}{s} \tag{8}$$

The integral gain is therefore adjustable in the range 0 to 0.024 (approx).


<div align="center">				
<img alt=""  src="./images/pi.png" class="img-fluid"><br/>
<b>Fig. 5. PI Controller</b>
</div>


<b>Proportional Integral Derivative Controller</b>

The governing equation here is,

$$  m(t)= k_{p} e(t)+ k_i \int_{0}^{t}e(t)dt + k_D\frac{de(t)}{dt} = k_p e(t)+\frac{1}{T_i}\int_{0}^{t}e(t)dt + T_D\frac{de(t)}{dt} \tag{9}$$

In laplace transform domain,

$$ \frac{M(s)}{E(s)}=(k_p + \frac{1}{T_i \ s} + T_D \ s) \tag{10}$$

A simple analysis would show that the derivative block essentially increases the damping ratio of the system and therefore improves the dynamic performance by reducing the overshoot. The PID controller therefore helps in reducing the steady state error with an improvement in the transient response. The derivative block in the present system is realized with a circuit, that has a transfer function :

$$ G_{D}(s)=19.97 \ s \ (approx) \tag{11}$$

The derivative gain is therefore adjustable in the range of 0 to 20 approximately. 

PID controller is one of the most widely used controller because of its simplicity. By adjusting its coefficients <span style="font-family:'Bodoni MT';font-size:18px"><i>k<sub>p</sub></i>, <i>k<sub>i</sub></i>, <i>k<sub>D</sub></i></span> the controller can be used in variety of systems. The process of setting the controller coefficients to suit a given plant is known as tuning. There are many methods of tuning a PID controller. In present experiment, the method of Ziegler-Nichol has been introduced which is suitable for the oven control system.

According to the Ziegler-Nichol rule,
in P control,

$$ k_p = (\frac{1}{k})\frac{T_1}{T_2} \tag{12}$$

 in PI control,

$$ k_p = (\frac{0.9}{k})\frac{T_1}{T_2} \tag{13}$$ 
$$ k_i = \frac{1}{3.3T_2} \tag{14}$$

in PID control,

$$ k_p = (\frac{1.2}{k})\frac{T_1}{T_2} \tag{15}$$ 
$$ k_i = \frac{1}{2T_2} \tag{16}$$
$$ k_D = 0.5T_2 \tag{17}$$


<div align="center">				
<img alt="" src="./images/pid.png" class="img-fluid">

<b>Fig. 6. PID Controller</b>
</div>
			    
						
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>								

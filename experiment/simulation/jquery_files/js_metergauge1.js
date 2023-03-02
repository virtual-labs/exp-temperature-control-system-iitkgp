
		$(document).ready(function(){
		   s11 = [0];
		   plot3 = $.jqplot('chart3',[s11],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 10,
					   intervals:[0, 1,2,3,4,5,6,7,8,9,10],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		});
		function perform_meter1(){
		s11[0] = parseFloat(document.getElementById('A1').value);
		plot3 = $.jqplot('chart3',[s11],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 10,
					   intervals:[0, 1,2,3,4,5,6,7,8,9,10],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		}

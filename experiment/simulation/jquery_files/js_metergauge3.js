
		$(document).ready(function(){
		   s13 = [0];
		   plot3 = $.jqplot('chart5',[s13],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: -3,
					   max: 3,
					   intervals:[-3, -1.5, 0, 1.5 , 3],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		});
		function perform_meter3(){
		s13[0] = parseFloat(document.getElementById('A3').value); 
		plot3 = $.jqplot('chart5',[s13],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: -3,
					   max: 3,
					   intervals:[-3, -1.5, 0, 1.5 , 3],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		}

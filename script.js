$(document).ready(function(){
	$("#button1").show();
		$("#button1").click(function(){
		$("#p2").slideToggle();
		$("#button1").hide();
		$("#button2").show();
	});
	
	$("#button2").click(function(){
		$("#p2").hide();
		$("#p4").slideToggle();
		$("#button2").hide();
		$("#button3").show();
		});
		
		$("#button3").click(function(){
		$("#p4").hide();
		$("#p6").slideToggle();
		$("#button3").hide()
		$("#button4").show();;
		});
		
		$("#button4").click(function(){
		$("#p6").hide();
		$("#p8").slideToggle();
		$("#button4").hide();
		$("#button5").show();
		});
		
		$("#button5").click(function(){
		$("#p8").hide();
		$("#p10").slideToggle();
		$("#button5").hide();
		$("#button6").show();
		});
		
		$("#button6").click(function(){
		$("#p10").hide();
		$("#p12").slideToggle();
		$("#button6").hide();
		});
});

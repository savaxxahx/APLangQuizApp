$(document).ready(function(){
	$("#button1").show();
	$("#button7").show();
	$("#button8").show();
	
		$("#button1").click(function(){
		$("#p2").slideDown();
		$("#button1").hide();
		$("#button2").show();
	});
	
	$("#button2").click(function(){
		$("#p2").hide();
		$("#p4").slideDown();
		$("#button2").hide();
		$("#button3").show();
		});
		
		$("#button3").click(function(){
		$("#p4").hide();
		$("#p6").slideDown();
		$("#button3").hide()
		$("#button4").show();;
		});
		
		$("#button4").click(function(){
		$("#p6").hide();
		$("#p8").slideDown();
		$("#button4").hide();
		$("#button5").show();
		});
		
		$("#button5").click(function(){
		$("#p8").hide();
		$("#p10").slideDown();
		$("#button5").hide();
		$("#button6").show();
		});
		
		$("#button6").click(function(){
		$("#p10").slideDown();
		$("#p12").show();
		$("#button6").hide();
		});
		
		$("#button7").click(function(){
		$(".run").show();
		$("#button1").show();	
		});
		
		$("#button8").click(function(){
			$(".run").hide();
		});
});

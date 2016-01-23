$(function () {
	
	
	
	
	if ($("body").attr("id")=="index") {
		
	
	var windowHeight=$(window).height();
	$("#home").css("height", windowHeight+"px");
	
	$("#header").css("top", ($("#headerContainer").height()-$("#header").height())/2+($("#home").height()-$("#headerContainer").height())+"px");
	$("#header").css("left", ($("#home").width()-$("#header").width())/2+"px");
	
	$("#description").width(($("#about").width()-$("#testimonial").width()-50)+"px");
	$("#testimonial").height($("#description").height()+"px");
	
	$("#testContent1").css("top", $("#tests1").offset().top+"px").css("left", ($("#tests1").offset().left+$("#tests1").outerWidth(true))+"px");
	$("#testContent2").css("top", $("#tests2").offset().top+"px").css("left", ($("#tests2").offset().left+$("#tests2").outerWidth(true))+"px");
	$("#testContent3").css("top", $("#tests3").offset().top+"px").css("left", ($("#tests3").offset().left+$("#tests3").outerWidth(true))+"px");
	
		$("#tests1").mouseenter(function(){
			$( "#testContent1" ).show( "blind", 300 );
			$("#description").animate({
				opacity: 0.3
			}, 300);
		});
		
		$("#tests1").mouseleave(function(){
			$( "#testContent1" ).hide( "blind", 300 );
			$("#description").animate({
				opacity: 1
			}, 300);
		});
		
		$("#tests2").mouseenter(function(){
			$( "#testContent2" ).show( "blind", 300 );
			$("#description").animate({
				opacity: 0.3
			}, 300);
		});
		
		$("#tests2").mouseleave(function(){
			$( "#testContent2" ).hide( "blind", 300 );
			$("#description").animate({
				opacity: 1
			}, 300);
		});
		
		$("#tests3").mouseenter(function(){
			$( "#testContent3" ).show( "blind", 300 );
			$("#description").animate({
				opacity: 0.3
			}, 300);
		});
		
		$("#tests3").mouseleave(function(){
			$( "#testContent3" ).hide( "blind", 300 );
			$("#description").animate({
				opacity: 1
			}, 300);
		});
		
		var marLib = $("#library").innerWidth()-3*$(".tbox1").innerWidth()-42;
		$(".tbox2").css("margin-left", marLib/2+"px").css("margin-right", marLib/2+"px");
		
		var marSponsImg = $(".w-col-small-6").innerWidth()-$(".w-col-small-6 a").innerWidth();
		$(".w-col-small-6 a").css("margin-left", marSponsImg/2+"px").css("margin-right", marSponsImg/2+"px");	
		
		
		
		$('.links').on('click',function (evt) {
	    	evt.preventDefault();

	    	var target = $(this.hash);
		
	    	$('html, body').stop().animate({
	        	scrollTop: target.offset().top-$("#logoNavContainer").height()
	    	}, 1000, 'easeOutBack');
		});
		
	//toTopButton
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});	
	
	
	
	
	}	
	
	if ($("body").attr("id")=="robo") {
		
		
   			
	
			
	    	for(var i=0; i<6; i++) {
				$('.links')[i].setAttribute("href", "index.html"+$('.links')[i].hash);
			}
			
			
			$(".info").attr("target", "_blank");	
				
			
	}		
	
	if ($("body").attr("id")=="gall") {
		for(var i=0; i<6; i++) {
				$('.links')[i].setAttribute("href", "index.html"+$('.links')[i].hash);
			}
		
		$( "#main" ).tabs(
			
		);
		
		
		$(".info").attr("target", "_blank");
		
		
		
		
		
		
	}
	
	if ($("body").attr("id")=="lib") {
		
		for(var i=0; i<6; i++) {
				$('.links')[i].setAttribute("href", "index.html"+$('.links')[i].hash);
			}
		
		$("#main").accordion({
  			heightStyle: "content"
			
			
		});
		
		
	}
	
	if ($("body").attr("id")=="recruit") {
		$("#main").accordion({
  			heightStyle: "content"
			
		});
	}
	
	if ($("body").attr("id")=="video") {
		$("#main").accordion({
  			heightStyle: "content"
			
		});
	}
		
});
 

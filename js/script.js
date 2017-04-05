$(document).ready(
	function(){
		dotNav(); // викликаємо функцію одразу, щоб як тілкьи загружався док. вона вже могла викор.
		$(window).bind("scroll",function(event){
			parallaxScroll();
			dotNav();
		})
		
		$("a.section1").click(function(){ // кліки переходу з секції на секцію
			$("html,body").animate({
				scrollTop:0
			},1000);
			return false;
		})
		
		$("a.section2").click(function(){// кліки переходу з секції на секцію
			$("html,body").animate({
				scrollTop:$("#section2").offset().top
			},1000);
			return false;
		})
		
		$("a.section3").click(function(){// кліки переходу з секції на секцію
			$("html,body").animate({
				scrollTop:$("#section3").offset().top
			},1000);
			return false;
		})
		
		$("a.section4").click(function(){// кліки переходу з секції на секцію
			$("html,body").animate({
				scrollTop:$("#section4").offset().top
			},1000);
			return false;
		})
		
		$("nav#dots a").hover( // функція вспливання секції
			function(){
				$(this).prev("h1").show()
			},
			function(){
				$(this).prev("h1").hide()
			}
		)
	}
)

function parallaxScroll(){ // розраховуємо свій час для кожного з елементів для ефекту паралакс! Це ОСНОВНЕ!!!
	var scrolled=$(window).scrollTop();
	$("#parallax-bg1").css("top",(0-(scrolled*0.25))+"px");
	$("#parallax-bg2").css("top",(0-(scrolled*0.5))+"px");
	$("#parallax-bg3").css("top",(0-(scrolled*0.75))+"px");
}

function dotNav(){ // функція переходу з секції на секцію
	var section1Top=0;
	var section2Top=$("#section2").offset().top-(($("#section3").offset().top-$("#section2").offset().top)/2);//переходить на наступну секцію швидше ніж ми докрутимо
	var section3Top=$("#section3").offset().top-(($("#section4").offset().top-$("#section3").offset().top)/2);
	var section4Top=$("#section4").offset().top-(($(document).height()-$("#section4").offset().top)/2);
	
	$("nav#dots a").removeClass("active");//знімаємо клас для позначок
	
	if($(document).scrollTop()>=section1Top && $(document).scrollTop()<section2Top){
		$("nav#dots a.section1").addClass("active")
	}
	
	else if($(document).scrollTop()>=section2Top && $(document).scrollTop()<section3Top){
		$("nav#dots a.section2").addClass("active") // добавляємо клас для позначок
	}
	
	else if($(document).scrollTop()>=section3Top && $(document).scrollTop()<section4Top){
		$("nav#dots a.section3").addClass("active")
	}
	
	else if($(document).scrollTop()>=section4Top){
		$("nav#dots a.section4").addClass("active")
	}
}












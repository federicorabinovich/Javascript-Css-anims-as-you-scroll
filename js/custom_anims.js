$(function() {
	
	var AnimTime = 2000; //This is each anim duration. configure this in ms



	//init 

	addPhones();  //adds random phones to section 1

	function addPhones(){
		var phones = ["ipad", "iphone4", "ipod", "mobile_phone"];
		for(var i=0; i< parseInt($('#phones_container').data('phonesqty')); i++){
			var phone = phones[Math.floor(Math.random()*phones.length)];
			$('#phones_container').append('<div><img src="img/'+phone+'.svg"></div>');
		}
	}

	var triggered = [true, false, false, false, false, false, false];
	var $window= $(window), win_height_padded = $window.height() * 1.1, isTouch = Modernizr.touch;
	$window.on('scroll', revealOnScroll);
	
	function revealOnScroll() {
     var scrolled = $window.scrollTop();
     $(".animateOnScroll").each(function () {

       var $this = $(this), offsetTop = $this.offset().top;
	   var triggered_section = parseInt($this.data('section'));
       if (scrolled + win_height_padded > offsetTop+150 && !triggered[parseInt($this.data('section'))]) {
		   triggered[parseInt($this.data('section'))] = true;
           switch(triggered_section){
			   case 1: animateSection1();
			   break;
			   case 2: animateSection2();
			   break;
			   case 3: animateSection3();
			   break;
			   case 4: animateSection4();
			   break;
			   case 5: animateSection5();
			   break;
			   case 6: animateSection6();
			   break;
		   }
       }

     });
	}


	//section 1--------------------------------

	function animateSection1(){
		var timer = setInterval(function(){showPhone()}, AnimTime/parseInt($('#section1 #phones_container').data('phonesqty')));
		var phonesShow = 0;
		var inc = AnimTime/40;
		var counter = 0;

		function showPhone(){
			if (phonesShow >= parseInt($('#section1 #phones_container').data('phonesqty'))){
				clearInterval(timer);
				$( "#section1 #large_phones div" ).animate({width: "100%" }, AnimTime);
				timer = setInterval(function(){addPerUser()}, 40);				
			}else{				
				$('#section1 #phones_container div').eq(phonesShow).css('visibility','visible').hide().fadeIn(200);
				phonesShow++;
				$('#section1 #total_devices').html(phonesShow+' <span> TOTAL DEVICES</span>');
			}
		}

		function addPerUser(){
			if (counter > AnimTime){
				clearInterval(timer);
			}else{
				value = parseFloat($( "#section1 #devices_per" ).data('qty'))*(counter/AnimTime);
				$( "#section1 #devices_per" ).html((parseInt(Math.ceil(value*10))/10)+' <span> DEVICES PER PERSON</span>');
				counter +=inc;
			}
		}
		
	}
	//section 2--------------------------------
	
	function animateSection2(){
		
		$( "#section2 .tag #connector1" ).animate({height: "15.333em" }, AnimTime);
		$( "#section2 .tag #connector2" ).animate({height: "25.055em" }, AnimTime);
		$( "#section2 .tag #connector3" ).animate({height: "11.055em" }, AnimTime);
		$( "#section2 .tag #connector4" ).animate({height: "15.222em" }, AnimTime);
		$( "#section2 #chart_wrapper img").fadeIn(AnimTime);

		var timer = setInterval(function(){addPercentage()}, 40);
		var inc = AnimTime/40;
		var counter = 0;

		function addPercentage(){
			if (counter > AnimTime){
				clearInterval(timer);
				$( "#section2 .slider_handle" ).animate({marginLeft: "45%" }, AnimTime);
				counter = 0;
				timer = setInterval(function(){addHours()}, 40);
			}else{
				$( "#section2 #chart_wrapper h2" ).each(function(){
					value = parseFloat($(this).data('percentage'))*(counter/AnimTime);
					if($(this).data('percentage')==parseInt($(this).data('percentage'))){
						$(this).html(parseInt(Math.ceil(value))+'%');
					}else{
						$(this).html(parseInt(Math.ceil(value*10))/10+'%');
					}
				})
				counter +=inc;
			}
		}
		function addHours(){
			if (counter > AnimTime){
				clearInterval(timer);
			}else{
				value = parseFloat($( "#section2 .tab" ).data('hours'))*(counter/AnimTime);
				$( "#section2 .tab" ).html((parseInt(Math.ceil(value*100))/100)+'% <span> ON AVERAGE</span>');
				counter +=inc;
			}
		}
	}

	//section 3--------------------------------

	function animateSection3(){
		
		var timer = setInterval(function(){addPercentage()}, 50);
		var inc = AnimTime/50;
		var counter = 0;

		function addPercentage(){
			if (counter > AnimTime){
				clearInterval(timer);
			}else{
				$( "#section3 #graph div" ).each(function(){
					value = parseFloat($(this).data('percentage'))*(counter/AnimTime);
					if($(this).data('percentage')==parseInt($(this).data('percentage'))){
						$(this).find('h2').html(parseInt(Math.ceil(value))+'%');
					}else{
						$(this).find('h2').html(parseInt(Math.ceil(value*10))/10+'%');
					}
				})
				counter +=inc;
			}
		}
		$( "#section3 #graph div" ).each(function(){
			var height = 13.88888 * (parseFloat($(this).data('percentage'))/100);
			$(this).find('.bar').animate({height: height+"em" }, AnimTime);
			$(this).find('h2').animate({bottom: (height*.61)+"em" }, AnimTime);
		});
	}

	//section 4--------------------------------

	function animateSection4(){
		
		$('#section4 #chart_wrapper2 #pie2_slice1').animateRotate(98, 0, AnimTime, 'swing', function () {});
		$('#section4 #chart_wrapper2 #pie2_slice2').animateRotate(-12, 0, AnimTime, 'swing', function () {});
		$('#section4 #chart_wrapper2 #pie2_slice3').animateRotate(-118, 0, AnimTime, 'swing', function () {});
		$('#section4 .pie2_slice').fadeIn(AnimTime*2);

		var timer = setInterval(function(){addIcon()}, AnimTime/5);
		var icon = 5;

		function addIcon(){
			if(icon<1){
				clearInterval(timer);
				$('#section4 #chart2_connector1').animate({height: "9.1em" }, AnimTime/2);
				$('#section4 #chart2_connector2').animate({height: "5.9em" }, AnimTime/2);
				$('#section4 #chart2_connector3').animate({height: "3em" }, AnimTime/2);
				$('#section4 #chart2_connector4').animate({height: "10.9em" }, AnimTime/2);
				$('#section4 #chart2_connector5').animate({height: "8.7em" }, AnimTime/2);
			}else{
				$('#section4 #icon'+icon).animate({left: "0" }, AnimTime/5);
				icon--;
			}
		}

		var timer2 = setInterval(function(){addPercentage()}, 50);
		var inc = AnimTime/50;
		var counter = 0;

		function addPercentage(){
			if (counter > AnimTime){
				clearInterval(timer2);
			}else{				
				var value1 = parseFloat($( "#section4 #pie2_slice1_data" ).data('percentage'))*(counter/AnimTime);
				$( "#section4 #pie2_slice1_data" ).html('<span>SOCIAL MEDIA</br></span>'+parseInt(Math.ceil(value1))+'%');
				var value2 = parseFloat($( "#section4 #pie2_slice1_data" ).data('percentage'))*(counter/AnimTime);
				$( "#section4 #pie2_slice2_data" ).html('<span>TOOLS</br></span>'+parseInt(Math.ceil(value2))+'%');	
				var value3 = parseFloat($( "#section4 #pie2_slice1_data" ).data('percentage'))*(counter/AnimTime);
				$( "#section4 #pie2_slice3_data" ).html('<span>PRODUCTIVITY</br></span>'+parseInt(Math.ceil(value3))+'%');	
				
				counter +=inc;
			}
		}
		
	}

	$.fn.animateRotate = function(startAngle, angle, duration, easing, complete) {
		var args = $.speed(duration, easing, complete);
		var step = args.step;
		return this.each(function(i, e) {
		args.complete = $.proxy(args.complete, e);
		args.step = function(now) {
		  $.style(e, 'transform', 'rotate(' + now + 'deg)');
		  if (step) return step.apply(e, arguments);
		};

		$({deg: startAngle}).animate({deg: angle}, args);
		});
	};


	//section 5--------------------------------

	function animateSection5(){
		var timer = setInterval(function(){flip()}, AnimTime/20);
		var actual_card = 0;

		function flip(){
			if (actual_card>=$( "#section5 .alm_sq" ).length){
				clearInterval(timer);
			}else{
				$( "#section5 .alm_sq").eq(actual_card).rotateY(0, 2000);
				$( "#section5 .alm_sq").eq(actual_card).css('overflow', 'visible');
				actual_card++;
			}
		}		
	}
	var delay = 0;	
	$.fn.rotateY = function(rotation, speed, easing, complete) {
		var opt = $.speed(speed, easing, complete);
		opt.easing = opt.easing || 'ease';
		
		return this.each(function() {
			var $this = $(this);
			$this.css({ 
				transitionDuration: opt.duration + 'ms',
				transitionTimingFunction: opt.easing,
				transform: 'rotateY(' + rotation + 'deg)'
			});

			setTimeout(function() { 
				$this.css({ 
					transitionDuration: '0s', 
					transitionTimingFunction: 'ease'
				});

				opt.complete();
			}, opt.duration + (delay || 0));
		});
	};

	//section 6--------------------------------

	function animateSection6(){
		var timer = setInterval(function(){scaleCircle()}, AnimTime/3);
		var actual_card = 0;
		var completing = false;

		function scaleCircle(){
			if (actual_card>=$( "#section6 .circle" ).length){
				clearInterval(timer);
			}else{
				if(actual_card>2 && !completing){
					completing= true;
					startCompleting();
				}
				$( "#section6 .circle").eq(actual_card).scale(1, AnimTime/2, 'easeInOutBounce');
				$( "#section6 .baloon").eq(actual_card).scale(1, AnimTime/2);
				actual_card++;
			}
		}
		function startCompleting(){
			var timer3 = setInterval(function(){completeDialog()}, 200);
			var inc3 = AnimTime/100;
			var counter3 = 0;

			function completeDialog(baloon_number){
				if(counter3>= AnimTime){
					clearInterval(timer3);
				}else{
					$( "#section6 .baloon").each(function(){
						var text = $(this).data('text');
						$(this).find('h5').html(text.substring(0, 1+parseInt(Math.ceil((text.length*(counter3/AnimTime)))))); 
						counter3 +=inc3;
					});
				}
			}
		}

		

		var timer2 = setInterval(function(){addPercentage()}, 100);
		var inc = AnimTime/50;
		var counter = 0;

		function addPercentage(){
			if (counter > AnimTime){
				clearInterval(timer2);
			}else{
				var value1 = parseFloat($( "#section6 #circle1" ).data('percentage'))*(counter/AnimTime);
				$( "#section6 #circle1 h2" ).html('<span>Not important</br></span>'+parseInt(Math.ceil(value1*10))/10+'%');
				var value2 = parseFloat($( "#section6 #circle2" ).data('percentage'))*(counter/AnimTime);
				$( "#section6 #circle2 h2" ).html('<span>somewhat important</br></span>'+parseInt(Math.ceil(value2*10))/10+'%');
				var value3 = parseFloat($( "#section6 #circle3" ).data('percentage'))*(counter/AnimTime);
				$( "#section6 #circle3 h2" ).html('<span>very important</br></span>'+parseInt(Math.ceil(value3*10))/10+'%');
				var value4 = parseFloat($( "#section6 #circle4" ).data('percentage'))*(counter/AnimTime);
				$( "#section6 #circle4 h2" ).html('<span>extremely important</br></span>'+parseInt(Math.ceil(value4*10))/10+'%');
				
				counter +=inc;
			}
		}
	}

	$.fn.scale = function(scale, speed, easing, complete) {
		var opt = $.speed(speed, easing, complete);
		opt.easing = opt.easing || 'ease';
		
		return this.each(function() {
			var $this = $(this);
			$this.css({ 
				transitionDuration: opt.duration + 'ms',
				transitionTimingFunction: opt.easing,
				transform: 'scale(' + scale + ')'
			});

			setTimeout(function() { 
				$this.css({ 
					transitionDuration: '0s', 
					transitionTimingFunction: 'ease'
				});

				opt.complete();
			}, opt.duration + (delay || 0));
		});
	};
	
	
})
$(function(){
	    	function Slider(slider_class, animation_type) {
		        var _ = this;
		        _.slider_tag = $('.' + slider_class);
		        _.slider_content = $(_.slider_tag).find('.slide-content1');
		        _.prev = $(_.slider_tag).find('.prev1');
		        _.next = $(_.slider_tag).find('.next1');
		        _.cursor = 0;
		        $(_.prev).click(function () {
		            if(_.cursor > 0) {
		                _.cursor--;
		                $(_.slider_content).animate({
		                    left: _.cursor*-525
		                }, 525, animation_type, function(){
		                    if(_.cursor === 0) $(_.prev).addClass('ban1');
		                    // when you click the prev arrow, the next arrow should be visiable
		                    $(_.next).removeClass('ban1');
		                });
		            }
		        });
		        $(_.next).click(function () {
		            if(_.cursor < 2) {
		                _.cursor++;
		                $(_.slider_content).animate({
		                    left: _.cursor*-525
		                }, 525, animation_type, function(){
		                    if(_.cursor === 2) $(_.next).addClass('ban1');
		                    // when you click the next arrow, the prev arrow should be visiable
		                    $(_.prev).removeClass('ban1');
		                });
		            }
		        });
	    	}
    
    new Slider('active-slider1', 'linear');
})

$(function(){
	    	function Slider(slider_class, animation_type) {
		        var _ = this;
		        _.slider_tag = $('.' + slider_class);
		        _.slider_content = $(_.slider_tag).find('.slide-content2');
		        _.prev = $(_.slider_tag).find('.prev2');
		        _.next = $(_.slider_tag).find('.next2');
		        _.cursor = 0;
		        $(_.prev).click(function () {
		            if(_.cursor > 0) {
		                _.cursor--;
		                $(_.slider_content).animate({
		                    left: _.cursor*-525
		                }, 525, animation_type, function(){
		                    if(_.cursor === 0) $(_.prev).addClass('ban2');
		                    // when you click the prev arrow, the next arrow should be visiable
		                    $(_.next).removeClass('ban2');
		                });
		            }
		        });
		        $(_.next).click(function () {
		            if(_.cursor < 2) {
		                _.cursor++;
		                $(_.slider_content).animate({
		                    left: _.cursor*-525
		                }, 525, animation_type, function(){
		                    if(_.cursor === 2) $(_.next).addClass('ban2');
		                    // when you click the next arrow, the prev arrow should be visiable
		                    $(_.prev).removeClass('ban2');
		                });
		            }
		        });
	    	}
    
    new Slider('active-slider2', 'linear');
})

$(function(){
	    	function Slider(slider_class, animation_type) {
		        var _ = this;
		        _.slider_tag = $('.' + slider_class);
		        _.slider_content = $(_.slider_tag).find('.slide-content3');
		        _.prev = $(_.slider_tag).find('.prev3');
		        _.next = $(_.slider_tag).find('.next3');
		        _.cursor = 0;
		        $(_.prev).click(function () {
		            if(_.cursor > 0) {
		                _.cursor--;
		                $(_.slider_content).animate({
		                    left: _.cursor*-525
		                }, 525, animation_type, function(){
		                    if(_.cursor === 0) $(_.prev).addClass('ban3');
		                    // when you click the prev arrow, the next arrow should be visiable
		                    $(_.next).removeClass('ban3');
		                });
		            }
		        });
		        $(_.next).click(function () {
		            if(_.cursor < 2) {
		                _.cursor++;
		                $(_.slider_content).animate({
		                    left: _.cursor*-525
		                }, 525, animation_type, function(){
		                    if(_.cursor === 2) $(_.next).addClass('ban3');
		                    // when you click the next arrow, the prev arrow should be visiable
		                    $(_.prev).removeClass('ban3');
		                });
		            }
		        });
	    	}
    
    new Slider('active-slider3', 'linear');
})

$(function(){
	    	function Slider(slider_class, animation_type) {
		        var _ = this;
		        _.slider_tag = $('.' + slider_class);
		        _.slider_content = $(_.slider_tag).find('.slide-content4');
		        _.prev = $(_.slider_tag).find('.prev4');
		        _.next = $(_.slider_tag).find('.next4');
		        _.cursor = 0;
		        $(_.prev).click(function () {
		            if(_.cursor > 0) {
		                _.cursor--;
		                $(_.slider_content).animate({
		                    left: _.cursor*-525
		                }, 525, animation_type, function(){
		                    if(_.cursor === 0) $(_.prev).addClass('ban4');
		                    // when you click the prev arrow, the next arrow should be visiable
		                    $(_.next).removeClass('ban4');
		                });
		            }
		        });
		        $(_.next).click(function () {
		            if(_.cursor < 2) {
		                _.cursor++;
		                $(_.slider_content).animate({
		                    left: _.cursor*-525
		                }, 525, animation_type, function(){
		                    if(_.cursor === 2) $(_.next).addClass('ban4');
		                    // when you click the next arrow, the prev arrow should be visiable
		                    $(_.prev).removeClass('ban4');
		                });
		            }
		        });
	    	}
    
    new Slider('active-slider4', 'linear');
})

$(function(){
	    	function Slider(slider_class, animation_type) {
		        var _ = this;
		        _.slider_tag = $('.' + slider_class);
		        _.slider_content = $(_.slider_tag).find('.slide-content5');
		        _.prev = $(_.slider_tag).find('.prev5');
		        _.next = $(_.slider_tag).find('.next5');
		        _.cursor = 0;
		        $(_.prev).click(function () {
		            if(_.cursor > 0) {
		                _.cursor--;
		                $(_.slider_content).animate({
		                    left: _.cursor*-525
		                }, 525, animation_type, function(){
		                    if(_.cursor === 0) $(_.prev).addClass('ban5');
		                    // when you click the prev arrow, the next arrow should be visiable
		                    $(_.next).removeClass('ban5');
		                });
		            }
		        });
		        $(_.next).click(function () {
		            if(_.cursor < 2) {
		                _.cursor++;
		                $(_.slider_content).animate({
		                    left: _.cursor*-525
		                }, 525, animation_type, function(){
		                    if(_.cursor === 2) $(_.next).addClass('ban5');
		                    // when you click the next arrow, the prev arrow should be visiable
		                    $(_.prev).removeClass('ban5');
		                });
		            }
		        });
	    	}
    
    new Slider('active-slider5', 'linear');
})

$(function(){
	    	function Slider(slider_class, animation_type) {
		        var _ = this;
		        _.slider_tag = $('.' + slider_class);
		        _.slider_content = $(_.slider_tag).find('.slide-content6');
		        _.prev = $(_.slider_tag).find('.prev6');
		        _.next = $(_.slider_tag).find('.next6');
		        _.cursor = 0;
		        $(_.prev).click(function () {
		            if(_.cursor > 0) {
		                _.cursor--;
		                $(_.slider_content).animate({
		                    left: _.cursor*-525
		                }, 525, animation_type, function(){
		                    if(_.cursor === 0) $(_.prev).addClass('ban6');
		                    // when you click the prev arrow, the next arrow should be visiable
		                    $(_.next).removeClass('ban6');
		                });
		            }
		        });
		        $(_.next).click(function () {
		            if(_.cursor < 2) {
		                _.cursor++;
		                $(_.slider_content).animate({
		                    left: _.cursor*-525
		                }, 525, animation_type, function(){
		                    if(_.cursor === 2) $(_.next).addClass('ban6');
		                    // when you click the next arrow, the prev arrow should be visiable
		                    $(_.prev).removeClass('ban6');
		                });
		            }
		        });
	    	}
    
    new Slider('active-slider5', 'linear');
})

$(function() {
    $('.link').on('click', function(e) {
        e.preventDefault();
        $('.bar').each(function() {
            $('.bar').hide();
            $('.lining').hide();
            $('.slider-description-indent').hide();  
        	});
        var block = $(this).attr('href');
        $(block).fadeIn(1000);
    });
});

$(function() {
$(".link1").click(function(){
    $(".gallery__active-lining1").fadeIn(4000);
});
});

$(function() {
$(".link2").click(function(){
    $(".gallery__active-lining2").fadeIn(4000);
});
});

$(function() {
$(".link3").click(function(){
    $(".gallery__active-lining3").fadeIn(4000);
});
});

$(function() {
$(".link4").click(function(){
    $(".gallery__active-lining4").fadeIn(4000);
});
});

$(function() {
$(".link5").click(function(){
    $(".gallery__active-lining5").fadeIn(4000);
});
});

$(function() {
$(".link6").click(function(){
    $(".gallery__active-lining6").fadeIn(4000);
});
});

$(function() {
$(".link1").click(function(){
    $(".slider-description-indent").fadeIn(2000);
});
});

$(function() {
$(".link2").click(function(){
    $(".slider-description-indent").fadeIn(2000);
});
});

$(function() {
$(".link3").click(function(){
    $(".slider-description-indent").fadeIn(2000);
});
});

$(function() {
$(".link4").click(function(){
    $(".slider-description-indent").fadeIn(2000);
});
});

$(function() {
$(".link5").click(function(){
    $(".slider-description-indent").fadeIn(2000);
});
});

$(function() {
$(".link6").click(function(){
    $(".slider-description-indent").fadeIn(2000);
});
});

$(document).ready(function () {
    //you can set this, as long as it's not greater than the slides length
    var show = 3;
    //calculate each slides width depending on how many you want to show
    var w = $('#slider-thumb').width() / show;
    var l = $('.slide-thumb').length;
    
    //set each slide width

    //set the container width to fix the animation and make it look sliding
    $('#slide-container-thumb').width(w * l)
    
    function slider() {
        $('.slide-thumb:first-child').animate({
            marginLeft: -w //hide the first slide on the left
        }, 'slow', function () {
            //once completely hidden, move this slide next to the last slide
            $(this).appendTo($(this).parent()).css({marginLeft: 0});
        });
    }
    //use setInterval to do the timed execution and animation
    var timer = setInterval(slider, 3000);
    
    /* pausing the slider */   
    $('#slider-thumb').hover(function(){
        //mouse in, clearinterval to pause
        clearInterval(timer);
    },function(){
        //mouse out, setinterval to continue
        timer = setInterval(slider, 3000);
    });
});



        

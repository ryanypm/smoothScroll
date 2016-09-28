/**
 * 
 * @authors ryan (543915174@qq.com)
 * @date    2016-09-28 13:39:39
 * @version 1.0
 */
$.smoothScroll = function(options){
		options = $.extend(true, {
			scrollTime:400,
			scrollDistance:300,
			detail:120
		}, options);
		
		var $window = jQuery(window);          
		mobile_ie = -1 !== navigator.userAgent.indexOf("IEMobile");
		var bodyAndHtml = $('html,body');
		function smoothScrollListener(event){
		    event.preventDefault();
		    var delta = event.wheelDelta / options.detail || -event.detail / 3;
		    var scrollTop = $window.scrollTop();
		    var finalScroll = scrollTop - parseInt(delta * options.scrollDistance);
		    bodyAndHtml.stop().animate({scrollTop: finalScroll},options.scrollTime);
		}

		if (!jQuery('html').hasClass('touch') && !mobile_ie) {
		    if (window.addEventListener) {
		        window.addEventListener('mousewheel', smoothScrollListener, false);
		        window.addEventListener('DOMMouseScroll', smoothScrollListener, false);
		    }
		}
	}
/**
 * 系统核心处理
 * @since 2016-07-03
 */
window.BirdApp={
	init: function(){
		//custom common js lib
		var customJslib = [
			'/lib/egg/js/demo-rtl.js',
			'/lib/egg/js/demo-skin-changer.js',
			'/lib/egg/js/demo.js'
		];
		var head = document.getElementsByTagName('head')[0];
		for(var i = 0; i<customJslib.length; i++){

			var script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = customJslib[i];
			head.appendChild(script);
		}

	},
    initAppEvent: function(){
        setTimeout(function(){
            $('body').on('mouseenter', '#page-wrapper.nav-small #sidebar-nav .dropdown-toggle', function(e) {
                var $sidebar = $(this).parents('#sidebar-nav');
                if ($(document).width() >= 992) {
                    var $item = $(this).parent();
                    $item.addClass('open');
                    $item.children('.submenu').slideDown('fast');
                }
            });
            $('body').on('mouseleave', '#page-wrapper.nav-small #sidebar-nav > .nav-pills > li', function(e) {
                var $sidebar = $(this).parents('#sidebar-nav');
                if ($(document).width() >= 992) {
                    var $item = $(this);
                    if ($item.hasClass('open')) {
                        $item.find('.open .submenu').slideUp('fast');
                        $item.find('.open').removeClass('open');
                        $item.children('.submenu').slideUp('fast');
                    }
                    $item.removeClass('open');
                }
            });
           
            $(window).smartresize(function() {
                if ($(document).width() <= 991) {
                    $('#page-wrapper').removeClass('nav-small');
                }
            });
            $('.fixed-leftmenu #col-left').nanoScroller({
                alwaysVisible: true,
                iOSNativeScrolling: false,
                preventPageScrolling: true,
                contentClass: 'col-left-nano-content'
            });
            $("[data-toggle='tooltip']").each(function(index, el) {
                $(el).tooltip({
                    placement: $(this).data("placement") || 'top'
                });
            });
        }, 200);
        
    }
};

$.fn.removeClassPrefix = function(prefix) {
    this.each(function(i, el) {
        var classes = el.className.split(" ").filter(function(c) {
            return c.lastIndexOf(prefix, 0) !== 0;
        });
        el.className = classes.join(" ");
    });
    return this;
}
;
(function($, sr) {
    var debounce = function(func, threshold, execAsap) {
        var timeout;
        return function debounced() {
            var obj = this
              , args = arguments;
            function delayed() {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null ;
            }
            ;if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);
            timeout = setTimeout(delayed, threshold || 100);
        };
    }
    jQuery.fn[sr] = function(fn) {
        return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
    };
})(jQuery, 'smartresize');

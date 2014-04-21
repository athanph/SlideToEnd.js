/*!
 *  ScrollToEnd.js
 *  Easy "Scroll to Top" / "Scroll to Bottom" switch slider
 *  Author: Jonathan Manas, @athanph
 *  Licensed under the MIT license
 */
;(function ( $, window, document, undefined ) {

	var pluginName = "scrollToEnd",
		defaults = {
			duration: 1000,
			text: {
				scrollToBottomText: 'Scroll to Bottom',
				scrollToTopText: 'Scroll to Top'
			}
		};

	// Constructor
	function Plugin (element, options) {
		this.element = element;
		this.$elem = $(this.element);
		this.options = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}


	Plugin.prototype = {
		init: function() {

			var scrollDiv = this.$elem,
				textOptions = this.options.text,
				toBottom = function () {
					scrollDiv
						.removeClass('toTop')
						.addClass('toBottom')
						.find('span')
						.html(textOptions.scrollToBottomText);
				},
				toTop = function () {
					scrollDiv
						.removeClass('toBottom')
						.addClass('toTop')
						.find('span')
						.html(textOptions.scrollToTopText);
				},
				view = $(window);

			// Default state
			scrollDiv.removeAttr("href");
			if (view.scrollTop() === 0) {
				toBottom();
			}

			view.scroll(function () {
				var currentScroll = (view.scrollTop() === 0) ? toBottom() : toTop();
			});

			scrollDiv.on('click', {myOptions: this.options}, function(e) {

				var $options = e.data.myOptions,
					duration = $options.duration;

				if (scrollDiv.hasClass('toTop')) {
					$("html, body").animate({
						scrollTop: 0
					}, duration);
				}
				if (scrollDiv.hasClass('toBottom')) {
					$("html, body").animate({
						scrollTop: $(document).height()
					}, duration);
				}
				return false;
			});
		}
	};


	$.fn.scrollToEnd = function( options ) {
		return this.each(function() {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data (this, "plugin_" + pluginName,
				new Plugin(this, options));
			}
		});
	};


})(jQuery, window, document);


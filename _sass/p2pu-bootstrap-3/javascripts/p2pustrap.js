/*global jQuery, window, document, console, location */

var P2PUDocs = window.P2PUDocs || {};

(function ($, P2PUDocs) {

	'use strict';

	function cleanSource(html) {
		var lines = html.split(/\n/),
			indentSize = lines[0].length - lines[0].trim().length - 6,
			re = new RegExp(" {" + indentSize + "}");

		lines.shift();
		lines.splice(-1, 1);
		lines = lines.map(function (line) {
			if (line.match(re)) {
				line = line.substring(indentSize);
			}

			return line;
		});

		lines = lines.join("\n");

		return lines;
	}

	var init = function () {
		$(function () {
			// p2pu tab
			$(".p2pu-tab").p2puSlider({
				navbarContainer: '.navbar',
				icon: '.p2pu-tab-icon',
				iconUp: 'fa fa-chevron-down',
				iconDown: 'fa fa-chevron-up'
			});

			// Smoth scrolling
			$('a[href*=#]:not([href=#])').click(function () {
				if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top - 100
						}, 1000);
						return false;
					}
				}
			});

			// Show source code
			var $button = $("<div id='source-button' class='btn btn-primary btn-xs'>&lt; &gt;</div>").click(function () {
				var html = $(this).parent().html();
				html = cleanSource(html);
				$("#source-modal pre").text(html);
				$("#source-modal").modal();
			});

			$('.bs-component [data-toggle="popover"]').popover();
			$('.bs-component [data-toggle="tooltip"]').tooltip();

			$(".bs-component").hover(function () {
				$(this).append($button);
				$button.show();
			}, function () {
				$button.hide();
			});

		});
	};

	P2PUDocs.Splash = {};
	P2PUDocs.Splash.init = init;

}(jQuery, P2PUDocs));

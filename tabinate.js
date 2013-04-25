/*
 * Tabinate v0.7 (jQuery 1.7? - 2.0)
 * a lightweight, style-independent, jQuery tab switcher
 * Free for modification, personal, and commercial use.
 *
 * https://github.com/dangodev/jQuery-Tabinate
 */


$.fn.tabinate = function(options) {

// Default Settings (don't adjust here!)
	var settings = $.extend({
		activeLinkClass		:	'active',
		activeTabClass		:	'current-tab',
		bookmarks			:	true, // changes URL hash to match tab's ID. Set to 'false' to disable hash links and always start on 1st tab
		tabClass			:	'tab',
		startTab			:	0
	}, options);

	var container = this;
	container.each(function(i, e) {
		var e = $(e);
		var tabs = e.find('.'+settings.tabClass);
		
		// Initialize
		tabs.removeClass(settings.activeTabClass).hide(0, function() {
			var hash = window.location.hash;
			hash = hash.slice(1);
	
			if($('#'+hash).length > 0) { // If hash, show tab
				$('#'+hash+'.'+settings.tabClass).show(0, function() {
					e.find("ul:eq(0) a[href='#"+hash+"']:eq(0)").closest('li').addClass(settings.activeLinkClass);
				});
			}
			if(e.find('.'+settings.tabClass+':visible').length == 0 || settings.startTab > 0){ // If nothing visible, show first
				var links = e.find('ul:eq(0) li:eq('+settings.startTab+')').addClass(settings.activeLinkClass);
				tabs.eq(settings.startTab).show().addClass(settings.activeTabClass);
			}
		});
	
		// Tab Click
		e.find('ul:eq(0) li').click(function() {
			e.find('ul:eq(0) li').not($(this)).removeClass(settings.activeLinkClass);
			$(this).addClass(settings.activeLinkClass);
			var targetdiv = $(this).find('a:eq(0)').attr('href');
	
			if($(targetdiv).length > 0) { // if using ID href
				if($(targetdiv).is(':hidden')) {
					tabs.removeClass(settings.activeTabClass).hide(0, function() {
						$(targetdiv).show().addClass(settings.activeTabClass);
					});
				}
			} else { // if not using IDs
				eq = e.find('ul:eq(0) li').index(this);
				tabs.removeClass(settings.activeTabClass).hide(0, function() {
					tabs.eq(eq).show().addClass(settings.activeTabClass);
				});
			}
	
			if(settings.bookmarks != true) return false;
		});
	});
};
jQuery-Tabinate
===============

< 1kb (minified) tab plugin for jQuery

Description
-----------
This is a lightweight, bare-bones jQuery tabination plugin for when you don't need jQuery UI bloat.

There are only *3 rules* to get it working:

* Navigation and tabs must go inside a container element (this is what you initialize)
* Navigation **must** follow a `ul li a` structure (surrounding `span`s and `div`s for styling are okay)
* Tabs **must** have `tab` class (class name can be changed with the `tabClass` option; any element will work)

It uses the first `ul` it finds as the navigation. The navigation either requires an `href` anchor set to the ID of the tab, or it will correspond the
link index with the tab index (ex, the first link will open the first tab, the second link will open the second tab, etc.). In the unfortunate event an
`li` contains two links, it will use the first link as the navigation. In the catastrophic event that there are more navigation links than tabs, or
vice-versa, the universe will implode and we will all die a quick, painless depth in the unmerciful maw of compressed space-time.

Currently, this plugin supports multiple tab windows on the same page without conflict, but not tabs within tabs.


Dependencies
------------
* jQuery


Usage
-----
To initialize:

	$('#example-one').tabinate({
		activeLinkClass : 'active',
		tabClass : 'tab',
		startTab : 0
	});

This is roughly how the HTML should look:

	<div id="example-one" class="tab-window">
	  <nav>
	    <ul>
	      <li><a href="#item-one">Item One</a></li
	     ><li><a href="#item-two">Item Two</a></li
	     ><li><a href="#item-four">Item Four</a></li
	     ><li><a href="#item-three">Item Three</a></li
	     ><li><a href="#">No ID</a></li>
	    </ul>
	  </nav>
	  <div id="item-one" class="tab">
	    <p>Sample content one</p>
	  </div>
	  <div id="item-two" class="tab">
	    <p>Sample content two</p>
	  </div>
	  <div id="item-three" class="tab">
	    <p>Sample content three</p>
	  </div>
	  <div id="item-four" class="tab">
	    <p>Sample content four</p>
	  </div>
	  <div class="tab">
	    <p>Sample content with no ID</p>
	  </div>
	</div>


Options
-------
* `activeLinkClass` - (str) CSS class hook for active tab link LIs (default: `active`)
* `activeTabClass` - (str) CSS class hook for the visible tab (default: `active-tab`),
* `bookmarks` - (bool) Set to `1` or `true` to enable bookmarks (URL hash changes on click), or `0` or `false` to disable bookmarks (default: `true`)
* `tabClass` - (str) class that determines a tab element (default: `tab`)
* `startTab` - (int) index of list item / tab to display on load (0 is first, 1 is second, etc.)


Download
--------
https://github.com/dangodev/jQuery-Tabinate/zipball/master
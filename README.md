jQuery-Tabinate
===============

< 1kb (minified) tab plugin for jQuery

Description
-----------
This is a lightweight, bare-bones jQuery tabination plugin. Good for when you don't need jQuery UI.

It leaves most of the styling to you, and doesn't require any CSS to get it working.

It uses the first `ul` it finds inside the selected element as the navigation. The navigation either requires an `href` anchor set to the ID of the tab,
or it will correspond the link index with the tab index (ex, the first link will open the first tab, the second link will open the second tab, etc.).

Tab elements must have the class name `tab` on them. This can be changed with the `className` option. In this way, any element within the container can be
used as a tab, or elements can be placed inside a container which do not need to tabinate.

Currently, this plugin supports multiple tab windows on the same page without conflict, but not tabs within tabs.


Dependencies
------------
* jQuery


Usage
-----
To initialize:

	$(document).ready(function() {
		$('#example-one').tabinate();
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
* `activeLinkClass` - CSS class hook for active tab links (default: `active`)
* `activeTabClass` - CSS class hook for the visible tab (default: `active-tab`),
* `bookmarks` - Set to `1` or `true` to enable bookmarks (URL hash changes on click), or `0` or `false` to disable bookmarks (default: `true`)
* `tabClass` - class that determines a tab element (default: `tab`)
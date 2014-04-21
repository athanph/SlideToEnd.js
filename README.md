SlideToEnd.js
==============

Easy "Scroll to Top" / "Scroll to Bottom" switch slider plugin.

## Description
I was asked to write a script to provide a 'Scroll to Bottom (of page)' button upon page load and then switched to 'Scroll to Top' as the page gets scrolled down. I converted it to a plugin.


## Usage
- Include jQuery before the `<head>` section.
- Create the button. (Styling of the button can be done via CSS.)
```
<a href="#" id="js-scrollBtn" class="scroll-button"><span>Scroll</span></a>
```
- Initiate the plugin.
```
$(document).ready(function() {
    $("#js-scrollBtn").scrollToEnd(); 
});
```
*Options:*   
Slide duration and text to display on the button can be changed.
```
$(document).ready(function() {
    $("#js-scrollBtn").scrollToEnd({
        duration: 1000, // default
        text: {
			scrollToBottomText: 'Scroll to Bottom', // default
			scrollToTopText: 'Scroll to Top'        // default
		}
    }); 
});
```
- That's it!

## License
MIT Licensed   
Copyright (C) 2014 Jonathan Manas, [@athanph](http://twitter.com/athanph)
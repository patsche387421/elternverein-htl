<?php

// Exit if accessed directly
defined( 'ABSPATH' ) || exit;

/* You should use child-themes for customizing FirmaSite theme. 
 * With child-theme usage, you can easily keep FirmaSite up-to-date
 * Detailed info and example child-theme: 
 * http://theme.firmasite.com/child-theme/
 */













/* DONT REMOVE THOSE LINES BELOW */

// This is just saying this site uses FirmaSite as main theme.
if ( !defined('FIRMASITE_POWEREDBY') )
	define('FIRMASITE_POWEREDBY', true);

// If you define this as false, theme will remove showcase posts from home page loop
if ( !defined('FIRMASITE_SHOWCASE_POST') )
	define('FIRMASITE_SHOWCASE_POST', true);


// If you define this as true, theme will use cdn for bootstrap style, font-awesome icons and jQuery. 
// FirmaSite Theme Enhancer plugin have to activated for work.
if ( !defined('FIRMASITE_CDN') )
	define('FIRMASITE_CDN', false);

	
// If you define this as false, theme will not combine javascript blocks when loading pages
if ( !defined('FIRMASITE_COMBINE_JS') ) {
	if (!empty($GLOBALS['wp_customize'])){
		define('FIRMASITE_COMBINE_JS', false);
	} else {
		define('FIRMASITE_COMBINE_JS', false);
	}
}

	
require ( get_template_directory() . '/functions/customizer-call.php');			// Customizer functions
require ( get_template_directory() . '/functions/init.php');	// Initial theme setup and constants

/* DONT REMOVE THOSE LINES ABOVE */


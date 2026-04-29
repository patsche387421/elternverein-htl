<?php
/*
 * Child Theme Functions
 * Version: 1.0.1
 */

// we are automatically getting child theme folder name
global $firmasite_child;	
	$firmasite_child['name'] = basename(dirname(dirname(__FILE__)));	

/* 
 * This action loads child theme's translations if have any
 */
add_action('after_setup_theme', "firmasite_childtheme_setup" );
function firmasite_childtheme_setup() {
	global $firmasite_child;
	
	// Make theme available for translation
	load_child_theme_textdomain( $firmasite_child['name'], get_stylesheet_directory() . '/languages' );
}

/* 
 * This action loads this child theme's style.css 
 */
add_action('wp_enqueue_scripts', "firmasite_childtheme_enqueue_script", 11 );
function firmasite_childtheme_enqueue_script() {
	
	// child_style
	wp_register_style( 'childtheme_style', get_stylesheet_directory_uri() . '/style.css' );
	wp_enqueue_style( 'childtheme_style' );
	
}


/* 
 This action copies old theme's menu location saves to 
 new theme if new theme doesnt have saves before. Helpful for child theme switches
*/
add_action( 'after_switch_theme',  'firmasite_childtheme_locations_rescue' );
function firmasite_childtheme_locations_rescue() {
	// bug report / support: http://unsalkorkmaz.com/
	// We got old theme's slug name
	$old_theme = get_option( 'theme_switched' );
	// Getting old theme's settings
	$old_theme_mods = get_option("theme_mods_{$old_theme}");
	// Getting old theme's theme location settings
	if (isset($old_theme_mods['nav_menu_locations']))
		$old_theme_navs = $old_theme_mods['nav_menu_locations'];
	
	// Getting new theme's theme location settings
	$new_theme_navs = get_theme_mod( 'nav_menu_locations' );
	
	// If new theme's theme location is empty (its not empty if theme was activated and set some theme locations before)
	if (!$new_theme_navs && (isset($old_theme_navs) && is_array($old_theme_navs) )) {
		// Getting registered theme locations on new theme
		$new_theme_locations = get_registered_nav_menus();

		foreach ($new_theme_locations as $location => $description ) {
			// We setting same nav menus for each theme location 
			$new_theme_navs[$location] = $old_theme_navs[$location];
		}
		
		set_theme_mod( 'nav_menu_locations', $new_theme_navs );
		
	}
}


/* 
 This action preventing child theme update checks from WordPress.Org reposity.
 Do note that this will only hide the ACTIVE theme. 
 http://markjaquith.wordpress.com/2009/12/14/excluding-your-plugin-or-theme-from-update-checks/
*/
add_filter( 'http_request_args', 'firmasite_childtheme_dont_update', 5, 2 );
function firmasite_childtheme_dont_update( $r, $url ) {
    if ( 0 !== strpos( $url, 'http://api.wordpress.org/themes/update-check' ) )
        return $r; // Not a theme update request. Bail immediately.
    $themes = unserialize( $r['body']['themes'] );
    unset( $themes[ get_option( 'template' ) ] );
    unset( $themes[ get_option( 'stylesheet' ) ] );
    $r['body']['themes'] = serialize( $themes );
    return $r;
}
 

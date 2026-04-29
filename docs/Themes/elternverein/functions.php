<?php

/* DONT REMOVE THIS LINE */
require_once ( get_stylesheet_directory() . '/functions/child_theme.php');	// Initial child theme setup and constants
/* You can add all custom php codes below
 * Some example codes you can use: 
 * http://theme.firmasite.com/tag/child-php/ 
 */




/* 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * How to add bootstrap skins
 * This example adds "EV" style to Theme Styles and removes "Default" bootstrap style
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */ 
 
/* 
 * This function adds our custom bootstrap styles to option list
 */  
add_filter( 'firmasite_theme_styles', "firmasite_childtheme_example_style" );
function firmasite_childtheme_example_style($array) {
	
	// Remove "default" named bootstrap style
	unset($array["default"]);
	
	// You can add multiple custom theme style
	$newthemes = array(
		"EV" => __( 'EV' ,  'EV'),
	);
	
	// If you want to remove default styles comes with parent theme, use:
	// return $newthemes;
	return $newthemes; // falls alte Styles bleiben sollen: + $array;
}
/* 
 * This function adds our custom bootstrap styles' location url to theme settings
 */
add_filter( 'firmasite_theme_styles_url', "firmasite_childtheme_example_style_url");
function firmasite_childtheme_example_style_url($array) {

	// You can add multiple custom theme style
	$newthemes = array(
		"EV" => get_stylesheet_directory_uri() . '/assets/themes/EV',
	);

	return $newthemes; // + $array;
}
/* 
 * This function makes our custom bootstrap style selected when switched to this theme
 * You can use this example for changing other settings too. Be careful when changing those settings.
 */
/*
add_action( 'after_switch_theme',  'firmasite_childtheme_change_style' );
function firmasite_childtheme_change_style() {
	// bug report / support: http://unsalkorkmaz.com/
	// We got theme settings
	$settings = get_option( 'firmasite_settings' );
	
	// We are setting selected style as one of our custom bootstrap style
	$settings["style"] = "pink";
	
	// Now we are saving settings
	update_option( 'firmasite_settings', $settings );
}
*/

/**
 * This is an example of a custom shortcode parser.
 * It's really easy to implement.
 * We already automatically parse all shortcodes with this notation for you: [custom:my_value]
 * You just have to add a filter and return the value you prefer.
 * In the following example we added [custom:my_name] and [custom:blog_name] to our newsletter.
 * We have now to return the preferred values, as string.
 */
// [custom:my_name]
// [custom:blog_name]
add_filter('mailpoet_newsletter_shortcode', 'mailpoet_custom_shortcode', 10, 5);

function mailpoet_custom_shortcode($shortcode, $newsletter, $subscriber, $queue, $newsletter_body) {
  // always return the shortcode if it doesn't match your own!
  switch ($shortcode) {																		//Abhängig vom verwendeten Shortcode im Mailpoet Serienmail
    case "[custom:status]":																	//Status der Mitgliedschaft
        $replacement = get_cimyFieldValue($subscriber->wp_user_id, 'EV_BEITRAG_BEZAHLT');  //Auslesen des Bezahlt Status
		if($replacement=='YES') 															//Wenn bezahlt:
		{
			$replacement = 'bereits';  														//Text mit bereits ersetzen
		}
		else
		{
			$replacement = 'noch kein';  													//Text mit noch kein  ersetzen
		}
        break;
   case "[custom:text]":																	//automatischer Textblock
        $replacement = get_cimyFieldValue($subscriber->wp_user_id, 'EV_BEITRAG_BEZAHLT');  //Auslesen des Bezahlt Status
		if($replacement=='YES') 															// wenn bezahlt
		{
			$replacement = 'Danke für Ihre Zahlung!';  										//Danke, für bezahlte Beiträge
		}
		else																				//falls nicht bezahlt:
		{
			$replacement = '<font color="red">Wichtig!</font> Da wir bei ca. 2500 Zahlungen mit der Kontrolle nicht nachkommen würden,<br>   
bitte unbedingt bei der Nachzahlung den zugeordneten Zahlungsverweis: <font color="red">';  //Füllen der Textvariablen und zum Schluss umschalten auf rot
			$temp = get_cimyFieldValue($subscriber->wp_user_id, 'ZAHLUNGSINFORMATION'); 	// Abfrage des Zahlungsverweis mittel Cimy Funktion und Mailpoet Wordpress User ID
			$replacement .= $temp ;															//Ergänzen des Textblocks mit Zahlungsverweis
			$replacement.='</font> angeben!<br>';											//Ende rote Schrift
			$replacement .=	'Kontoinformation: IBAN: AT19 3225 0000 0030 1713 <br>
EV der HTL Mödling, Raiffeisen Regionalbank Mödling, <br>
Mitgliedsbeitrag:  50,- € <br><br>' ;														//Textblock zusammenführen, mehrere Zeilenvorschübe
			$replacement .= '<b>Danke für Ihr Engagement! </b><br>';						// Danke für eine etwaige Bezahlung
		}
        break;	  
	case "[custom:uid]":																	//UID  für die Zuordnung der Texte zu einer WP user ID (Check)
        $replacement = $subscriber->wp_user_id;
        break;
    case "[custom:zverw]":  																//Abfrage des reinen Zahlungsverweis
        $replacement = get_cimyFieldValue($subscriber->wp_user_id, 'EV_BEITRAG_BEZAHLT');
		break;
    case "[custom:bezahlt]":
        $replacement = get_cimyFieldValue($subscriber->wp_user_id, 'EV_BEITRAG_BEZAHLT');  //Auslesen des Bezahlt Status
		if($replacement=='YES') 
		{
			$replacement = 'JA';  //Text mit "JA" ersetzen
		}
		else
		{
			$replacement = 'NEIN';  //Text mit nein ersetzen
		}
        break;
	case "[custom:name]":																	//Nachname des Sendungsempfängers auslesen
        $replacement = $subscriber->last_name;												//mittels Mailpoet3.0 Object Function
        break;	  
    default:
       $replacement = $shortcode;															//in Fällen, wo kein einziger Shortcode passt: Den Shortcode zurückgeben
  }
return $replacement;																		//Ende der Funktion Mailpoet Custom Shortcode, Rückgabe des Ergebnisses
}
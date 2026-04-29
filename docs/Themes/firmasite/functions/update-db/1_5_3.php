<?php

add_action('after_setup_theme', "firmasite_update_db_1_5_3" );
function firmasite_update_db_1_5_3() {
	
	if(153 > get_option("firmasite_db")) {
		
		//ShowCase
		$fs_posts = new WP_Query( array( 
			'post_type' => 'any', 
			'posts_per_page' => -1,
			'ignore_sticky_posts' => 1,
			'meta_query' => array(
				array(
					'key' => '_jsFeaturedPost',
					'value' => 'yes',				
				)		
			),
		));
		if ( $fs_posts->have_posts() ) {
			foreach ($fs_posts->posts as $fs_post) {
				delete_post_meta( $fs_post->ID, "_jsFeaturedPost" ); 
				add_post_meta( $fs_post->ID, "_firmasite_showcase", true ); 
			}
		}
	
	
		// PromotionBar
		$fp_posts = new WP_Query( array( 
			'post_type' => 'any', 
			'posts_per_page' => -1,
			'ignore_sticky_posts' => 1,
			'meta_query' => array(
				array(
					'key' => '_jspromotionbarPost',
					'value' => 'yes',				
				)		
			),
		));
		if ( $fp_posts->have_posts() ) {
			foreach ($fp_posts->posts as $fp_post) {
				delete_post_meta( $fp_post->ID, "_jspromotionbarPost" ); 
				add_post_meta( $fp_post->ID, "_firmasite_promotionbar", true ); 
			}
		}
		
		// Update completed
		update_option("firmasite_db", 153);
	}
} // firmasite_update_db_1_5_3()
	
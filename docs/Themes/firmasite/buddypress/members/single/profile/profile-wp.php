<?php

/**
 * Fires before the display of member profile loop content.
 *
 * @since BuddyPress (1.2.0)
 */
do_action( 'bp_before_profile_loop_content' ); ?>

<?php $ud = get_userdata( bp_displayed_user_id() ); ?>

<?php

	/**
	 * Fires before the display of member profile field content.
	 *
	 * @since BuddyPress (1.1.0)
	 */
	do_action( 'bp_before_profile_field_content' ); ?>

	<div class="bp-widget wp-profile">
		<h4 class="page-header"><?php bp_is_my_profile() ? _e( 'My Profile', 'firmasite' ) : printf( __( "%s's Profile", 'firmasite' ), bp_get_displayed_user_fullname() ); ?></h4>

		<table class="table wp-profile-fields">

			<?php if ( $ud->display_name ) : ?>

				<tr id="wp_displayname">
					<td class=""><?php _e( 'Name', 'firmasite' ); ?></td>
					<td class="data"><?php echo $ud->display_name; ?></td>
				</tr>

			<?php endif; ?>

			<?php if ( $ud->user_description ) : ?>

				<tr id="wp_desc">
					<td class=""><?php _e( 'About Me', 'firmasite' ); ?></td>
					<td class="data"><?php echo $ud->user_description; ?></td>
				</tr>

			<?php endif; ?>

			<?php if ( $ud->user_url ) : ?>

				<tr id="wp_website">
					<td class=""><?php _e( 'Website', 'firmasite' ); ?></td>
					<td class="data"><?php echo make_clickable( $ud->user_url ); ?></td>
				</tr>

			<?php endif; ?>

			<?php if ( $ud->jabber ) : ?>

				<tr id="wp_jabber">
					<td class=""><?php _e( 'Jabber', 'firmasite' ); ?></td>
					<td class="data"><?php echo $ud->jabber; ?></td>
				</tr>

			<?php endif; ?>

			<?php if ( $ud->aim ) : ?>

				<tr id="wp_aim">
					<td class=""><?php _e( 'AOL Messenger', 'firmasite' ); ?></td>
					<td class="data"><?php echo $ud->aim; ?></td>
				</tr>

			<?php endif; ?>

			<?php if ( $ud->yim ) : ?>

				<tr id="wp_yim">
					<td class=""><?php _e( 'Yahoo Messenger', 'firmasite' ); ?></td>
					<td class="data"><?php echo $ud->yim; ?></td>
				</tr>

			<?php endif; ?>

		</table>
	</div>

<?php

/**
 * Fires after the display of member profile field content.
 *
 * @since BuddyPress (1.1.0)
 */
do_action( 'bp_after_profile_field_content' ); ?>

<?php

/**
 * Fires and displays the profile field buttons.
 *
 * @since BuddyPress (1.1.0)
 */
do_action( 'bp_profile_field_buttons' ); ?>

<?php

/**
 * Fires after the display of member profile loop content.
 *
 * @since BuddyPress (1.2.0)
 */
do_action( 'bp_after_profile_loop_content' ); ?>

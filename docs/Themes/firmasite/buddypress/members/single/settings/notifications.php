<div class="modal firmasite-modal-static margin-top"><div class="modal-dialog"><div class="modal-content"><div class="modal-body">
<?php

/** This action is documented in bp-templates/bp-legacy/buddypress/members/single/settings/profile.php */
do_action( 'bp_before_member_settings_template' ); ?>

<form action="<?php echo bp_displayed_user_domain() . bp_get_settings_slug() . '/notifications'; ?>" method="post" class="standard-form" id="settings-form">
	<p><?php _e( 'Send an email notice when:', 'firmasite' ); ?></p>

	<?php

	/**
	 * Fires at the top of the member template notification settings form.
	 *
	 * @since BuddyPress (1.0.0)
	 */
	do_action( 'bp_notification_settings' ); ?>

	<?php

	/**
	 * Fires before the display of the submit button for user notification saving.
	 *
	 * @since BuddyPress (1.5.0)
	 */
	do_action( 'bp_members_notification_settings_before_submit' ); ?>

	<div class="submit">
		<input type="submit" class="btn btn-primary" name="submit" value="<?php esc_attr_e( 'Save Changes', 'firmasite' ); ?>" id="submit" class="auto" />
	</div>

	<?php

	/**
	 * Fires after the display of the submit button for user notification saving.
	 *
	 * @since BuddyPress (1.5.0)
	 */
	do_action( 'bp_members_notification_settings_after_submit' ); ?>

	<?php wp_nonce_field('bp_settings_notifications' ); ?>

</form>

<?php

/** This action is documented in bp-templates/bp-legacy/buddypress/members/single/settings/profile.php */
do_action( 'bp_after_member_settings_template' ); ?>
</div></div></div></div>

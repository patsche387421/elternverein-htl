<div class="modal firmasite-modal-static margin-top"><div class="modal-dialog"><div class="modal-content"><div class="modal-body">
<?php

/** This action is documented in bp-templates/bp-legacy/buddypress/members/single/settings/profile.php */
do_action( 'bp_before_member_settings_template' ); ?>

<div class="clearfix"></div><div id="message" class="info alert alert-info">

	<?php if ( bp_is_my_profile() ) : ?>

		<p><?php _e( 'Deleting your account will delete all of the content you have created. It will be completely irrecoverable.', 'firmasite' ); ?></p>

	<?php else : ?>

		<p><?php _e( 'Deleting this account will delete all of the content it has created. It will be completely irrecoverable.', 'firmasite' ); ?></p>

	<?php endif; ?>

</div>

<form action="<?php echo bp_displayed_user_domain() . bp_get_settings_slug() . '/delete-account'; ?>" name="account-delete-form" id="account-delete-form" class="standard-form" method="post">

	<?php

	/**
	 * Fires before the display of the submit button for user delete account submitting.
	 *
	 * @since BuddyPress (1.5.0)
	 */
	do_action( 'bp_members_delete_account_before_submit' ); ?>

	<label>
		<input type="checkbox" name="delete-account-understand" id="delete-account-understand" value="1" onclick="if(this.checked) { document.getElementById('delete-account-button').disabled = ''; } else { document.getElementById('delete-account-button').disabled = 'disabled'; }" />
		 <?php _e( 'I understand the consequences.', 'firmasite' ); ?>
	</label>

	<div class="submit">
		<input type="submit" class="btn btn-primary" disabled="disabled" value="<?php esc_attr_e( 'Delete Account', 'firmasite' ); ?>" id="delete-account-button" name="delete-account-button" />
	</div>

	<?php

	/**
	 * Fires after the display of the submit button for user delete account submitting.
	 *
	 * @since BuddyPress (1.5.0)
	 */
	do_action( 'bp_members_delete_account_after_submit' ); ?>

	<?php wp_nonce_field( 'delete-account' ); ?>

</form>

<?php

/** This action is documented in bp-templates/bp-legacy/buddypress/members/single/settings/profile.php */
do_action( 'bp_after_member_settings_template' ); ?>
</div></div></div></div>

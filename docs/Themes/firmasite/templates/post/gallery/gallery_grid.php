<?php 
	global $firmasite_post_gallery, $post, $firmasite_footer_junk_html;
	$attachments = $firmasite_post_gallery["attachments"];
	$instance = $firmasite_post_gallery["instance"];
	$selector = $firmasite_post_gallery["selector"];
	$columns = $firmasite_post_gallery["columns"];
	$link = $firmasite_post_gallery["link"];
	$size = $firmasite_post_gallery["size"];
	$total_images = count( $attachments );
?>
<div id="<?php echo $selector; ?>" class="row">
	<?php
	$i = 0;
	foreach ( $attachments as $id => $attachment ) {
		//$link = isset($attr['link']) && 'file' == $attr['link'] ? wp_get_attachment_link($id, $size, false, false) : wp_get_attachment_link($id, $size, true, false);
		switch($link){
			case 'file':
				$image =	wp_get_attachment_image($id, $size);
				$image_src =	wp_get_attachment_image($id, "full");
				ob_start();
				?>
                <a href="#" data-toggle="modal" data-target="#<?php echo $post->ID.'-modal-'.$id; ?>">
                	<?php echo $image; ?>
                </a>
                <?php
				$image_output = ob_get_contents(); 
				ob_end_clean();
				ob_start();
				?>
				<!-- Modal -->
				<div class="modal fade" id="<?php echo $post->ID.'-modal-'.$id; ?>" tabindex="-1" role="dialog" aria-labelledby="<?php echo $post->ID.'-modal-'.$id; ?>Label" aria-hidden="true">
				  <div class="modal-dialog modal-lg">
					<div class="modal-content">
					  <div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="<?php _e( 'Close', 'firmasite' ) ?>"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="<?php echo $post->ID.'-modal-'.$id; ?>Label"><?php echo wptexturize($attachment->post_excerpt); ?></h4>
					  </div>
					  <div class="modal-body">
						<?php echo $image_src; ?>
					  </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal"><?php _e( 'Close', 'firmasite' ) ?></button>
                      </div>                      
					</div>
				  </div>
				</div>
                <?php
				$firmasite_footer_junk_html .= ob_get_contents(); 
				ob_end_clean();
				break;				
			case 'none':
				$image_output =	wp_get_attachment_image($id, $size);
				break;				
			default:	
			case 'post':
				$image_output =	wp_get_attachment_link($id, $size, true, false);
				break;
		}
	?>
    	<div id="<?php echo $post->ID.'-image-'.$id; ?>" class="col-xs-12 col-sm-<?php echo round(12 / $columns); ?> col-md-<?php echo round(12 / $columns); ?>">
        	<?php if ( trim($attachment->post_excerpt) ) {?>
			<div class="thumbnail" data-toggle="popover" data-trigger="hover" data-container="body" data-placement="top" data-content="<?php echo esc_attr(wptexturize($attachment->post_excerpt)); ?>">
        	<?php } else { ?>				
			<div class="thumbnail">
        	<?php } ?>				
				<?php echo $image_output;?>
            </div>
        </div>
    <?php
		$i++;
		if (0 == $i % 2 ) {
			echo '<div class="clearfix visible-sm-block"></div>';
		}
		if (12 <= $i * round(12 / $columns)) {
			echo '<div class="clearfix visible-md-block visible-lg-block"></div>';
			$i = 0;
		}
    }
    ?>

</div>
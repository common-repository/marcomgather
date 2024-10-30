<?php
/**
 * @package MarcomGatherPlugin
 */

namespace MCC\Base;

class AddMedia {

  public function upload( $download_url, $file_name ) {

	require_once (ABSPATH . 'wp-admin/includes/file.php');
	$temp_file = download_url( $download_url, 10 );
	
	$wp_filetype = wp_check_filetype( $file_name, null );
	$file = array(
			'name'     => $file_name,
			'type'     => $wp_filetype['type'],
			'tmp_name' => $temp_file,
			'error'    => 0,
			'size'     => filesize( $temp_file ),
		);
	
	$overrides = array(
			'test_form'   => false,
			'test_size'   => true,
			'test_upload' => true,
		);
	
	$file_attributes = wp_handle_sideload( $file, $overrides );
	
    $attachment = array(
      'post_mime_type' => $wp_filetype['type'],
      'post_title' => sanitize_file_name( $file_name ),
      'post_content' => '',
      'post_status' => 'inherit'
    );
    
    $attach_id = wp_insert_attachment( $attachment, $file_attributes['file'] );
    
    require_once( ABSPATH . 'wp-admin/includes/image.php' );
    require_once( ABSPATH . 'wp-admin/includes/media.php' );
    $attach_data = wp_generate_attachment_metadata( $attach_id, $file_attributes['file'] );
    wp_update_attachment_metadata( $attach_id, $attach_data );
    return wp_get_attachment_url( $attach_id );
  }

}
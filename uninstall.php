<?php

/**
 * Trigger this file while uninstalling this plugin
 * @package MarcomGatherPlugin 
 */
defined( 'WP_UNINSTALL_PLUGIN' ) or die ('Hey, what are you looking for?');

// Clear database stored data

// Method one...
$assets = get_posts( 
    array( 
        'post_type' => 'asset',
        'numberposts' => -1 
    )
); 
foreach($assets as $a) {
    // true is for force delete, to remove the items even if those are in the trash already
    wp_delete_post( $a->ID, true);
}

// OR 

// Method two... more powerfull with access to the database
global $wpdb;
$wpdb->query( "DELETE FROM wp_posts WHERE post_type ='asset'" );
$wpdb->query( "DELETE FROM wp_postmeta WHERE post_id NOT IN ( SELECT id FROM wp_posts )" );
$wpdb->query( "DELETE FROM wp_term_relationship WHERE object_id NOT IN ( SELECT id FROM wp_posts )" );
<?php
/**
 * @package MarcomGatherPlugin
 * @version 1.0.11
 */
/*
Plugin Name:    MarcomGather
Plugin URI:     https://gather.marcom.com/plugin
Description:    Easily find and add images and videos on your WordPress website from your MarcomGather assets.
Version:        1.0.11
Author:         MarcomCentral
Author URI:     https://marcom.com/
License:        MIT
Text Domain:    marcom-gather
*/

/*
Copyright 2021 Marcom Central 

TODO:: Add the license text here
*/

defined( 'ABSPATH' ) or die ( 'Hey, what are you looking for?' );
if ( file_exists( dirname( __FILE__ ) . '/vendor/autoload.php' ) ) {
    require_once dirname( __FILE__)  . '/vendor/autoload.php';
}

/**
 * WordPress activation/deactivation hooks
 */
function activate_marcomgather_plugin() {
    MCC\Base\Activate::plugin();
}

register_activation_hook( __FILE__, 'activate_marcomgather_plugin' );

function deactivate_marcomgather_plugin() {
    MCC\Base\Deactivate::plugin();
}

register_deactivation_hook( __FILE__, 'deactivate_marcomgather_plugin' );

// Plugin initialization
if (  class_exists( 'MCC\\Init' ) ) {
    MCC\Init::register_services();
}


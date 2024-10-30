<?php
/**
 * @package MarcomGatherPlugin
 */
namespace MCC\Base;

use \MCC\Base\BaseController;
use \MCC\Base\AddMedia;

class ScriptLoader extends BaseController {

    public function register() {
        // scrips loaded on the admin section
        add_action( 'admin_enqueue_scripts', array( $this, 'add_admin_scripts' ) );

        // scripts loaded on the front-end section
        add_action( 'wp_enqueue_scripts', array( $this, 'add_scripts' ) );

        add_filter( 'block_categories_all', [ $this, 'marcom_block_category' ], 99, 1 );

        add_action( 'rest_api_init', array( $this, 'add_marcom_options_endpoint' ));

        add_action( 'rest_api_init', array( $this, 'add_asset_from_marcom_endpoint' ));
    }
    function add_marcom_options_endpoint() {
        register_rest_route( 'marcom/v1', '/marcom_url', array(
            'methods'               => 'GET',
            'callback'              => array( $this, 'get_marcom_url' ),
            'permission_callback'   => '__return_true'
        ) );
    }

    function add_asset_from_marcom_endpoint() {
        register_rest_route( 'marcom/v1', '/getMarcomAsset', array(
            'methods'               => 'POST',
            'callback'              => array($this, 'get_marcom_asset'),
            'permission_callback'   => '__return_true'
        ) );
    }

    function get_marcom_asset( $request ) {
        $addMedia = new AddMedia;
        return $addMedia->upload(
            $request['downloadUrl'],
            $request['fileName']
        );
    }

    function get_marcom_url() {
        return get_option( 'mcc_gather_app_url' );
    }

    function add_scripts() {
        // enqueue plugin style files
        wp_enqueue_script(
            'mcc-gather-scripts',
            $this->plugin_url . '/app/script/marcom-gather.js'
        ); 
        wp_enqueue_style(
            'mcc-gather-style',
            $this->plugin_url . '/app/style/marcom-gather.css'
        ); 
    }

    function add_admin_scripts() {
        // enqueue plugin style files
        wp_enqueue_script(
            'mcc-gather-script-admin',
            $this->plugin_url . '/app/script/marcom-gather-admin.js'
        );
        wp_enqueue_style(
            'mcc-gather-style-admin',
            $this->plugin_url . '/app/style/marcom-gather-admin.css'
        ); 
    }

    function marcom_block_category( $categories ) {
        // setup category array
        $kwa_category = [
            'slug'  => 'MarcomGather',
            'title' => 'MarcomGather'
        ];

        // make a new category array and insert ours at position 1
        $new_categories = [];
        $new_categories[0] = $kwa_category;

        // rebuild cats array
        foreach( $categories as $category ) {
            $new_categories[] = $category;
        }

        return $new_categories;
    }
}
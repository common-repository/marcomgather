<?php
/**
 * @package MarcomGatherPlugin
 */
namespace MCC\Pages;
use \MCC\Base\BaseController;

class Admin extends BaseController {

    public $settings    = array();
    public $sections    = array();
    public $fields      = array();

    public function register() {

        $this->setSettings();
        $this->setSections();
        $this->setFields();
  
        // prepare the administration pages
        add_action( 'admin_menu', array( $this, 'add_admin_pages' ) );

        add_action( 'admin_init', array( $this, 'register_admin_fields' ) );

    }

    public function add_admin_pages() {
        add_menu_page(
            'MarcomGather Plugin',                      // page title
            'MarcomGather',                             // menu title
            'manage_options',                           // capability
            'marcomgather_plugin',                      // menu slug
            array($this, 'admin_page'),                 // the callback function   
            $this->plugin_url . 'app/img/mcc-icon.svg', // the icon used within the menu
            100                                         // position in the bar
        );

    } 

    public function admin_page() {
        require_once $this->plugin_path . '/templates/admin.php'; 
    }



    public function setSettings() {
        $this->settings = array(
            array(
                'option_group' =>   'mcc_gather_settings',
                'option_name' =>    'mcc_gather_app_url',
                'args' => array(
                    'type' =>           'string',
                    'description' =>    'The URL where the MarcomGather can be found',
                    'show_in_rest' =>   true,
                    'default' =>        'https://gather.marcom.com/'
                )
            )
        );
        return $this;
    }

    public function setSections() {
        $this->sections = array(
            array(
                'id' => 'mcc_gather_index',
                'title' => '',
                'callback' => array( $this, 'adminSection' ),
                'page' => 'marcomgather_plugin'
            )
        ); 
        return $this;
    }
    public function adminSection() {
        echo '';
    }

    public function setFields() {
        $this->fields = array(
            array(
                'id' =>             'mcc_gather_app_url',
                'title' =>          'MarcomGather URL',
                'callback' =>       array( $this, 'adminField_appURL' ),
                'page' =>           'marcomgather_plugin',
                'section' =>        'mcc_gather_index',
                'args' => array(
                    'label_for' =>  'mcc_gather_app_url',
                    'class' =>      'mcc-gather-field'
                )
            )
        );
        return $this;
    }
    public function adminField_appURL() {
        $value = esc_attr( get_option( 'mcc_gather_app_url','' ) );
        echo '<input 
                type="text" 
                class="regular-text" 
                id="mcc_gather_app_url"
                name="mcc_gather_app_url" 
                value="' . esc_attr($value) . '"
                placeholder="The URL of MarcomGather instance"
            />';
    }
    public function adminField_defaultUsername() {
        $value = esc_attr( get_option('mcc_gather_default_user','') );
        echo '<input 
                type="text" 
                class="regular-text" 
                id="mcc_gather_default_user" 
                name="mcc_gather_default_user" 
                value="' . esc_attr($value) . '"
                placeholder="Default username"
            />';
    }

    public function register_admin_fields() {
        foreach( $this->settings as $setting )
            register_setting(
                $setting["option_group"],
                $setting["option_name"],
                $setting["args"]
            );
        
        $option = get_option( 'mcc_gather_app_url', '' );
        if (!$option) {
            update_option( 'mcc_gather_app_url', 'https://gather.marcom.com/' );
        }

        foreach( $this->sections as $section )
            add_settings_section(
                $section["id"],
                $section["title"],
                ( isset ( $section["callback"] ) ? $section["callback"] : '' ),
                $section["page"]
            );

        foreach($this->fields as $field)
            add_settings_field(
                $field["id"],
                $field["title"],
                ( isset ( $field["callback"] ) ? $field["callback"] : '' ),
                $field["page"],
                $field["section"],
                ( isset ( $field["args"] ) ? $field["args"] : '' )
            );
    }
}
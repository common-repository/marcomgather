<?php
/**
 * @package MarcomGatherPlugin
 */
namespace MCC\Base;
use \MCC\Base\BaseController;

class SettingsLink extends BaseController {

    public function register() {
        // prepare the administration pages
        add_filter('plugin_action_links_' . $this->plugin . '/' . $this->plugin . '.php', array($this, 'settings_link') );
    }

    public function settings_link( $links ) {
        $setting_link = "<a href='admin.php?page=marcomgather_plugin'>Settings</a>";
        array_push( $links, $setting_link );
        return $links;
    }

}
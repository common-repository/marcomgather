<?php
/**
 * @package MarcomGatherPlugin
 */
namespace MCC;

final class Init {

    /**
     * Stores all the initialization classes required by the plugin
     */
    public static function get_services() {
        return [
            Pages\Admin::class,
            Base\ScriptLoader::class,
            Base\SettingsLink::class,
            Block\AssetBlock::class
        ];
    }

    /**
     * Creates instances of the service classes and activates the registration
     */
    public static function register_services() {
        foreach( self::get_services() as $class ) {
            $service = self::instantiate( $class );
            if ( method_exists( $service, 'register' ) ) {
                $service->register(); 
            }
        }
    }

    private static function instantiate( $class ) {
        return new $class();
    }
}


<?php
/**
 * @package MarcomGatherPlugin
 */
namespace MCC\Base;

class Deactivate {

    public static function plugin() {
        flush_rewrite_rules();
    }

}
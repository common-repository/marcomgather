<?php
/**
 * @package MarcomGatherPlugin
 */
namespace MCC\Base;

class Activate {

    public static function plugin() {
        flush_rewrite_rules();
    }
}
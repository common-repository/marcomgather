<?php
/**
 * @package MarcomGatherPlugin
 */
namespace MCC\Block;
use \MCC\Base\BaseController;

class AssetBlock extends BaseController {

    public function register() {
        add_action( 'init',  array($this, 'create_block_marcomgather' ));
    }

    public function create_block_marcomgather() {
        register_block_type( $this->plugin_path );
    }

}
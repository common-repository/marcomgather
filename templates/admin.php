<div>
    <h1 style="font-weight: 200">MarcomGather Plugin Settings</h1>
    <p>Please set the URL to your MarcomGather account, for example, https://gather.marcom.com.
         <br />You will be asked to authenticate when you use the MarcomGather custom block.</p>
    <?php settings_errors(); ?>

    <form method="post" action="options.php">
        <?php
            settings_fields('mcc_gather_settings');
            do_settings_sections('marcomgather_plugin');
            submit_button();
        ?>
    </form>
</div>

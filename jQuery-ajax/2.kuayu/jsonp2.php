<?php

        $arr = array('a'=>1,'b'=>2,'c'=>3);
        $_result = json_encode($arr);
        $_callback = @$_GET['callback'];
        echo $_callback."($_result)";

?>
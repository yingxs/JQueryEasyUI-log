<?php


/*
        if($_GET['user'] == 'yingxs'){
            echo 'false';
        }else{
            echo 'true';
        }
*/

        if( $_POST['user'] == 'yingxs' && $_POST['pass'] == '123456'){
            echo 'true';
        }else{
            echo 'false';
        }

?>
<?php

include('connect.php');


$name = $_REQUEST['nome'];
$email = $_REQUEST['email'];
$cell = $_REQUEST['cell'];
$pass = $_REQUEST['pass'];


    
             
$dados = array(
"name" => $name,
"email" => $email,
"cell" => $cell,
"pass" => $pass
            );

echo json_encode($dados);

?>

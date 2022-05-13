<?php

include ("conn.php");

//Colect all datas

$name = mysqli_real_escape_string($conn, trim($_REQUEST['nome']));
$email = mysqli_real_escape_string($conn, trim( $_REQUEST['email']));
$cell = mysqli_real_escape_string($conn, trim( $_REQUEST['cell']));
$pass = mysqli_real_escape_string($conn, trim( $_REQUEST['pass']));

//nm seria nome
//em seria Email
//num seria numero de celular
//pass seria senha

$sql = "INSERT INTO test (nm, em, num, pass) VALUES ( '$name','$email', '$cell','$pass')";

if($conn -> query($sql)){

    $dados = array(
        "name" => $name,
        "email" => $email,
        "cell" => $cell,
        "pass" => $pass
        );

        echo json_encode($dados);

}



    
            

?>

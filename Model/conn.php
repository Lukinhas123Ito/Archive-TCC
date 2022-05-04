<?php

$name ="localhost";
$dbname = "test";
$user ="root";
$pass ="bil0u!@#";


try{
    $conn = new PDO("mysql:host=$name;dbname=$dbname",$user,$pass );

    $conn ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Deu certo";

}catch(PDOException $e){
    echo "Deu pau" . $e->getMessage();
}

?>
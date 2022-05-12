<?php

include('../.vscode/sftp.json');
//Brige to PHP to Mysql

define('HOST', 'sql106.epizy.com');
define('user', 'epiz_31710289');
define('senha', 'apr2aCzwe82');
define('db', 'epiz_31710289');


$name ="localhost";
$dbname = "teste";
$user ="root";
$pass ="bil0u!@#";

$conn = mysqli_connect(HOST , user, senha , db) or die ("Não foi encontrado o Paranawe");



?>
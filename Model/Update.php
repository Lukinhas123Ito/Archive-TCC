<?php 
include('conn.php');

$id = mysqli_real_escape_string($conn, trim($_REQUEST['id']));
$name = mysqli_real_escape_string($conn, trim($_REQUEST['nome']));
$email = mysqli_real_escape_string($conn, trim( $_REQUEST['email']));
$cell = mysqli_real_escape_string($conn, trim( $_REQUEST['cell']));
$pass = mysqli_real_escape_string($conn, trim( $_REQUEST['pass']));


$sql  = "UPDATE test SET nm = ".$name.",em = ".$email." , num = ".$cell." , pass = ".$pass." WHERE id = $id";
?>
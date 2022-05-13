<?php
//Part to connect in database
include ("conn.php");

$sel= mysqli_real_escape_string($conn, trim($_REQUEST['sel']));


$sql="SELECT * FROM test WHERE nm like '%$sel%'";

$res = mysqli_query($conn,$sql);

while($row = mysqli_fetch_assoc($res)){
    $dados = array(
        "id" => $row['id'],
        "nm" => $row['nm'],
        "em" => $row['em'],
        "num" => $row['num'],
        "pass" => $row['pass']
    );
    
    echo json_encode($dados);
}


?>
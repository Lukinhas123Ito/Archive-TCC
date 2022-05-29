<?php
//Part to connect in database
include ("conn.php");

$sel= mysqli_real_escape_string($conn, trim($_REQUEST['sea']));


$sql="SELECT * FROM test WHERE nm like '%$sel%'";

$res = mysqli_query($conn,$sql);


while($row = mysqli_fetch_assoc($res)){
    
    echo "
    
    <tr name="."line".$row['id']." id="."line".$row['id'].">
    
        <td name="."id".$row['id']." id="."id".$row['id'].">".$row['id']."</td>
        <td name="."nm".$row['id']." id="."nm".$row['id'].">".$row['nm']."</td>
        <td name="."em".$row['id']." id="."em".$row['id'].">".$row['em']."</td>
        <td name="."num".$row['id']." id="."num".$row['id'].">".$row['num']."</td>
        <td name="."pass".$row['id']." id="."pass".$row['id'].">".$row['pass']."</td>

        <td><a href="."Edit.html".">Editar</a></td>]
        <td>Deletar</td>
    </tr>"
    ;
}


?>
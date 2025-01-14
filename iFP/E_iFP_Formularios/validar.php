<?php
    //echo $_GET;

    //var_dump($_GET);

    $nombre = $_GET["nombre"];
    $telefono = $_GET["telefono"];

    $server = "localhost";
    $usuario = "root";
    $contra = "";
    $bb_dd = "USUARIO";
    

    $mysqli = new mysqli($server, $usuario, $contra, $bb_dd);


    echo "Hola $nombre tu telefono es $telefono";

    $consulta = "INSERT INTO usuarios(nombre, telefono) VALUES ($nombre $telefono)";

    $mysqli -> query($consulta);
?>

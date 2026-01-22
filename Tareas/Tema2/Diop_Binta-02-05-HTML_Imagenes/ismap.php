<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php

        $query = $_SERVER['QUERY_STRING'];
        // "valor1,valor2"

        // Convertirla en un array manualmente
        $parametros = explode(',', $query);

        echo "Pulso en x=" . (int) $parametros[0] . "px y en y=" . (int) $parametros[1] . "px";
        echo "<br><a href='index.html'>Volver</a>";

    ?>

</body>
</html>
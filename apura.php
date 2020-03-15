<?php
$num1 = $_GET['n1'];
$num2 = $_GET['n2'];

$voto = intval($num1.$num2);
//var_dump($voto);

$nummanha1 = '09';
$nummanha2 = '05';




/*/ Create connection
$conn = mysqli_connect("localhost", "root", "", "eleicao_system");
//verificando conexão
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
    echo "Deu ruim no banco";
}
echo "Connected successfully";
mysqli_close($conn);




//contador dos votos
switch ($voto) {
    case $nummanha1:
    //Karoline e Awdrey - Ziza
        //ler campo no banco
        
        //somar o voto
        $manha1 = $manha1 + 1;

        //salvar no banco a quantidade atualizada

        break;
    
    case $nummanha2:
    //Loran e Lucas - Maria
        //ler campo no banco

        //somar o voto
        $manha2 = $manha2 + 1;

        //salvar no banco a quantidade atualizada

        break;
 
    default:
        $nulo = $nulo + 1;
    break;
}

//var_dump($manha1, $manha2, $nulo);
*/
header('Refresh: 3;url=salvavoto.php'); 
?>
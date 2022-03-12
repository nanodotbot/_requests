<?php
header("Content-Type: application/json");
$data = $_POST['data'];
$JSON_response =
'{
    "obj" : { "data" : "'. $data .'" }
}';
echo $JSON_response;
?>
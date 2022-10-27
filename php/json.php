<?php
$json_string = file_get_contents('php://input');
$response = json_decode($json_string, true);
$data = $response['data'];

$JSON_response =
'{
    "obj" : { "data" : "'. $data .'" }
}';
echo $JSON_response;
?>
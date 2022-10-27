<?php
header("Content-Type: application/json");
$data = file_get_contents('../js/text.json');
echo $data;
?>
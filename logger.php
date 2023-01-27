<?php
    $ip = $_GET['ip'];
    $city = $_GET['city'];
    $region = $_GET['region'];
    $postal = $_GET['postal'];
    $timestamp = time();
    $log = "[$timestamp] IP: $ip | City: $city | Region: $region | Postal: $postal\n";
    file_put_contents("log.txt", $log, FILE_APPEND);
?>

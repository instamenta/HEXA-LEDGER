<?php
$requestPath = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if ($requestPath === '/chat/') {
    echo "Chat home page!";
} elseif ($requestPath === '/chat/about') {
    echo "Chat about page!";
} else {
    http_response_code(404);
    echo "Page not found";
}
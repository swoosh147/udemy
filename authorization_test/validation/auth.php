<?php
$login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
$pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);

$pass = md5($pass."nbhgfyrjh");

require "../blocks/connect.php";

$result = $mysql->query("SELECT * FROM `users` WHERE `login` = '$login' AND `pass` = '$pass'");
$user = $result -> fetch_assoc();
if(count($user) == 0){
    echo "user is not log in";
    exit();
}

// print_r($user);
// exit();

setcookie('user', $user['name'], time() + 60, "/");

$mysql->close();

header('Location: /');

?>
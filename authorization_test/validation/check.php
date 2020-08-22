<?php

// $_GET
// $login = $_POST['login'];
// echo $login;
$login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
$name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
$pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);

if(mb_strlen($login) < 5 || mb_strlen($login) > 90) {
    echo "incorrect login";
    exit();
} else if (mb_strlen($name) < 3 || mb_strlen($name) > 50) {
    echo "incorrect name";
    exit();
} else if (mb_strlen($pass) < 2 || mb_strlen($pass) > 7) {
    echo "incorrect pass. from 2 to 6 symbols";
    exit();
} 

$pass = md5($pass."nbhgfyrjh");

require "../blocks/connect.php";
$mysql->query("INSERT INTO `users` (`login`, `pass`, `name`) VALUES('$login', '$pass', '$name')");

$mysql->close();

header('Location: /');
exit();

?>
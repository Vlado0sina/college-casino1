<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once("userhash.class.php");
require_once("db.class.php");


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    if (isset($_POST['login-username']) && isset($_POST['login-password'])) {

        $username = $_POST['login-username'];
        $pass = $_POST['login-password'];

        $db = db::getInstance();

        if ($db) {

            $checkUserQuery = $db->prepare("SELECT * FROM users WHERE username=?");
            $checkUserQuery->bind_param("s", $username);
            $checkUserQuery->execute();
            $result = $checkUserQuery->get_result();

            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                $stored_hash = $row['pass_word'];

                if (password_verify($pass, $stored_hash)) {
                    echo "User successfully authenticated!";
                    header('Location: play_zone.html');
                    exit;
                } else {
                    echo "Incorrect password!";
                }
            } else {
                echo "A user with this username does not exist!";
            }
            $checkUserQuery->close();
        } else {
            echo "Error connecting to database!";
        }
    } else {
        echo "Username or password not specified!";
    }
}

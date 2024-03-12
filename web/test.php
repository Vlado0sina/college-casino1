<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once("userhash.class.php");
require_once "db.class.php";


if ($_SERVER['REQUEST_METHOD'] === 'POST') {



    if (
        isset($_POST['firstName']) && isset($_POST['lastName']) && isset($_POST['DOB']) &&
        isset($_POST['country']) && isset($_POST['postalCode']) && isset($_POST['city']) && isset($_POST['address']) &&
        isset($_POST['email']) && isset($_POST['username']) && isset($_POST['pass'])
    ) {
        $userhash = new UserHash();

        $firstName = $_POST['firstName'];
        $lastName = $_POST['lastName'];
        $DOB = $_POST['DOB'];

        $country = $_POST['country'];
        $postalCode = $_POST['postalCode'];
        $city = $_POST['city'];
        $address = $_POST['address'];

        $email = $_POST['email'];
        $username = $_POST['username'];
        $pass = $_POST['pass'];
        /*$checkRules = $userhash->checkRules($pass);
        if (!$checkRules) {
            echo "<script>alert('The password must be from 8 to 72 characters!');</script>";
            exit;
        }*/


        $userhash->newHash($pass);
        $hash = $userhash->getHash();

        $db = db::getInstance();

        if ($db) {
            $stmt = $db->prepare("INSERT INTO users (firstName, lastName, DOB, country, postalCode, city, address, email, username, pass_word ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");



            if ($stmt) {
                $stmt->bind_param("ssssssssss", $firstName, $lastName, $DOB, $country, $postalCode, $city, $address, $email, $username, $hash);
                $stmt->execute();
                var_dump($stmt);
                $stmt->close();

                echo "Data inserted successfully";
            } else {
                echo "Faild";
            }

            // header('Location: play_zone.html');
            exit;
        } else {
            echo "Failed to connect to database!";
        }
    } else {
        echo "One or more fields are missing in the form submission!";
    }



    $allFormData = array();


    foreach ($_POST as $key => $value) {
        if (!empty($key)) {
            $allFormData[$key] = $value;
        }
    }


    var_dump($allFormData);
}

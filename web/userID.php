<?php
require_once("db.class.php");
class UserDatabase
{
    private $conn;

    public function __construct()
    {
        $this->conn = db::getInstance()->getConnection();
    }

    public function getUserById($userid, $style = MYSQLI_ASSOC)
    {
        $sql = "SELECT * FROM users WHERE id = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("i", $userid);
        $stmt->execute();
        $result = $stmt->get_result();
        $resultset = $result->fetch_all($style);
        return $resultset;
    }
    public function updateUser($userid, $newData)
    {
        $sql = "UPDATE users SET firstName=?, lastName=?, DOB=?, country=?, postalCode=?, city=?, address=?, email=?, username=?, pass_word=? WHERE userid=?";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("ssssssssssi", $newData['firstName'], $newData['lastName'], $newData['DOB'], $newData['country'], $newData['postalCode'], $newData['city'], $newData['address'], $newData['email'], $newData['username'], $newData['pass'], $userid);
        $stmt->execute();
        return $stmt->affected_rows;
    }
}

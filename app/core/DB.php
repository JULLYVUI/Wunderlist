
<?php

class DB{

    protected static $host="localhost";
    protected static $dbname="wunderlist";
    protected static $user="root";
    protected static $pass="";
    // protected $charset="utf8";
    protected static function getDB()
    {
        try {
            $dsn="mysql:host=".self::$host.";dbname=".self::$dbname.";charset=utf8";
            $dbh=new PDO($dsn,self::$user,self::$pass);
            $dbh->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
            // Phải có return $dbh thì mới không lỗi
            return $dbh;
        } catch (PDOException $e) {
            echo "Connection fail: ".$e->getMessage();
        }
    }

}


?>


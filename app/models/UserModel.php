<?php
 class UserModel extends DB{
    
    private $username;
    private $email;
    private $password;
    public $errors=[];
    
    /**
     * The constructor
     */
   public function __construct($username=NULL,$email=NULL,$password=NULL){
      $this->username=$username;
      $this->email=$email;
      $this->password=$password;
   //    foreach ($data as $key => $value) {
   //       $this->$key = $value;
   //   }
   }
   
   public function getUsername(){
      return $this->username;
   }
   public function setUsername($username){
      $this->username=$username;
   }

   public function getPassword(){
      return $this->password;
   }
   public function setPassword($password){
      $this->password=$password;
   }

   public function getEmail(){
      return $this->email;
   }
   public function setEmail($email){
      $this->email=$email;
   }


   /**
    * Validate of form
    */

   public function validate(){
      // Name
      
      if($this->username==""){
         $this->errors[]="Name is required";
      }
      //Email address
      // if(filter_var($this->email,FILTER_VALIDATE_EMAIL)){
      //    $this->errors[]="Invalid email";
      // }
      
      if(isset($this->password)){
         if(strlen($this->password)<6){
            $this->errors[]="Please enter at 6 character of password";
         }
         if(preg_match("/.*[a-z].*/i",$this->password)==0){
            $this->errors[]="Password need at least one letter";
         }
         //Tìm số trong password và phải chứa ít nhất 1 số
         if(preg_match("/.*\d+.*/",$this->password)==0){
            $this->errors[]="Password need at least one number";
         }
      }

    }

   /**
    *  Save user model when create user(sign-up)
    */
   public function save($user){
      $this->validate();
      if(sizeof($this->errors)==0){

         $password_hash=password_hash($user->getPassword(),PASSWORD_DEFAULT);
         $sql="INSERT INTO user(name,email,password) VALUES(?,?,?)";
         $stmt=static::getDB()->prepare($sql);
         $stmt->execute(array($user->getUsername(),$user->getEmail(),$password_hash));
         
      }else{
         print_r($this->errors) ;
      }

      // return false;
   } 

   /**
    * Find a user model by email address
    */
   public static function findByEmail($email){

      $sql="SELECT * FROM user WHERE email=:email";
      $stmt=static::getDB()->prepare($sql);
      $stmt->bindValue(":email",$email,PDO::PARAM_STR);
      // FETCH_CLASS sẽ thực thi xong rồi mới chạy __constructer
      $stmt->setFetchMode(PDO::FETCH_OBJ);
      $stmt->execute();
      $count=$stmt->rowCount();
      // if($count !=1){
      //    echo 'User with that email does not exist';
      //    return false;
      // }
      return $stmt->fetch(); 
   }
   /**
    * Authenticate a user by email and password
    */

   public static function authenticate($email,$password){

      $user=UserModel::findByEmail($email);
        if($user) {
          
            if(password_verify($password, $user->password)) {
               // Thêm !isset($_SESSION để không bị thông báo notice A session had already been started - ignoring in 
               if(isset($_SESSION)){
                  $_SESSION['user_id']=$user->id;
                  $_SESSION['username']=$user->name;
                  
               }   else{
                  echo'session chưa tồn tại';
               }
          
                return true;
               
            }
            return false;
           
        }
   }


}
?>
<?php

// http://localhost/todo/login

class User extends Controller{
/**
 * Email :dinal@gmail.com
 * Pass dinal123
 * or
 * Email:j99@gmail.com
 * Pass j99@gmail.com
 */
    public function login(){ 
       
        if(isset($_POST['login'])){  
            $user=$this->model("UserModel");
            $kt= $user->authenticate($_POST["email"],$_POST["password"]);
            // var_dump($kt);
            if($kt){ 
                header('Location: lis/index');
            }else{
                echo'k';
            }
        }   $this->view("users/login");
    }
   
    function signup(){
        $this->view("users/signup");
        // session_start();
        $user=$this->model("UserModel");
        if($_SERVER["REQUEST_METHOD"] == "POST"){  
            $user->setUsername($_POST["username"]);
            $user->setPassword($_POST["password"]);
            $user->setEmail($_POST["email"]);
            $user->save($user);
        }
        
    }

    public function logout(){
        session_destroy();
        $this->view("users/login");
       
    }
}

?>
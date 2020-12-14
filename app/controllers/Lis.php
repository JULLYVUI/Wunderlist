<?php

// http://localhost/todo/login

class Lis extends Controller{
    public $ListModel;
    public function __construct()
    {    
         $this->ListModel=$this->model('ListModel');
         if(!isset($_SESSION['user_id'])){
            header("Location:user/login");
         }
    }
    public function index(){
        if(isset($_SESSION['user_id'])){ 
            $mang=$this->ListModel->showUserLists();
            $this->view('tasks',[
                        "detail"=>"Lis/list",
                        "MangList"=>$mang,
                        
                    ]);
        }else{
            session_destroy();  
            header("Location:login");
            exit();
            }
        
    }
   
   
    public function create_list()  {
       
        $new_list=$this->ListModel->createList();
        if($new_list){
            header("Location:../Lis/index");
        }
       
    }

    public function delete_list($list_id){ 
        if(isset($list_id)){
            if($this->ListModel->deleteList($list_id)){
                header("Location:../Lis/index");
            };

        }
       
       
    }
  
  
}

?>
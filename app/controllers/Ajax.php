<?php
class Ajax extends Controller{
    public $TaskModel;
    public $ListModel;
    public function __construct()
    {
        $this->TaskModel=$this->model('TaskModel');
        $this->ListModel=$this->model('ListModel');
        
    }
    public function showTasks(){
        $mul_task=$this->TaskModel->showTasks($_GET['list_id']);
          print_r (json_encode($mul_task));
    }
    
    public function deleList(){

        $dele_lt=$this->ListModel->deleteList($_POST['list_id']);
        print_r($dele_lt);
       
    }
    public function addTask(){
        $add_task= $this->TaskModel->addNewTask($_POST['list_id']);
        print_r($add_task);
        
    }
    public function updateTask(){
            $task_name=trim(strip_tags($_POST['task_name']));
            $star=strip_tags($_POST['star']);
            $up_task=$this->TaskModel->updateTask($_POST['task_id'],$task_name,$star);
            print_r($up_task);
        
    }
    public function markTaskComplete(){
        $mask_com=$this->TaskModel->markTaskComplete($_POST['task_id']);
        print_r($mask_com);
    }
    public function markTaskNotComplete(){
        $masknot_com=$this->TaskModel->markTaskNotComplete($_POST['task_id']);
        print_r($masknot_com);
    }
    public function deleTask(){
        $dele_task=$this->TaskModel->deleteTask($_POST['task_id']);
    }
   

}
?>
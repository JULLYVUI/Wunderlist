<?php
class Task extends Controller{
    public $TaskModel;
    public function __construct()
    {
        $this->TaskModel=$this->model("TaskModel");
    }
    public function add_task($list_id){
        if(isset($list_id)){
           $a= $this->TaskModel->addNewTask($list_id);
           print_r($a);
        }else{
            echo'task no tc';
        }
    }
    public function updateTask($task_id){
        if(isset($task_id)){
            $up_task=$this->TaskModel->updateTask($task_id);
            print_r($up_task);
        }
    }
}
?>
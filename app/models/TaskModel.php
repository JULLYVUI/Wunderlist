<?php
class TaskModel extends DB{
     
    /**
     * Show task by list of user
     */
    public function showTasks($list_id){
        // chưa thêm sort task
        $query="SELECT t.id as task_id, t.name,t.star,t.status,t.created_at,t.due_date, l.id
                FROM task t 
                LEFT JOIN list l ON l.id=t.list_id AND l.id=:list_id
                WHERE l.user_id=:user_id";
        $stmt=static::getDB()->prepare($query);
        $stmt->execute(array(':list_id'=>$list_id, ':user_id'=>$_SESSION['user_id']));
        return $stmt->fetchAll();

    }
    /**
     * Create new task 
     */
    public function addNewTask($list_id){

        if(isset($_POST['task_name'])){
            $query="INSERT INTO task(name,list_id) VALUES(?,?)";
            $stmt=static::getDB()->prepare($query);
            $stmt->execute(array($_POST['task_name'],$list_id));
            $count=$stmt->rowCount();
            if($count==1){
              return true;
            }else{
                return false;
            }
        }
        return false;
     
    }
    /**
     * Update task
     */
    public function updateTask($task_id,$task_name,$star){
            $query="UPDATE task
                    SET name=:task_name, star=:star
                    WHERE id=$task_id ";
            $stmt=static::getDB()->prepare($query);
            $stmt->execute(array(':task_name'=>$task_name,':star'=>$star));
        
    }
    /**
     * Delete task
     */
    public function deleteTask($task_id){
        if(isset($task_id)){    
            $query="DELETE FROM task WHERE id=$task_id";
            $stmt=static::getDB()->query($query);
            $count=$stmt->rowCount();
            if($count==1){
                return true;
            }else{
                echo 'Task dele failed';
            }
        }
        return false;
    }
    /**
     * maskTaskComplete
     */
    public function markTaskComplete($task_id){
        if(isset($task_id)){
            $query="UPDATE task SET status='complete', due_date=NOW() WHERE id=$task_id";
            $stmt=static::getDB()->prepare($query);
            $stmt->execute();
            $count=$stmt->rowCount();
            
        }
    }
     /**
     * maskTaskNotComplete
     */

    public function markTaskNotComplete($task_id){
        if(isset($task_id)){
            $query="UPDATE task SET status='active' WHERE id=$task_id";
            $stmt=static::getDB()->prepare($query);
            $stmt->execute();
            $count=$stmt->rowCount();
            if($count==1){
              print_r("t");
            }else{
                print_r("f");
            }
        }
    }

    /**
     * count task active
     */
    
    
}
?>
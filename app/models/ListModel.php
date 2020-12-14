<?php
class ListModel extends DB{
   private $name;
   public function __construct($name=NULL){
      $this->name=$name;
     
   }
   public function getName(){
      return $this->name;
   }
   public function setName($name){
      $this->name=$name;
   }


   /**
    * Show List by User
    */

   // AND t.status='active'
   public function showUserLists(){

      $query="SELECT l.name,l.created_at,l.id, COUNT(t.id) AS number_of_tasks 
              FROM list l 
              LEFT JOIN task t ON l.id=t.list_id
              WHERE l.user_id= :user_id 
              GROUP BY l.id";
      $stmt=static::getDB()->prepare($query);
      $stmt->execute(array(':user_id'=>$_SESSION['user_id']));
      return $stmt->fetchAll();
      
   }
   /**
    * Create New List
    */
   public function createList(){

      if(isset($_POST['t'])){
         $query="INSERT INTO list(name,user_id)VALUE(:name,:user_id)";
         $stmt=static::getDB()->prepare($query);
         $stmt->execute(array(':name'=>$_POST['list_name'],':user_id'=>$_SESSION['user_id']));
         return true;
       
      }
      return false;
      
   }
   /**
    * Delete List
    */
   public function deleteList($list_id){

      $query="DELETE FROM list WHERE id=? AND user_id=?";
      $stmt=static::getDB()->prepare($query);
      $stmt->execute(array($list_id,$_SESSION['user_id']));
      $count=$stmt->rowCount();
      if($count==1){
         return true;
      }else{
         return false;
      }
      return false;

   }

 
  
}
?>
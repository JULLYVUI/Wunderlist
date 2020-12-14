<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ToDo</title>
    <link rel="stylesheet" href="../public/css/style.css">
    <link href="https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" rel="stylesheet">
   

</head>

<body id="body">
<!-- Context-dele -->
<?php include_once("block/contextDele.php") ?>
<!-- Context-list -->
<?php include_once("block/contextList.php") ?>
<!-- Context-menu -->
<?php include_once("block/contextMenu.php") ?>
  
    <!--  Account Setting -->
<?php include_once("block/setAc.php")?>

<!-- gen -->
    <div class="container" id="container">
    <!-- Slide -->
    <?php include_once("block/slide.php") ?>
        <div class="main">
           <!-- main-center -->
            <?php include_once("pages/main.php") ?>
        </div>
    </div>


    <!-- right-colum -->
   
<script src="../public/js/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <script src="https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
<!-- <script src="../public/js/wunder.js"></script> -->
<script src="../public/js/main.js"></script>

              
</body>

</html>
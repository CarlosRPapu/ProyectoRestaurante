
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Restaurant</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/animation.css">
    <link rel="stylesheet" href="./css/animation_btn.css">
    <link rel="stylesheet" href="./css/icono.css">
    <link rel="stylesheet" href="./css/footer.css">
    <link rel="stylesheet" href="./css/animationView.css">

    <script src="./js/popper.main.js"></script>
    <script src="./js/bootstrap.min.js"></script>
    
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.9.1/font/bootstrap-icons.min.css" rel="stylesheet">

</head>

<body class="body">
  
    <?php include './commons/menu.php'; ?>
    <div class="container text-center">
        <?php
                session_start();

        include './pages/home.php';
        
       /* session_start();

        if (isset($_SESSION['login'])) {
            if ($_SESSION['login'] == true) {
                include './pages/home.php';
            } else {
                include './pages/login.php';
            }
        } else {
            include './pages/login.php';
        }*/

        
        ?>
        
    </div>
    


    <?php include './pages/footer.php';?>

    <script src="./js/animationView.js"></script>

    
</body>

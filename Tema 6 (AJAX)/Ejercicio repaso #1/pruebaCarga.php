<html>
    
<head>
</head>
    
<body>
    <?php
        $user = $_GET["user"];
        $document = new DOMDocument();
    
        if (strlen($user) >= 3) {

            if ($user == "gus") {
                echo "Username already taken";
            }
            else {
                echo "Username ok";
            }
        }
        
        else{
            echo "Username too short";
        }

    ?>
</body>
    
</html>
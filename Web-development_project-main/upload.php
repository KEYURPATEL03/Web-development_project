<?php
include("methods.php");
$method = new method();
   //         if(isset($_POST['sub'])){
        //        $method->import($_FILES['file']['tmp_name']);
       //     }
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <link rel="stylesheet" href="styles/upload.css" />
    <link rel="stylesheet" href="styles/default.css">
    <meta charset="utf-8">
    <title>Upload Documents</title>
</head>

<body>
    <header class="banner">
        <a href="index.html"><img src="styles/stoodle-logo.png" class="logo"></a>
        <div class="banner-title">Upload Documents</div>
        <ul class="banner-info">
            <li><a href="AboutUs.html">About Us</a></li>
            <li><a href="Support.html">Support</a></li>
        </ul>
    </header>

    <nav>
        <a href="teachers.html" id="dashboard">Dashboard</a>
        <a href="participant.php">Student List </a>
        <a href="upload.php">Upload Documents</a>
        <a href="tgrades.html">Input Grades</a>
        <a href="tcontact_info.html">Contact Info</a>
    </nav>


    <div class="content">
        <h2>Upload documents assignments & slides here:</h2>
        <div class="fileupload-container">
        
            <form method="post" enctype = "multipart/form-data">
                <label>Choose a .csv File</label>
                <input type="file" name="file" accept=".csv">
                <button type = "submit" name="sub" value="import" id="uploadButton">Import</button>
            </form>
            


        </div>
    </div>

   


</body>

</html>
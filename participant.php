<?php
include("methods.php");
$method = new method();
if(isset($_POST['sub'])){
    $method->import($_FILES['file']['tmp_name']);
}
$query_select = "SELECT studentID,studentName,groupNo FROM student";
$result = mysqli_query($method, $query_select);


?>
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
        <link rel="stylesheet" href="styles/participant.css"/>
        <link rel="stylesheet" href="styles/default.css">
        <script src="script/participant.js"></script>
        <meta charset="utf-8">
        <title>Student Roster</title>
</head>

<body>
<header class="banner">
        <a href="index.html"><img src="styles/stoodle-logo.png" class="logo"></a>
        <div class="banner-title">Student Roster</div>
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
        <h2>Option 1 : Upload .csv file to generate the Student List</h2>
        <div class="csv">

            <form method="post" enctype = "multipart/form-data">
                <label>Choose a .csv File</label>
                <input type="file" name="file" accept=".csv">
                <button type = "submit" name="sub" value="import" id="uploadButton">Import</button>
            </form>
            
        
        </div>
        <h2>Option 2 : Enter Students Manually</h2>
        <div class = "tbl_2">
            
            <table>
                <tr id = "head">
                    <th> Student ID:</th>
                    <th> Student Name </th>
                    <th> Group No.</th></tr>
                <tr>
                    <td>40.....</td>
                    <td>Akash</td>
                    <td> 1 </td></tr>
                <tr>
                    <td>40.....</td>
                    <td>Ekta Patel</td>
                    <td> 2 </td></tr>
                <tr>
                    <td>40.....</td>
                    <td>Hanae </td>
                    <td> 3 </td></tr>
                <tr>
                    <td>40.....</td>
                    <td>Sarah </td>
                    <td> 1 </td> 
                </tr>

                <?php  
                          while($row = mysqli_fetch_array($result))  
                          {  
                           
                ?>  
                          <tr>  
                               <td><?php echo $row["studentID"]; ?></td>  
                               <td><?php echo $row["studentName"]; ?></td>  
                               <td><?php echo $row["groupNo"]; ?></td>   
                          </tr>  
                <?php  
                          }  
                ?>  

            </table>

            <div id="data">
                <input type="number" id="student_id" placeholder="Enter Student ID">
                <input type="text" id="name" placeholder="Enter Name">
                <input type="number" id="group_no" placeholder="Enter Group No.">
                <button>Add Student</button>
            </div>
        </div>
        

    </div>
    


</body>

</html>




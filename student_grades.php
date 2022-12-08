<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <link rel="stylesheet" href="styles/student_grades.css" />
  <link rel="stylesheet" href="styles/default.css" />
  <link rel="icon" href="styles/icon.png" />
  <meta charset="utf-8">
  <title>Student Grades</title>
</head>

<body>

  <header class="banner">
    <a href="index.html"><img src="styles/stoodle-logo.png" class="logo"></a>
    <div class="banner-title">Grades</div>
    <ul class="banner-info">
      <li><a href="AboutUs.html">About Us</a></li>
      <li><a href="Support.html">Support</a></li>
    </ul>
  </header>

  <nav>
    <a href="students.html" id="dashboard">Dashboard</a>
    <a href="student_grades.html">Grades</a>
    <a href="scontact_info.html">Contact Info</a>
  </nav>

  <div class="content">

    <h2>SOEN 287 - Section Q</h2>
    <h3>FALL 2022</h3>

    <br>

    <?php
    $servername = "sql311.epizy.com";
    $username = "epiz_33100670";
    $password = "kgKnMKhpvKi";
    $dbname = "epiz_33100670_stoodle";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    $sql = "SELECT studentID, del1, del2, del3, midterm, final FROM student";

    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        echo "<table>";
        echo "<caption>Student Grades</caption>";
        echo "<tr>";
        echo "<th> Student ID </th>";
        echo "<th> Deliverable #1 </th>";
        echo "<th> Deliverable #2 </th>";
        echo "<th> Deliverable #3 </th>";
        echo "<th> Midterm </th>";
        echo "<th> Final </th>"
        echo "</tr>";


        while ($row = mysqli_fetch_assoc($result)) {
            echo "<tr>";
            echo "<td>" . $row["studentID"] . "</td>";
            echo "<td>" . $row["del1"] . "</td>";
            echo "<td>" . $row["del2"] . "</td>";
            echo "<td>" . $row["del3"] . "</td>";
            echo "<td>" . $row["midterm"] . "</td>";
            echo "<td>" . $row["final"] . "</td>";
            echo "</tr>";
        }
        echo "</table>";
    } else {
        echo "0 results";
    }

    mysqli_close($conn);
?>

  <script src="script/gradeFunctions.js"></script>
</body>

</html>

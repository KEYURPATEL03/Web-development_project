function addHtmlTableRow(){
    var table = document.getElementById("myTable"),
    newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3),
    cell5 = newRow.insertCell(4),
    cell6 = newRow.insertCell(5),
    cell7 = newRow.insertCell(6),
    cell8 = newRow.insertCell(7),
    cell9 = newRow.insertCell(8),
    
    lname = document.getElementById("lname").value,
    fname = document.getElementById("fname").value,
    studentID = document.getElementById("studentID").value,
    deliverable1 = document.getElementById("deliverable1").value,
    deliverable2 = document.getElementById("deliverable2").value,
    deliverable3 = document.getElementById("deliverable3").value,
    midterm = document.getElementById("midterm").value,
    final = document.getElementById("final").value,
    feedback = document.getElementById("feedback").value;
    
    cell1.innerHTML = lname;
    cell2.innerHTML = fname;
    cell3.innerHTML = studentID;
    cell4.innerHTML = deliverable1;
    cell5.innerHTML = deliverable2;
    cell6.innerHTML = deliverable3;
    cell7.innerHTML = midterm;
    cell8.innerHTML = final;
    cell9.innerHTML = feedback;
    
    }
   
    
    
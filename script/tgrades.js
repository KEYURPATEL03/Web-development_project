var table = document.getElementById("table"),rIndex;
            
            for(var i = 1; i < table.rows.length; i++)
            {
                table.rows[i].onclick = function()
                {
                    rIndex = this.rowIndex;
                    console.log(rIndex);
                    
                    document.getElementById("studentID").value = this.cells[0].innerHTML;
                    document.getElementById("name").value = this.cells[1].innerHTML;
                    document.getElementById("deliverable1").value = this.cells[2].innerHTML;
                    document.getElementById("deliverable2").value = this.cells[3].innerHTML;
                    document.getElementById("deliverable3").value = this.cells[4].innerHTML;
                    document.getElementById("midterm").value = this.cells[5].innerHTML;
                    document.getElementById("final").value = this.cells[6].innerHTML;
                    document.getElementById("feedback").value = this.cells[7].innerHTML;
                };
            }
            
            
           // edit the row
            function editRow()
            {
                table.rows[rIndex].cells[0].innerHTML = document.getElementById("studentID").value;
                table.rows[rIndex].cells[1].innerHTML = document.getElementById("name").value;
                table.rows[rIndex].cells[2].innerHTML = document.getElementById("deliverable1").value;
                table.rows[rIndex].cells[3].innerHTML = document.getElementById("deliverable2").value;
                table.rows[rIndex].cells[4].innerHTML = document.getElementById("deliverable3").value;
                table.rows[rIndex].cells[5].innerHTML = document.getElementById("midterm").value;
                table.rows[rIndex].cells[6].innerHTML = document.getElementById("final").value;
                table.rows[rIndex].cells[7].innerHTML = document.getElementById("feedback").value;
            }


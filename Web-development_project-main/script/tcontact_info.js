/* 
Written by : Keyur Patel 
*/
function checkEmail(){

    var emailFormat = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/";
    var checkemail = document.edit_info.email.value;
    if(checkemail.value.match(emailFormat)){
    }
    else{
        alert("Invalid email format!");
    }
}
function check_add_info()
{

//////////////////////////////////////////////////////////////////
/* FORM VALIDATION */
    if((document.getElementById("iname").value == "") )
    {
        alert("Please enter your name (it's EMPTY). Delete the Un-Complete data!" );
    } 
    else if((document.getElementById("section").value == "") )
    {
        alert("Please enter the class section (it's EMPTY). Delete the Un-Complete data!");
    }
    else if((document.getElementById("instructor_email").value == "") )
    {
        alert("Please enter your email (it's EMPTY) ! Delete the Un-Complete data!");

    }
    else if((document.getElementById("Mon").checked==false) && (document.getElementById("Tue").checked==false) 
                && (document.getElementById("Wed").checked==false)&& (document.getElementById("Thu").checked==false)
                && (document.getElementById("Fri").checked==false)&& (document.getElementById("Sat").checked==false)
                && (document.getElementById("Sun").checked==false))
    {
                alert("Please select a day for Office Hour!! Delete the Un-Complete data!");

    }
    
    

////////////////////////////////////////////////////////////////////
/* DYNAMIC TABLE : ADD TO TABLE */
        var iname=document.edit_info.iname.value; 
        var section=document.edit_info.section.value; 
        var course=document.edit_info.course.value; 
        var email=document.edit_info.email.value; 
        var office_days = document.querySelector('input[name="days"]:checked').value;
        var hours = document.getElementById("time_from").value + "-" + document.getElementById("time_to").value;
                    
        var tr = document.createElement('tr');
                    
                    var td1 = tr.appendChild(document.createElement('td'));
                    var td2 = tr.appendChild(document.createElement('td'));
                    var td3 = tr.appendChild(document.createElement('td'));
                    var td4 = tr.appendChild(document.createElement('td'));
                    var td5 = tr.appendChild(document.createElement('td'));
                    var td6 = tr.appendChild(document.createElement('td'));

                    var td7 = tr.appendChild(document.createElement('td'));

                    
                    td1.innerHTML=iname;
                    td2.innerHTML=section;
                    td3.innerHTML=course;
                    td4.innerHTML=email;
                    td5.innerHTML=office_days;
                    td6.innerHTML=hours;

                    td7.innerHTML='<input type="button" name="del" value="Delete" onclick="delStudent(this);">'

        document.getElementById("tbl").appendChild(tr);

}
/* DYNAMIC TABLE : DELETE FROM A TABLE */
function delStudent(Stud){
    alert("Are you Sure about deleting the Data Row ?")
    var s=Stud.parentNode.parentNode;
    s.parentNode.removeChild(s);
}



function checkEmail(){

    var emailFormat = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/";
    var email = document.getElementById("instructor_email");

    if(email.value.match(emailFormat)){

    }else{
        alert("Invalid email format!");
    }
}

function checkEmptyInGive()
{
    if((document.getElementById("name").value == "") )
    {
        alert("Please enter your name(Updated Instructor name).");
    }
    else if((document.getElementById("section").value == "") )
    {
        alert("Please enter the class section");
    }
    else if((document.getElementById("Mon").checked==false) && (document.getElementById("Tue").checked==false) 
                && (document.getElementById("Wed").checked==false)&& (document.getElementById("Thu").checked==false)
                && (document.getElementById("Fri").checked==false)&& (document.getElementById("Sat").checked==false)
                && (document.getElementById("Sun").checked==false))
    {
                alert("Please select the lecture days!! ");

    }
    else if((document.getElementById("email").value == "") )
    {
        alert("Please enter your email !");

    }
    else if((document.getElementById("Mon_o").checked==false) && (document.getElementById("Tue_o").checked==false) 
                && (document.getElementById("Wed_o").checked==false)&& (document.getElementById("Thu_o").checked==false)
                && (document.getElementById("Fri_o").checked==false)&& (document.getElementById("Sat_o").checked==false)
                && (document.getElementById("Sun_o").checked==false))
    {
                alert("Please select the office hour days!! ");

    }

}
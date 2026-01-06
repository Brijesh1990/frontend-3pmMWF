const nm=document.getElementById('name');
const em=document.getElementById('email');
const ph=document.getElementById('phone');
const myForm=document.getElementById('myForm');

myForm.addEventListener('submit',function(e){

    if(document.myForm.name.value=="")
    {
        e.preventDefault();
        alert("Please enter your name.");
        document.myForm.name.focus();
        return false;
    }
    if(document.myForm.email.value=="")
    {
        e.preventDefault();
        alert("Please enter your email.");
        document.myForm.email.focus();
        return false;
    }
    if(document.myForm.phone.value=="")
    {
        e.preventDefault();
        alert("Please enter your phone number.");
        document.myForm.phone.focus();
        return false;
    }
});


    
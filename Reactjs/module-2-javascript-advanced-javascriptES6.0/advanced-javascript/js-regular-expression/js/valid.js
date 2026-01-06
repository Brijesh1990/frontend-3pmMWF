function validation()
{
    if(document.frm.fname.value=="")
    {
        alert('Please enter your firstName')
        document.frm.fname.focus();
        return false;
    }
    var fnm=/^[A-Za-z]+$/;
    if(!fnm.test(document.frm.fname.value))
    {
         alert('Please enter your firstName alphabetic characters only')
        document.frm.fname.focus();
        return false;
    }

     if(document.frm.lname.value=="")
    {
        alert('Please enter your lastName')
        document.frm.lname.focus();
        return false;
    }
    var lnm=/^[A-Za-z]+$/;
    if(!lnm.test(document.frm.lname.value))
    {
         alert('Please enter your lastName alphabetic characters only')
        document.frm.lname.focus();
        return false;
    }

    
     if(document.frm.email.value=="")
    {
        alert('Please enter your email')
        document.frm.email.focus();
        return false;
    }

    var em=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

     if(!em.test(document.frm.email.value))
    {
        alert('Please enter your valid email address')
        document.frm.email.focus();
        return false;
    }

     if(document.frm.address.value=="")
    {
        alert('Please enter your Address')
        document.frm.address.focus();
        return false;
    }
}
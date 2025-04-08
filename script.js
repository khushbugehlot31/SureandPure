function emailSend(){

    var username = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var message = document.getElementById('message').value;

    var messageBody = "Name " + username +
    "<br/> Email " + email +
    "<br/> Contact " + contact +
    "<br/> Message " + message;

    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sureandpure10@gmail.com",
    Password : "7591774BE7943BF76B8B510D14D3F878D7FE",
    To : 'sureandpure10@gmail.com',
    From : "sureandpure10@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => {
    if(message=='OK'){
        swal("Successfully Submitted!", "You clicked the button!", "success");
    }
    else{
        swal("Error", "You clicked the button!", "error");
    }
  }
);
}
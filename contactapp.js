// This contacapp.js is used to validate the contact form

const contactForm = document.getElementById("contact-form");
const submit = document.getElementById("submit");
const namePara= document.getElementById("namepara");
const emailPara = document.getElementById("email-para");
const subjectPara = document.getElementById("subject-para");


submit.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('HelloA...');

  const name = contactForm['name'].value;
  const email = contactForm['email'].value;
  const subject = contactForm['subject'].value;
  // const name = contactForm['name'].value;

  console.log(namePara);

  if(name == '') {
    errorMessage(namePara, "Name is Tony required");
  } else {
    removeMessage(namePara);
  }
if(email === '') {
  errorMessage(emailPara, "Email address is required");

} else 
 if( !isValid(email) ) {
  errorMessage(emailPara, "Email not valid");
   
} else {
  removeMessage(emailPara);

}

if(subject == '') {
  errorMessage(subjectPara, "Subject is required to serve you better");
} else {
  removeMessage(subjectPara);
}


});


function errorMessage(field, message){
  field.innerText= message;
  field.style.opacity = '1';
}

function removeMessage(field){
  field.style.opacity = '0';
}

function isValid(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase()); 
}




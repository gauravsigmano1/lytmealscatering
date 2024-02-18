// Form Validation
function form(){
  let name = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;
  let phonecheck = Array.from(String(phone),Number);

  if(name == '' || name == null)
  {
    document.getElementById('inputError').innerHTML = "Enter your Name";
    return false;
  }
  else if(phone == '' || phone == null)
  {
    document.getElementById('inputError').innerHTML = "Enter your Phone Number";
    return false;
  }
  else if(phonecheck[0]<6)
  {
    document.getElementById('inputError').innerHTML = "Enter Correct Phone Number";
    return false;
  }
  else if(phone.length>10 || phone.length<10)
  {
    document.getElementById('inputError').innerHTML = "Enter Correct Phone Number";
    return false;
  }
  else
  {
    localStorage.setItem('name',name);
    localStorage.setItem('phone',phone);

    const form = document.getElementById("form");
    form.addEventListener("submit", sendMail);
    form.addEventListener("submit", final);
  }
}

// OTP Validation
function formotp(){
  let nameotp = document.getElementById('nameotp').value;
  let phoneotp = document.getElementById('phoneotp').value;
  let phonecheckotp = Array.from(String(phoneotp),Number);
  let otp = document.getElementById('otp').value;

  if(nameotp == '' || nameotp == null)
  {
    document.getElementById('inputErrorOtp').innerHTML = "Enter your Name";
    return false;
  }
  else if(phoneotp == '' || phoneotp == null)
  {
    document.getElementById('inputErrorOtp').innerHTML = "Enter your Phone Number";
    return false;
  }
  else if(phonecheckotp[0]<6)
  {
    document.getElementById('inputErrorOtp').innerHTML = "Enter Correct Phone Number";
    return false;
  }
  else if(phoneotp.length>10 || phoneotp.length<10)
  {
    document.getElementById('inputErrorOtp').innerHTML = "Enter Correct Phone Number";
    return false;
  }
  else
  {
    $('#'+'otp').show();
    document.getElementById('submit').innerHTML = 'Verify OTP';
    
    if(otp == 123){
      $('.test').removeAttr('data-bs-toggle');
      $('#exampleModal').modal('hide');
      alert('You can call the vendor now');
      document.querySelector('.test').innerHTML = 'Call Now';
      return false;
    }
    else{
      document.getElementById('inputErrorOtp').innerHTML = "Enter Correct OTP";
    return false;
    }
  }
}



// Company Show

function display(){
  let select = document.getElementById('occassion');
  let option = select.value;

  if(option == 'com'){
    $('#'+'company').show();
  }
}


// Send Email
function sendMail(){
  var params = {
   name: document.getElementById('name').value,
   phone: document.getElementById('phone').value,
   occassion: document.getElementById('occassion').value,
   noOfPeople: document.getElementById('noOfPeople').value,
   comapany: document.getElementById('comapany').value,
   address: document.getElementById('address').value,
   note: document.getElementById('note').value,
   
  }
  emailjs.send("service_5ft0bfp","template_sro509m", params).then(function(res){
    // alert('Success')
  })
}

// Combined success message
function final(){
  alert('Thank you, we will get back to you soon')
}

// Generate OTP
// function generateOTP() {
 
//   let digits = '0123456789';
//   let OTP = '';
//   for (let i = 0; i < 4; i++) {
//       OTP += digits[Math.floor(Math.random() * 10)];
//   }
//   return OTP;
// }

// console.log("OTP of 4 digits: ")
// console.log(generateOTP());

// function display(){
//   let select = $('#occassion:selected').value();
//   console.log(select);
//   if(select == 'Office Daily Meal'){
//     $('#'+'company').show();
//   }  
// }
  

// function toggle(){
// let hide = document.getElementById("hide");
// let tog = document.getElementById("tog");
// if(hide.style.display == "block"){
//   hide.style.display == "none";
//   tog.innerHTML = 'Show';
// }
// else {
//   hide.style.display == "block";
//   tog.innerHTML = 'Hide';
// }
// }

// jQuery(document).ready(function(){
//   $('#tog').click(function(){
//     $('#hide').toggle();
//   })}
// )

// function show(div){
//   $('#'+div).show();
// }

// function toggle(){
//   show('hide');
// }
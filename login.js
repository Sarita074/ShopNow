document.addEventListener('DOMContentLoaded', () => {
    let registereddate = JSON.parse(localStorage.getItem('registereddate'));
    console.log(registereddate);
  
    let uname = document.getElementById('uname');
    let email = document.getElementById('email');
    let pwd = document.getElementById('pwd');
    let btn = document.getElementById('btn');
  
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      let jsondata = localStorage.getItem('registereddate');
      let emailValue = email.value.trim();
      let password = pwd.value.trim();
  
      // Validate inputs
      if (emailValue === "" || password === "") {
        alert("All fields are required. Please fill in all the details.");
        return;
      }
  
      if (jsondata) {
        registereddate = JSON.parse(jsondata);
        let userdetails = registereddate.find((element) => element.email === email.value && element.password === pwd.value);
        if (userdetails) {
          localStorage.setItem('username', uname);
          localStorage.setItem('email', email);
          location.href = './home.html';
        } else {
          alert("your email or password is incorrect");
        }
      }
    });
  });
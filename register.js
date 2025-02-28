let uname=document.getElementById('uname')
let email=document.getElementById('email')
let pwd=document.getElementById('pwd')
let btn=document.getElementById('btn')
let registereddate=[]

console.log(registereddate)

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    let jsondata=localStorage.getItem('registereddate')
    let username = uname.value.trim();
    let emailValue = email.value.trim();
    let password = pwd.value.trim();
    
    // Validate inputs
    if (username === "" || emailValue === "" || password === "") {
        alert("All fields are required. Please fill in all the details.");
        return;
    }

    if(jsondata){
        registereddate=JSON.parse(jsondata)
        let userdetails=registereddate.find(element=>element.email===email.value)
        if(userdetails){
            alert('alrady register please login!!!')
            uname.value=""
            
        }
        else{
            registereddate.push({uname:uname.value,email:email.value,password:pwd.value})
            localStorage.setItem('registereddate', JSON.stringify(registereddate))
            location.href='./index.html'
        }
    }
    else{
        registereddate.push({uname:uname.value,email:email.value,password:pwd.value})
        localStorage.setItem('registereddate', JSON.stringify(registereddate))
        location.href='./index.html'
    }

})

localStorage.setItem('userfullname', uname.value);
let firstName = document.getElementById("firstName");

firstName.addEventListener('keyup',()=>{
    let firstNameRegEx = /^[A-z]+$/g;
    let fnError = document.getElementById('fnError');

    if(firstNameRegEx.test(firstName.value)) {
        fnError.innerHTML = "";
    } else {
        fnError.innerHTML = "Alphabets Only!";
    }
});


email.addEventListener('keyup',()=>{
    let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*.(\w{2,4})$/g;
    if(emailRegEx.test(email.value)) {
        emError.innerHTML = "";
    } else {
        emError.innerHTML = "Enter Valid Email!";
    }
});


password.addEventListener('keyup',()=>{
    let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/g;
    if(passwordRegEx.test(password.value)) {
        pError.innerHTML = "";
    } else {
        pError.innerHTML = "Password should contain 1 uppercase, 1 lowercase, 1 special character, 1 numeric, and be between 8 to 15 characters.";
    }
});


city.addEventListener('keyup',()=>{
    let cityRegEx = /^[A-z]+$/g;
    if(cityRegEx.test(city.value)) {
        cError.innerHTML = "";
    } else {
        cError.innerHTML = "Alphabets Only!";
    }
});


zip.addEventListener('keyup',()=>{
    let zipRegEx = /^\d+$/g;
    if(zipRegEx.test(zip.value)) {
        zError.innerHTML = "";
    } else {
        zError.innerHTML = "Numbers Only!";
    }
});

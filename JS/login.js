/*
  1.Login

  1.1 Validation for user login with pre-defined user info
  1.2 If auth success, Login into the admin panel
  1.3 If auth fail, display error message
  1.4 Store auth info to the local storage until user logout
 */
let email, password; //Declare the variable
let isAuthSuccessed, isEmailSuccessed, isPasswordSuccessed = false;
let preDefinedData = {
    email: 'helianthusbeyourchoice@gmail.com',
    password: 'helianthus2021',
}

function clickMe() {
    //When user click the submit button
    //Validation for user login with pre-defined user info
    console.log("user click me");
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    // Validation for user login with pre-defined user info

    if (preDefinedData.email == email) {
        //Check email successfully
        console.log("Correct Email");
        isEmailSuccessed = true;

    }
    if (preDefinedData.password == password) {
        //Check password successfully
        console.log("Correct Password");
        isPasswordSuccessed = true;
    }

    if (isEmailSuccessed && isPasswordSuccessed == true) {
        //If auth success, Login into the admin panel
        console.log("Correct Email and Password");

        //Store auth info to the local storage until user logout
        window.localStorage.setItem('email', JSON.stringify(email));
        window.localStorage.setItem('password', JSON.stringify(password));
        window.location.href = "admin_panel.html";
    } else {
        //If auth fail, display error message
        alert("Incorrect Email and Password!");
    }

}

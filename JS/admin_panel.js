/* 2.Logout
 *2.1 Destroy local storage data
 *2.2 Go to login page
 */


function clickMe() {
    console.log("user click me");
    //Destroy local storage data
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('password');
    window.localStorage.clear();
    //Go to login page
    window.location.href = "login.html";

}





console.log("Destroy Local Storage Data");
console.log("Login Page");




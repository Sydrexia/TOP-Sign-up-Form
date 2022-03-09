let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');

let passwordMatchMessage = document.getElementById('pass-match');
passwordMatchMessage.style.fontSize = '10px';
passwordMatchMessage.style.color = "red";

password.onkeyup = function() {
    password = document.getElementById('password');
    confirmPassword = document.getElementById('confirm-password');
    if (password.value === confirmPassword.value) {
        document.getElementById('pass-match').innerHTML = "";
        password.style.borderColor = "green";
        confirmPassword.style.borderColor = "green";
        
    } else {
        document.getElementById('pass-match').innerHTML = "*Passwords don't match.";
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
    }
}

confirmPassword.onkeyup = function() {
    password = document.getElementById('password');
    confirmPassword = document.getElementById('confirm-password');
    if (password.value === confirmPassword.value) {
        document.getElementById('pass-match').innerHTML = "";
        password.style.borderColor = "green";
        confirmPassword.style.borderColor = "green";
        
    } else {
        document.getElementById('pass-match').innerHTML = "*Passwords don't match.";
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
    }
}

// password.onfocus = function() {
//     password = document.getElementById('password');
//     confirmPassword = document.getElementById('confirm-password');
//     if (password.value === confirmPassword.value) {
//         document.getElementById('pass-match').innerHTML = "";
//         password.style.borderColor = "green";
//         confirmPassword.style.borderColor = "green";
        
//     } else {
//         document.getElementById('pass-match').innerHTML = "*Passwords don't match.";
//         password.style.borderColor = "red";
//         confirmPassword.style.borderColor = "red";
//     }
// }

// confirmPassword.onfocus = function() {
//     password = document.getElementById('password');
//     confirmPassword = document.getElementById('confirm-password');
//     if (password.value === confirmPassword.value) {
//         document.getElementById('pass-match').innerHTML = "";
//         password.style.borderColor = "green";
//         confirmPassword.style.borderColor = "green";
        
//     } else {
//         document.getElementById('pass-match').innerHTML = "*Passwords don't match.";
//         password.style.borderColor = "red";
//         confirmPassword.style.borderColor = "red";
//     }
// }

// password.onblur = function() {
//     password = document.getElementById('password');
//     confirmPassword = document.getElementById('confirm-password');
//     if (password.value === confirmPassword.value) {
//         document.getElementById('pass-match').innerHTML = "";
//         password.style.borderColor = "green";
//         confirmPassword.style.borderColor = "green";
        
//     } else {
//         document.getElementById('pass-match').innerHTML = "*Passwords don't match.";
//         password.style.borderColor = "red";
//         confirmPassword.style.borderColor = "red";
//     }
// }

// confirmPassword.onblur = function() {
//     password = document.getElementById('password');
//     confirmPassword = document.getElementById('confirm-password');
//     if (password.value === confirmPassword.value) {
//         document.getElementById('pass-match').innerHTML = "";
//         password.style.borderColor = "green";
//         confirmPassword.style.borderColor = "green";
        
//     } else {
//         document.getElementById('pass-match').innerHTML = "*Passwords don't match.";
//         password.style.borderColor = "red";
//         confirmPassword.style.borderColor = "red";
//     }
// }



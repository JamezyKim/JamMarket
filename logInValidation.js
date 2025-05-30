var email;
var password;

const dataBase = [
    { email: 'yt4921@gmail.com', password: 'abc' },
    { email: 'nam@gmail.com', password: '123' },
    { email: 'ykkk@gmail.com', password: '123' }
]


function getUserInfo(event) {
    event.preventDefault();
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    console.log(email);
    console.log(password);

    var user = dataBase.find(u => u.email === email);

    if (!user) {
        console.error("User info is not found");
        alert("User info is not found");
    }

    else if (user.password !== password) {
        console.error("Wrong password");
        alert("Wrong password");
    }
    else {
        console.log("Log in success");
        $("#blackRoundBox").hide();
        $("#alternativeTextBox").text("Log in success");
    }
}



const encryptText = {};
const decryptText = {};



function biMap() {
    const plainText = 'abcdefghijklmnopqrstuvwxyz';
    const reversedText = 'zyxwvutsrqponmlkjihgfedcba';

    for (let i = 0; i < plainText.length; i++) {
        encryptText[plainText[i]] = reversedText[i];
        decryptText[reversedText[i]] = plainText[i];
    }

    for (let i = 0; i < plain.length; i++) {
        encryptionMap[plain[i].toUpperCase()] = cipher[i].toUpperCase();
        decryptionMap[cipher[i].toUpperCase()] = plain[i].toUpperCase();
    }

    
}
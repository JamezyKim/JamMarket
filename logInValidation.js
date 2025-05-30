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



const encryptMap = {};
const decryptMap = {};

function biMap() {
    let plainText = 'abcdefghijklmnopqrstuvwxyz';
    let reversedText = 'zyxwvutsrqponmlkjihgfedcba';

    for (let i = 0; i < plainText.length; i++) {
        encryptMap[plainText[i]] = reversedText[i];
        decryptMap[reversedText[i]] = plainText[i];
    }

    for (let i = 0; i < plain.length; i++) {
        encryptMap[plainText[i].toUpperCase()] = cipher[i].toUpperCase();
        decryptMap[reversedText[i].toUpperCase()] = plain[i].toUpperCase();
    }
}

function encrypt() {
    let inputText = document.getElementById('password').value;
    let encryptText = '';

    for (let i = 0; i < inputText.length; i++) {
        const input = inputText[i];
        encryptText += encryptMap[input] || input;
    }

    document.getElementById('password').value = encryptText;
    console.log('Encrypted words: ', encryptText);
}

function decrypt() {
    let inputText = document.getElementById('password').value;
    let decryptText = '';

    for (let i = 0; i < inputText.length; i++) {
        const input = inputText[i];
        decryptText += decryptMap[input] || input;
    }
    document.getElementById("password").value = decryptedText;
    console.log("Decrypted text:", decryptText);
}
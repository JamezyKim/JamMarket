var email;
var password;

const dataBase = [
    { email: 'yt4921@gmail.com', password: 'abc' },
    { email: 'nam@gmail.com',   password: '123'  },
    { email: 'ykkk@gmail.com',     password: '123'  }
]

function encrypt(){
    const inputText = document.getElementById("password").value;
    let encryptedText = "";
    const key = 5;
    for(let i=0; i<inputText.length;i++){
        const charCode = inputText.charCodeAt(i);
        if(charCode >= 65 && charCode <= 90){
            encryptedText += String.fromCharCode(((charCode - 65 + key) % 26) + 65);
        }
        else if(charCode >= 97 && charCode <= 122){
            encryptedText += String.fromCharCode(((charCode - 97 + key) % 26) + 97);
        }
        else{
            encryptedText += inputText[i];
        }
    }
    document.getElementById("password").value = encryptedText;
    console.log("encrypted text: ",encryptedText );
}

function decrypt(){
    const inputText = document.getElementById("password").value;
    let decryptedText = "";
    const key = 5;
    for(let i=0; i<inputText.length;i++){
        const charCode = inputText.charCodeAt(i);
        if(charCode >= 65 && charCode <= 90){
            decryptedText += String.fromCharCode(((charCode - 65 - key + 26) % 26) + 65);
        }
        else if(charCode >= 97 && charCode <= 122){
            decryptedText += String.fromCharCode(((charCode - 97 - key + 26) % 26) + 97);
        }
        else{
            decryptedText += inputText[i];
        }
    }
    document.getElementById("password").value = decryptedText;
    console.log("decrypted text: ",decryptedText );
}

function getUserInfo(event){
    event.preventDefault();
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    console.log(email);
    console.log(password);

    var user = dataBase.find(u => u.email === email);

    if(!user){
        console.error("User info is not found");
        alert("User info is not found");
    }

    else if (user.password !== password) {
        console.error("Wrong password");
        alert("Wrong password");
    }
    else{
        console.log("Log in success");
        $("#blackRoundBox").hide();
        $("#alternativeTextBox").text("Log in success");
    }
}

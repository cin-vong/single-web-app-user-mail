import { response } from "express";

let emailValue = document.getElementById('email').Value;

const objetToSend = {
    'name': nameValue,
    'address': emailValue,
}

//PostQuery
async function queryPost(url) {

    const options = {
        method: 'POST',
        body: JSON.stringify(objetToSend),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    let reponse = await fetch (url, options);
    let data = await response.json();
    return data;
}

//Signup
const btn = document.getElementById('btn');

btn.addEventListener('click', e => {
    e.preventDefault();
    queryPost('http://localhost:3000/api/auth/signup');
})

//SignIn
const connectBtn = document.getElementById('connect');
connectBtn.addEventListener('click', e => {
    e.preventDefault();
    queryPost('http://localhost:3000/api/auth/signin').then(data => console.log(data));

})
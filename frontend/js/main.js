let nameValue = document.getElementById('name').value;
let emailValue = document.getElementById('email').value;

const objetToSend = {
    'name': nameValue,
    'adress': emailValue,
}
console.log(objetToSend);

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
    let data = await reponse.json();
    console.log(data);
    return data;
}

//Signup
const btn = document.getElementById('btn');

btn.addEventListener('click', async e => {
    e.preventDefault();
    let reponse = await queryPost('http://localhost:3000/api/auth/signup');

    displayData(reponse.json())
})

//Affichage

  const btnA = document.getElementById('btnA');
  btnA.addEventListener('click', async e => {
      e.preventDefault();
     let reponse = await queryPost('http://localhost:3000/api/list/user');
    console.log(reponse);

     displayData(reponse.result)
  });

  function displayData(arr) {
    for( const person of arr){
      console.log(person.name)
      console.log(person.adress)
      const container = document.querySelector('#result');
      const elt1 = document.createElement('h2');
      const elt2 = document.createElement('h3');
      elt1.textContent = person.name;
      elt2.textContent = person.adress;
      container.appendChild(elt1);
      container.appendChild(elt2);
    }
  }


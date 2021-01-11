let nameValue = document.getElementById('name').value;
let emailValue = document.getElementById('email').value;

const objetToSend = {
    'name': nameValue,
    'address': emailValue,
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
    let response = await queryPost('http://localhost:3000/api/auth/signup');

    displayData(response.json())
})

//Affichage

  function displayData(data) {
    const listeBox = document.getElementById('liste');
    
    const title = document.createElement('h1');
    title.textContent = 'Liste: ';
    listeBox.appendChild(title)
    
    for ( const people in data ) {
      console.log (data[people])
      let person = data[people];
      
      const article = document.createElement('article');
      listeBox.appendChild(article)
      
      const name = document.createElement('h2');
    name.textContent = person.name;
    article.appendChild(name)

    const email = document.createElement('h2');
    email.textContent = person.email;
    article.appendChild(email)
      
       const infos = document.createElement('p');
    infos.textContent = `Email: ${person.email} Nom: ${person.name}`;
    article.appendChild(infos) 
    }
  }

  const btnA = document.getElementById('btnA');
  btnA.addEventListener('click', async e => {
      e.preventDefault();
     let reponse = await queryPost('http://localhost:3000/api/list/user');

     displayData(reponse.json())
  });


  
  
    
    
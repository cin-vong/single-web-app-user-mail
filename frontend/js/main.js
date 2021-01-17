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

  function displayData(data) {
      
    const listeBox = document.getElementById('liste');
    
    const title = document.createElement('h1');
    title.textContent = 'Liste: ';
    listeBox.appendChild(title)
    
    for ( let i = 0; i < 10; i++ ) {
        var data = JSON.stringify(i[0])
        console.log(data);
    
      const article = document.createElement('article');
      listeBox.appendChild(article)
      
      const name = document.createElement('h2');
    name.textContent = i[name];
    article.appendChild(name)

    const adress = document.createElement('h2');
    adress.textContent = i[adress];
    article.appendChild(adress)
      
       const infos = document.createElement('p');
    infos.textContent = `Email: ${i.adress} Nom: ${i.name}`;
    article.appendChild(infos) 
    }
  }

  const btnA = document.getElementById('btnA');
  btnA.addEventListener('click', async e => {
      e.preventDefault();
     let reponse = await queryPost('http://localhost:3000/api/list/user');
    console.log(reponse);

     displayData(reponse)
  });

  



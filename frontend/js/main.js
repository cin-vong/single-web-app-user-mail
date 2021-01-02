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

btn.addEventListener('click', e => {
    e.preventDefault();
    queryPost('http://localhost:3000/api/auth/signup');
})

//Affichage

const listeReponse = [
    {
    'name': nameValue,
    'address': emailValue,
    }
  ]
  

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
      
       const infos = document.createElement('p');
    infos.textContent = `Email: ${person.emailValue} Nom: ${person.nameValue}`;
    article.appendChild(infos) 

    const btnA = document.getElementById('btnA');
    btnA.addEventListener('click', e => {
        e.preventDefault();
        queryPost('http://localhost:3000/api/auth');
    })

    }
  }
   
  displayData(listeReponse)
  
  
    
    
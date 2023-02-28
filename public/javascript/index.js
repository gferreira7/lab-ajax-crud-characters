const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList().then(characters => {
      console.log(characters);
      const mainDiv = document.querySelector(".characters-container")
      mainDiv.innerHTML = "";
      characters.forEach(element => {
        let div = document.createElement('div')
        div.classList.add("character-info");
        div.innerHTML =`
        <div class="name">Character :${element.name}</div>
        <div class="occupation">Character occupation: ${element.occupation}</div>
        <div class="cartoon">Is a Cartoon?  ${element.cartoon}</div>
        <div class="weapon">Character weapon :  ${element.weapon}</div>
        `;
        mainDiv.appendChild(div);
      });
    

    }).catch(error => {
      console.log(error)
    })

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let id = document.getElementById('character-id')
    const mainDiv = document.querySelector(".characters-container")
    mainDiv.innerHTML = "";
   charactersAPI.getOneRegister(id.value).then(element => {
    let div = document.createElement('div')
    div.classList.add("character-info");
    div.innerHTML =`
    <div class="name">Character :${element.name}</div>
    <div class="occupation">Character occupation: ${element.occupation}</div>
    <div class="cartoon">Is a Cartoon?  ${element.cartoon}</div>
    <div class="weapon">Character weapon :  ${element.weapon}</div>
    `;
    mainDiv.appendChild(div);

   }).catch(error => {
    console.log(error)
  })

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    let id = document.getElementById('character-id-delete')
    charactersAPI.deleteOneRegister(id.value).then(element => { 
    document.getElementById('delete-one').classList.add('active');
    }).catch(error => {
      console.log(error)
    })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let id = document.getElementById('id').value
    let name = document.getElementById('name').value
    let occupation = document.getElementById('occupation').value
    let weapon = document.getElementById('weapon').value
    let cartoon = document.getElementById('cartoon').checked

    let obj = {
      id : id,
      name : name,
      occupation : occupation,
      weapon: weapon,
      cartoon : cartoon
    }
    
    charactersAPI.updateOneRegister(id , obj).then(element => { 
      console.log(element)
      }).catch(error => {
        console.log(error)
      })

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault();
    let name = document.getElementById('create-name').value
    let occupation = document.getElementById('create-occupation').value
    let weapon = document.getElementById('create-weapon').value
    let cartoon = document.getElementById('create-cartoon').checked

    let obj = {
      name : name,
      occupation : occupation,
      weapon: weapon,
      cartoon : cartoon
    }
    
    charactersAPI.createOneRegister(obj).then(element => { 
      console.log(element)
      }).catch(error => {
        console.log(error)
      })


  });
});

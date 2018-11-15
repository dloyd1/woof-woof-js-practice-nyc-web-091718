let apiData = []
let doggos = {}
let buttonText = ""
let dogID
let text
document.addEventListener('DOMContentLoaded', runPage)


function runPage() {
  renderToDom(apiData)
  console.log("page is running")
//--------------ASSIGN VARIABLES-----------------
  let dogBar = document.getElementById('dog-bar')
  let dogContainer = document.getElementById('dog-summary-container')
  let dogInfo = document.getElementById('dog-info')


//--------------ADD EVENT LISTENER-----------------
dogBar.addEventListener('click', (e) => {
  dogID = e.target.id
  doggos = apiData[dogID-1]
    dogInfo.innerHTML =
    `<img src=${doggos.image}>
      <h2>${doggos.name}</h2>`
    if (doggos.isGoodDog) {
      dogInfo.innerHTML += `<button class="btn" id=${doggos.id + 100}> Good Dog! </button>`
    } else {
      dogInfo.innerHTML += `<button class="btn" id=${doggos.id + 100}> Bad Dog! </button>`
    }
    document.getElementById(`${doggos.id + 100}`).addEventListener('click', flipDogButton)
  })

function flipDogButton(e) {

  if (document.querySelector('.btn').innerText = "Good Dog!") {
    document.querySelector('.btn').innerText = "Bad Dog!"}
    else { document.querySelector('.btn').innerText = "Good Dog!"
    }
  }

//--------------FETCH API DATA-----------------

  function getDogDataFromAPI() {
  fetch('http://localhost:3000/pups')
  .then(respObj => respObj.json())
  .then(data => apiData = data)
  .then(dogArray => addDogInfoToDOM(apiData))
  .then(console.log(apiData))
  }

//--------------RENDER ITEMS TO DOM-----------------

  function renderToDom(apiData) {
    getDogDataFromAPI()

  }

//--------------ADD NAMES TO DOG BAR DIV-----------------

  function addDogInfoToDOM(dogArray) {
    dogArray.forEach( (dog) => {
    dogBar.innerHTML +=
      `<span class="doges" id=${dog.id}> ${dog.name} </span>`
    })
    console.log("dog info added")

  }

//--------------FIND SELECTED DOG-----------------






}//end of runPage

BEERS_URL = 'http://localhost:3000/beers'
beerList = document.querySelector('.list-group')
beerList = document.querySelector('#list-group')
beerDetail = document.querySelector('#beer-detail')
document.addEventListener("DOMContentLoaded", () => {


fetch("http://localhost:3000/beers")
.then(res => res.json())
.then(beer => {
    beer.forEach(beer => listBeer(beer))
})

// <ul class="list-group">
//   <li class="list-group-item">Beer title 1</li>
//   <li class="list-group-item">Beer title 2</li>
//   /* etc... */
// </ul>

const listBeer = (beer) => { 

const li = document.createElement('li')  //listing the beers 
li.className = "list-group-item" 
li.innerText = beer.name 


// details of the beer when you click on that list

/* <h1>Beer Name</h1>
<img src="<add beer img url here>">
<h3>Beer Tagline</h3>
<textarea>Beer Description</textarea>
<button id="edit-beer" class="btn btn-info">
  Save
</button> */

li.addEventListener('click', () => {

beerDetail.innerHTML = ""

const h1 = document.createElement('h1')
h1.innerText = beer.name 

const img = document.createElement('img')
img.src = beer.image_url

const h3 = document.createElement('h3')
h3.innerText = beer.tagline

const textArea = document.createElement('textArea')
textArea.innerText = beer.description

const editBtn = document.createElement('editBtn')
editBtn.className = "btn btn-info"
editBtn.innerText = "Save"


beerDetail.append(h1, img, h3, textArea, editBtn)

editBtn.addEventListener('click', () => {
event.preventDefault()
const updatedDescription = textArea.value
console.log(textArea.value)

fetch(`http://localhost:3000/beers/${beer.id}`, {
method: 'PATCH', 
headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
},
body: JSON.stringify({
    description: updatedDescription
})
})
.then(res => res.json())
.then(updatedDescription => {
// textArea.innerText = beer.description
// updatedDescription.innerText
})
// console.log(updatedDescription)
textArea.append(updatedDescription)

})


})




beerList.append(li)





}

})
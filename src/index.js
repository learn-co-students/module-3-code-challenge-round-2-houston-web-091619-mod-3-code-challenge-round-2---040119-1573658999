document.addEventListener("DOMContentLoaded", function() {
    const ul = document.querySelector('#list-group')
    const div = document.querySelector('#beer-detail')

    fetch("http://localhost:3000/beers")
    .then(res => res.json())
    .then(Beers => {
        Beers.forEach(beer =>listBeers(beer))

    })
    function listBeers(beer) {
        const li = document.createElement('li')
        li.innerText = beer.name 
        ul.append(li)

    li.addEventListener('click', () => {


//         <h1>Beer Name</h1>
// <img src="<add beer img url here>">
// <h3>Beer Tagline</h3>
// <textarea>Beer Description</textarea>
// <button id="edit-beer" class="btn btn-info">
//   Save
// </button>
        div.innerHTML = ""
        const h5 = document.createElement('h5')
        h5.innerText = beer.name 

        const img = document.createElement('img')
        img.scr = beer.img_url

        const pTag = document.createElement('pTag')
        pTag.innerText = beer.tagline

        const textarea = document.createElement('textarea')
        textarea.innerText = beer.description 

        const btn = document.createElement('button')
        btn.className = "btn btn-info" 
        btn.setAttribute("id","edit-beer")
        btn.innerText = "save"

        div.append(h5,img,pTag,textarea)

    })
       fetch(`http://localhost:3000/beers/${beer.id}`,{
        method: "PATCH", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            description: beer.destription 
        })
        .then(res => res.json())
        .then(updateBeer => {

        })
        
       ul.append(li)

    }
    
})
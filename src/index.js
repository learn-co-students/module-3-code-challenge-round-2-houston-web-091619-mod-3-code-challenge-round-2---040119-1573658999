const beerURL = 'http://localhost:3000/beers/'
document.addEventListener('DOMContentLoaded', ()=>{
const beerList = document.querySelector('.list-group')
const beerDetail = document.querySelector('#beer-detail')

const h1 = document.createElement('h1')
const img = document.createElement('img')
const h3 = document.createElement('h3')
const textarea = document.createElement('textarea')
const saveBtn = document.createElement('button')
// const form = document.createElement('form')



    fetch(beerURL)
    .then(res => res.json())
    .then(beerData => {
        beerData.forEach(beer=>{
            createBeer(beer)
        })
    })

    const createBeer = (beer) =>{
        const li = document.createElement('li')
        li.className = "list-group-item"
        li.innerText = beer.name
        li.style.cursor= 'pointer'

        // showBeer(beer,li)
        beerList.append(li)
    // }

    // const showBeer = (beer,li)=>{
        li.addEventListener('click', ()=>{
            
            h1.innerText = beer.name
            img.src = beer.image_url
            h3.innerText = beer.tagline
            textarea.innerText = beer.description
            saveBtn.id = "edit-beer"
            saveBtn.className = "btn btn-info"
            // saveBtn.type = 'submit'
            saveBtn.innerText = "Save"

            saveBtn.addEventListener('click', ()=>{
                // event.preventDefault()
            
                let desc = textarea.value
    
                fetch(`http://localhost:3000/beers/${beer.id}`, {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        'description': desc
                    })
                })
                .then(res=> res.json())
                .then(newData =>{
                    console.log(newData)
                })
            })
            
            // saveChanges(beer)
            beerDetail.append(h1,img,h3,textarea,saveBtn)
            // beerDetail.append(form)
        })
    }

})
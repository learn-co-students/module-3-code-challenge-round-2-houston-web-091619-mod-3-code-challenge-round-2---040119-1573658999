const beerList = document.querySelector('#list-group')
const detailDiv = document.querySelector('#beer-detail')

fetch(`http://localhost:3000/beers`)
.then(res => res.json())
.then(Beers => {
    Beers.forEach(beer => showBeer(beer))
})

function showBeer(beer){
const beerLi = document.createElement('li')
beerLi.innerText = beer.name
beerLi.className = "list-group-item"

beerLi.addEventListener('click', ()=> {
    const beerName = document.createElement('h1')
    beerName.innerText = beer.name

    const beerImg = document.createElement('img')
    beerImg.src = beer.image_url

    const beerTagLine = document.createElement('h3')
    beerTagLine.innerText = beer.tagline
    

    const beerDescription = document.createElement('textarea')
    beerDescription.innerText = beer.description

   

    const beerBtn = document.createElement('button')
    beerBtn.setAttribute("id", "edit-beer")
    beerBtn.className = "btn btn-info"
    beerBtn.innerText = "Save"

    beerBtn.addEventListener('click', (event)=> {
        
        
        
        event.preventDefault()
        fetch(`http://localhost:3000/beers/${beer.id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                description: beerDescription.value
            })
        })
        .then(res => res.json())
        // .then(console.log)
        .then(updatedInfoDescription.innerText = updatedInfo.description})
        // .then( updatedInfo => beerDescription.innerText = updatedInfo.description})
        
        // .then(updatedInfo => {
        //      beerDescription.innerText = `${updatedInfo.description.value}`
        // })
    })

    detailDiv.innerHTML = " "
    detailDiv.append(beerName, beerImg, beerTagLine, beerDescription, beerBtn)


})

beerList.append(beerLi)
}
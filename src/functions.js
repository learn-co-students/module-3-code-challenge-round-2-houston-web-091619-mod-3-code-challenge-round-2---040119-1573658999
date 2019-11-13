const listBeer = (beer) => {
    console.log(beer)

    const beer_ul = document.getElementById("list-group")
    const beer_show = document.getElementById("beer-detail")

    const beer_li = document.createElement('li')
        beer_li.innerText = beer.name

    beer_li.addEventListener('click', function(){
        beer_show.innerHTML = ""
        let beer_img = document.createElement('img')
            beer_img.src = beer.image_url
        let beer_name = document.createElement('h3')
            beer_name.innerText = beer.name
        var beer_button = document.createElement("button");
            beer_button.innerText = 'save'
        var beer_tagline = document.createElement('h5')
            beer_tagline.innerText = beer.tagline

            beer_button.addEventListener('click', function(){
                event.preventDefault()
    
                fetch("http://localhost:3000/beers/" + beer.id, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                  },
                  body: JSON.stringify({
                    description: beer_description
                    })
                    }).then(res=> res.json())
                    .then(beer => {
                        beer_description.innerText = beer_desUpdate
                    })
            })
        
            let beer_description = document.createElement('textarea')
            beer_description.style.display = 'block'
            beer_description.style.width = '500px'
            let beer_desUpdate = beer.description
            beer_description.innerText = beer_desUpdate

            let delete_button = document.createElement('button')
                delete_button.innerText = "Delete Beer"
            delete_button.addEventListener('click', function(){
                fetch("http://localhost:3000/beers/" + beer.id, {
                method: "DELETE",  
            })
                beer_li.remove()
            })
        

        beer_show.append(beer_name, beer_tagline, beer_img, beer_description, beer_button, delete_button) 

        
        let newDiv = document.createElement('div')


    })




    beer_ul.append(beer_li)


}

newBeer.addEventListener('submit', ()=>{
    event.preventDefault()
    let beerName = e.target[0].value
    let beerTaglike = e.target[1].value
    let beerImage = e.target[3].value
    let beerTagDescription = e.target[4].value
    fetch(beers_URL, {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({
    "name": beerName,
    "tagline": beerTagLine
    "image_url":
    })
    }).then(res=> res.json())
    .then(user => {
    listBeer(beer)
    })
    })
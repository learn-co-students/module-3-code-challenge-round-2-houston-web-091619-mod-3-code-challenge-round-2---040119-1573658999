document.addEventListener('DOMContentLoaded', () => {

    console.log('Dom is loaded ')

    const urlBeers = 'http://localhost:3000/beers'


    fetch(urlBeers)
        .then(res => res.json())
        .then(beers => {
            beers.forEach(beer => displayBeers(beer))
        })

    function displayBeers(beer) {
        const listGroup = document.querySelector('#list-group')

        const liBeers = document.createElement('li')
        liBeers.className = 'list-group-item'
        liBeers.innerText = beer.name



        listGroup.append(liBeers)


        liBeers.addEventListener('click', () => {
            fetch(`${urlBeers}/${beer.id}`)
                .then(res => res.json())
                .then(displayBeer => {
                    displayDetails(displayBeer)
                })

            function displayDetails(displayBeer) {
                const beerDetail = document.querySelector('#beer-detail')
                beerDetail.innerHTML = ''

                const h1 = document.createElement('h1')
                h1.innerText = displayBeer.name

                const img = document.createElement('img')
                img.src = displayBeer.image_url

                const h3 = document.createElement('h3')
                h3.innerText = displayBeer.tagline

                const textarea = document.createElement('textarea')
                textarea.innerText = displayBeer.description


                const btn = document.createElement('button')
                btn.setAttribute = ('id', 'edit-beer')
                btn.setAttribute = ('class', 'btn btn-info')
                btn.innerText = 'Save'


                btn.addEventListener('click', () => {
                console.log(textarea.value)
                    
                    fetch(`${urlBeers}/${beer.id}`, {
                        method: 'PATCH', 
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({
                            'description': textarea.value
                        })
                    })
                    .then(res => res.json())
                    .then(data => {
                        textarea.value
                    })
                })

                beerDetail.append(h1, img, h3, textarea, btn)
            }
        })

    }


})
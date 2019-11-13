const BASE_URL = "http://localhost:3000"
const beers_URL = BASE_URL + "/beers"


async function getBeers(beers_URL) {
    let response = await fetch(beers_URL)
    let beers = await response.json();

    return beers
}

getBeers(beers_URL).then(beers => {
    beers.map(beer => listBeer(beer))
})

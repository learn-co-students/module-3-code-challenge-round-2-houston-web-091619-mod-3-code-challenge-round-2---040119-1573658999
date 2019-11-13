document.addEventListener("DOMContentLoaded", function (){
    const ul = document.querySelector(".list-group")
    const div = document.querySelector("#beer-detail")

    fetch("http://localhost:3000/beers")
    .then(res => res.json())
    .then(beers => {beers.forEach(beer => listBeer(beer))
    })

    function listBeer(beer){
        let li = document.createElement("li")
        li.innerText = beer.name
        // li.innerText = beer.tagline

        li.addEventListener("click", () => {

            div.innerHTML = ""

            let h1 = document.createElement("h1")
            h1.innerText = beer.name

            let img = document.createElement("img")
            img.src = beer.image_url


            let h3 = document.createElement("h3")
            h3.innerText = beer.tagline

            let textArea = document.createElement("textArea")
            textArea.innerText = beer.description

            div.append(h1, img, h3, textArea)

            let btn = document.createElement("button")
            btn.innerText = "Save"
            div.append(btn)
            
            btn.addEventListener("click", () => {
                fetch("http://localhost:3000/beers/"+beer.id, {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        description: textArea.value})
                        .then(res => res.json())
                        .then(updatedText => {
                            let newDescription = document.createElement('textArea')
                            newDescription.innerText = beer.description

                            newDescription
                        })
                })

                div.append(btn)
            })
        })  

        ul.append(li)
    }

})

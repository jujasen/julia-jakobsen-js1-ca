const baseUrl = "https://rickandmortyapi.com/api/character/";

fetch(baseUrl)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        displayCharacter(json);
    })
    .catch((error) => {
        window.location.replace('./error.html');
    });

let html = "";

function displayCharacter(json) {
    const results = json.results;

    results.forEach(function(result) {
        let typeDisplay = "Unknown"

        if(result.type) {
            typeDisplay = result.type
        }
        
        html += `<div class="col-sm-6 col-md-4 col-lg-3">         <div class="card">
            <img class="image" src="${result.image}" alt="${result.name}">
            <div class="details">
                <h4 class="name">${result.name}</h4>
                <p>Type: ${typeDisplay}</p>    
                <p>Episode count: ${result.episode.length}</p>                                       
                <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
            </div>
        </div>
    </div>`

    });
    
    const output = document.querySelector(".results");

    output.innerHTML = html;
}


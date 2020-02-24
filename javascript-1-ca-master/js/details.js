 const queryString = document.location.search;
 const params = new URLSearchParams(queryString);

 let id;

 if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "/";
}


const baseUrl = "https://rickandmortyapi.com/api/character/";
const detailsUrl = `${baseUrl}${id}`;


fetch(detailsUrl)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        viewCharacter(json);
    })
    .catch((error) => {
        window.location.replace('./error.html');
    });

function viewCharacter(details) {
    console.dir(details);

    const image = document.querySelector(".details-image");
    image.src = details.image;
    image.alt = details.name;

    const heading = document.querySelector("h1");
    heading.innerText = details.name;

    const status = document.getElementById("status");
    status.innerText = details.status;

    const species = document.getElementById("species");
    species.innerText = details.species;

    const origin = document.getElementById("origin");
    origin.innerText = details.origin.name;

    const location = document.getElementById("location");
    location.innerText = details.location.name;

    document.title = details.name + " | " + document.title;

}
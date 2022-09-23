import createView from "../createView.js"
import {showNotification} from "../messaging.js";

export default function InsertMovie(props) {
    return `
        <form class="container">
            <h1 style="color:white;">New Movie</h1>
            <form>
                <label for="movieInput" class="form-label" style="color:rgb(138, 0, 252);">Movie</label>
                <input  class="form-control" list="datalistOptions" id="movieInput" placeholder="Enter Movie" >
                <label for="ratingInput" class="form-label" style="color:rgb(138, 0, 252);">Rating</label>
                <input class="form-control" list="datalistOptions" id="ratingInput" placeholder="Enter Rating">
                <button class="form-control" id="insert-btn">Add Movie</button>
            </form>
        </div>
`;
}

export function InsertMovieEvents() {
    const addButton = document.querySelector("#insert-btn");
    addButton.addEventListener("click", insertMovie);
}

function insertMovie() {
    // 1. validate the data (movie and director)
    const movieInput = document.querySelector("#movieInput");
    const movieText = movieInput.value.trim();

    const ratingInput = document.querySelector("#ratingInput");
    let ratingText = ratingInput.value.trim();

    if(movieText.length < 1) {
        showNotification("Please fill in Movie", "danger");
        return;
    }
    if(ratingText.length < 1) {
        ratingText = "Enter Rating";
    }

    const newMovie = {
        title: movieText,
        rating: ratingText
    }

    // 2. if we get here, we can insert a new quote
    // console.log(quoteText + " | " + authorText );
    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie)
    }
    fetch("/api/movies", requestOptions)
        .then(function(response) {
            if(!response.ok) {
                console.log("insert movie error: " + response.status);
            } else {
                console.log("insert movie ok");
                createView("/");
            }
        });

}
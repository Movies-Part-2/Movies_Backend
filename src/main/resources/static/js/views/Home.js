import {showNotification} from "../messaging.js";
// import {editMovie} from "./EditMovies.js";
import {getHeaders, getUser} from "../auth.js";
import createView from "../createView.js";


// const BASE_URI = `/api/movies`;
let movies = [];

export default function Home(props) {

    // if search box has input use filtered props.movies. otherwise use props.movies

    movies = props.movies;
    console.log(props);

    let html = `
      <main>
         <h1>SB Entertainment</h1>
         <div class="gallery">
 `;

    html += `<div id="movies-container">`;
    //add a table row for each table element
    for (let i = 0; i < movies?.length; i++) {
        html += `
            <div class="movie-card">
                <div class="card-image">
                    <img src="${movies[i].poster}" width="25px" height="auto" class="card-img" alt="movie-poster">
                    
                </div>
               
                <div class="card-body">
                    <h3 class="card-title" style="color:rgb(138, 0, 252);">${movies[i].title}</h3>
                    <button class="edit-btn" data-id="${movies[i].id}">Edit</button>
                    <button class="delete-btn" data-id="${movies[i].id}">Delete</button>
                </div> 
            </div>
           `;
    }
    html += `</div></div></main>`;

    return  html
}


export function HomeEvents() {
    searchBarHandler()
    // getMovieId();
    deleteMovie();
    editMovieHandler();
}

//Do not need another fetch if using props.movies:
// function  getMovieId() {
//     let request = {
//         method: "GET",
//         headers: getHeaders(),
//     }
//     fetch("http://localhost:9001/api/movies/", request)
//         .then(response => response.json()).then(data => console.log(data));
//
//     let searchBar = document.getElementById("search-movie");
//     for (let i = 0; i < searchBar.length; i++) {
//         searchBar[i].addEventListener('input', function ()) {
//
//         }
//     }
//
// }

function searchBarHandler(e){

//    add event listener to search bar
//    when event is fired
//    build a filtered list of movies based on input
//    update Gallery Div to new HTML
//    html = searched list
//     console.log(movies)

    let searchMovie = document.getElementById('search');

    searchMovie.addEventListener('keyup', function () {
        // e.preventDefault();
        let userInput = this.value.toLowerCase();
        let filteredMovies = [];

        movies.forEach(function(movie) {
            if (movie.title.includes(userInput)) {
                filteredMovies.push(movie);
            }
        });

        let html = "";
        const moviesContainer = document.querySelector("#movies-container");

        filteredMovies.forEach(function(movie) {
            html += `
            <div class="movie-card">
                <div class="card-image">
                    <img src="${movie.poster}" width="25px" height="auto" class="card-img" alt="movie-poster">
<!--                    <p src="$[movies[i].plot}"></p>-->
                </div>

                <div class="card-body">
                    <h3 class="card-title" style="color:rgb(138, 0, 252);">${movies.title}</h3>
                    <button class="edit-btn" data-id="${movies.id}">Edit</button>
                    <button class="delete-btn" data-id="${movies.id}">Delete</button>
                </div>
            </div>
           `;
        });


        // html += `</div></main>`;

        moviesContainer.innerHTML = html;

    });
}


// Function that does the deleting movie when button pressed:
function deleteMovie() {
    let deleteBtn = document.querySelectorAll('.delete-btn');
    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener('click', (event) => {
            console.log("clicked");
            console.log(deleteBtn[i].getAttribute("data-id"));
            const request = {
                method: "DELETE",
                headers: getHeaders(),
            }
            const url = POST_API_BASE_URL + `/${deleteBtn[i].getAttribute("data-id")}`;
            fetch(url, request).then(response => response.json()).then(data => {
                // location.reload();
                createView("/movies");
            })
        })}}
//function to send user to EditMovie view when edit button clicked:
function editMovieHandler() {
    let editBtn = document.querySelectorAll('.edit-btn');
    for (let i = 0; i < editBtn.length; i++) {
        editBtn[i].addEventListener('click', (event) => {
            let editId = editBtn[i].getAttribute("data-id");
            let modal = document.createElement("div");
            console.log("clicked " + editId);
            document.body.appendChild(modal);
            modal.innerHTML = `     
     <div>       
     <h1>Edit Movie</h1>
        <label for="movieInput" class="form-label">Edit Name</label>
        <input class="form-control" id="movieInput" placeholder="Enter Movie" >
        <label for="ratingInput" class="form-label">Edit Score</label>
        <input class="form-control" id="ratingInput" placeholder="Enter Rating">
        <button class="form-control" id="edit-btn">Save Changes</button>
     </div>
 `;
                let movieInput = document.getElementById("movieInput");
                movieInput.addEventListener("input", () => console.log(movieInput.value));
                let ratingInput = document.getElementById("ratingInput");
                ratingInput.addEventListener("input", () => console.log(ratingInput.value));
                document.getElementById("edit-btn").addEventListener("click", function (event) {
                    event.preventDefault();
                    let data = {
                        title: movieInput.value,
                        score: ratingInput.value
                    }
                    console.log(data);
                    const request = {
                        method: "PUT",
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(data)
                    }
                    const url = POST_API_BASE_URL + `/api/movies/${editId}`;
                    fetch(url, request)
                        .then(response => {
                            console.log(response.status);
                            location.reload();
                            // createView('/');
                        });
                        // if (!response.ok){
                        //     console.log("err");
                        // }
                        // else {
                        // response.json().then(r => console.log(r))
                    // }}).then(data => {
                    //     console.log(data)
                    // }).catch( error => console.log(error))
                });
        })}}





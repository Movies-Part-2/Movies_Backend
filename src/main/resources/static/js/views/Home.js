import {showNotification} from "../messaging.js";
// import {editMovie} from "./EditMovies.js";
import {getHeaders, getUser} from "../auth.js";
import createView from "../createView.js";


// const BASE_URI = `/api/movies`;

export default function Home(props) {
    let movies = props.movies;
    console.log(props);

    let html = `
      <main>
         <h1>SB Entertainment</h1>
         <div class="flex-container">
 `;

    //add a table row for each table element
    for (let i = 0; i < movies?.length; i++) {
        html += `
            <div class="movie-flex">
                <div class="card-image card-body">
                    <img src="${movies[i].poster}" width="25px" height="auto" class="card-img" alt="movie-poster">
<!--                </div>-->
              
<!--                <div class="card-body">-->
                    <div class="card-title" style="color:rgb(138, 0, 252);">${movies[i].title}</div>
                    <button class="edit-btn" data-id="${movies[i].id}">Edit</button>
                    <button class="delete-btn" data-id="${movies[i].id}">Delete</button>
                </div> 
            </div>
           `;
    }
    html += `</div></main>`;

    return  html
}


export function HomeEvents() {
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
// }


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





import {showNotification} from "../messaging.js";
import {editMovie} from "./EditMovies.js";
import {getHeaders, getUser} from "../auth.js";
import createView from "../createView.js";




// const BASE_URI = `/api/movies`;

export default function Home(props) {
    let movies = props.movies;
    console.log(props);

    let html = `
      <main>
         <h1>SB Entertainment</h1>
         <div class="gallery">
 `;

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
    html += `</div></main>`;

    return  html
}


export function HomeEvents() {
    // getMovieId();
    deleteMovie();

    // const editButton = document.querySelectorAll(".edit-btn");
    // for (let i = 0; i < editButton.length; i++) {
    //     editButton[i].addEventListener("click", editMovie);
    // }
}
// function  getMovieId() {
//     let request = {
//         method: "GET",
//         headers: getHeaders(),
//     }
//     fetch("http://localhost:9001/api/movies/", request)
//         .then(response => response.json()).then(data => console.log(data));
// }
// function setupDeleteHandlers() {
//     //Follow rest-blog example for now and target all delete buttons, even though there is only one:
//     const deleteBtn = document.querySelectorAll(".delete-btn");
//     for (let i = 0; i < deleteBtn.length; i++) {
//         deleteBtn[i].addEventListener('click', function (event){
//             //get movie id of delete button:
//             const movieId = this.getAttribute("data-id");
//             deleteMovie(movieId);
//             });
//         }
//     }
    // Function that does the deleting work separate from setupDeleteHandler:
function deleteMovie() {
    let deleteBtn = document.querySelectorAll('.delete-btn');
    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener('click', (event) => {
            console.log("clicked");
            console.log(deleteBtn[i].getAttribute("data-id"));
        })}}
function deleteMovie2() {
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
                location.reload();
                // createView("/movies");
            })
        })}}

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
    editMovie();
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


function editModal() {

    return `
<div class="modal">
    <form class="container">
        <h1>Edit Movie</h1>
        <form class="form-styling">
            <label for="movieInput" class="form-label">Edit Name</label>
            <input class="form-control" list="datalistOptions" id="movieInput" placeholder="Enter Movie">
                <label for="ratingInput" class="form-label">Edit Score</label>
                <input class="form-control" list="datalistOptions" id="ratingInput" placeholder="Enter Rating">
                    <button class="form-control" id="edit-btn" data-id>Save Changes</button>
        </form>
 </div>`;
}









//function to send user to EditMovie view when edit button clicked:
function editMovie() {
    let editBtn = document.querySelectorAll('.edit-btn');
    for (let i = 0; i < editBtn.length; i++) {
        editBtn[i].addEventListener('click', (event) => {
    //         console.log("clicked");
            let id = editBtn[i].getAttribute("data-id");
    //         let id = POST_API_BASE_URL + `/${editBtn[i].getAttribute("data-id")}`;
    //         const request = {
    //             method: "PUT",
    //             headers: getHeaders(),
    //         }
    //         const url = POST_API_BASE_URL + `/${editBtn[i].getAttribute("data-id")}`;
    //         fetch(url, request).then(response => response.json()).then(data => {
    //             // location.reload();
    //             createView(`/edit/${id}`);
            createView("/edit")
            // })
        })}
    }



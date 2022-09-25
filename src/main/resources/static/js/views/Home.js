import {showNotification} from "../messaging.js";
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
                <div class="card-overlay">
                      <div class="bookmark">
                         <ion-icon name="bookmark-outline"></ion-icon>
                      </div>
                      <div class="rating">
                         <ion-icon name="star-outline"></ion-icon>
<!--                         <span>${movies[i].genreList.id}</span>-->
                      </div>
                      <div class="play">
                         <ion-icon name="play-circle-outline"></ion-icon>
                      </div>         
                </div>
                <div class="card-body">
                    <h3 class="card-title"style="color:rgb(138, 0, 252);">${movies[i].title}</h3>
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
    // setupDeleteHandlers();
    // getMovieId();
    // editMovie();
    // deleteMovie();
}


// function  getMovieId() {
//     let request = {
//         method: "GET",
//         headers: {"Content-Type": "application/json"},
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
    //Function that does the deleting work separate from setupDeleteHandler:
// function deleteMovie() {
//     const request = {
//         method: "DELETE",
//         headers: getHeaders(),
//     }
//     const dataID = this.getAttribute("data-id");
//     const url = POST_API_BASE_URL + `/${movies.id}`;
//     fetch(url, request)
//         .then(function (response) {
//             if (response.status !== 200) {
//                 console.log("error: fetch returned bad status code " + response.status);
//                 console.log(response.statusText);
//             } else {
//                 console.log("Movie removed successfully!");
//                 createView("/movies");
//             }
//         });
// }
// //Edit movie functionality: Original movie project worked, refactor with some of rest-blog example if needed:
// function editMovie(props) {
//     let newMovie = prompt("Enter New Movie Name")
//     console.log(newMovie)
//     // let newMovie = ""
//     // newMovie = userInput
//     const requestOptions = {
//         method: "PUT",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({title: newMovie})
//     }
//     const dataID = this.getAttribute("data-id");
//     fetch(`/api/movies/${movies?.id}`, requestOptions)
//         .then(response => response.json()).then(data => console.log(data));
//     }
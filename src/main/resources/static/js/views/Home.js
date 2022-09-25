import {showNotification} from "../messaging.js";
import {getHeaders, getUser} from "../auth.js";
import createView from "../createView.js";

const BASE_URI = `/api/movies`;

export default function Home(props) {
let movies = props.movies;
// console.log(movies);
    let html = `
<!--   <div class="container">-->
<!--      &lt;!&ndash;  Movie of the month &ndash;&gt;-->
<!--      <section class="banner">-->
<!--        <div class="banner-card">-->
<!--&lt;!&ndash;  <img src="../assets/John_Wick.jpeg" class="banner-img" alt="">&ndash;&gt;-->
<!--          <div class="card-content">-->
<!--          <h3> Movie of the month: </h3>-->
<!--           <hr> -->
<!--           <h2 class="card-title">John Wick: Chapter 3 - Parabellum</h2>-->
<!--            <div class="card-info">-->
<!--              <div class="genre">-->
<!--                <ion-icon name="film"></ion-icon>-->
<!--        -->
<!--                <span>Action/Thriller</span>-->
<!--              </div>-->
<!--              <div class="year">-->
<!--                <ion-icon name="calendar"></ion-icon>-->
<!--                <span>2019</span>-->
<!--              </div>-->
<!--              <div class="duration">-->
<!--                <ion-icon name="time"></ion-icon>-->
<!--                <span>2h 11m</span>-->
<!--              </div>-->
<!--              <div class="quality">4K</div>-->
<!--            </div>-->
<!--           -->
<!--          </div>-->
<!--        </div>-->
<!--      </section>-->
<!--      Title for the movie listing -->
     <h1><em>Top Box Office Hits</em></h1>
 `;
    // let imagePath = [
    //     "assets/Hulk.jpeg",
    //     "assets/Spiderman.jpeg",
    //     "assets/Pulp_Fiction.jpeg",
    //     "assets/BruceLee.jpeg",
    //     "assets/The_Dark_Knight.jpeg",
    //     "assets/GodFarther.jpeg",
    //     "assets/StarWars.jpeg",
    //     "assets/ForrestGump.jpeg",
    //     "assets/Titanic.jpeg",
    //     "assets/ComingSoon.jpeg",
    //     "assets/ComingSoon.jpeg",
    //     "assets/ComingSoon.jpeg",
    //     "assets/ComingSoon.jpeg",
    //     "assets/ComingSoon.jpeg",
    //     "assets/ComingSoon.jpeg",
    //     "assets/ComingSoon.jpeg",
    //     "assets/ComingSoon.jpeg",
    //
    //
    //
    // ]
    //add a table row for each table element
    for (let i = 0; i < movies?.length; i++) {
        html += `
<!--          <div class="movie-card col-3">-->
<!--            <div class="card-head">-->
             <img src="${movies[i].poster}" width="25px" height="auto" class="card-img">
<!--              <div class="card-overlay">-->
<!--                <div class="bookmark">-->
<!--                  <ion-icon name="bookmark-outline"></ion-icon>-->
<!--                </div>-->
<!--                <div class="rating">-->
<!--                  <ion-icon name="star-outline"></ion-icon>-->
                  <span>${movies[i].genreList[0]?.id}</span>
<!--                </div>-->
<!--                <div class="play">-->
<!--                  <ion-icon name="play-circle-outline"></ion-icon>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
            <div class="card-body">
              <h3 class="card-title"style="color:rgb(138, 0, 252);">${movies[i].title}</h3>
                <button class="edit-btn" data-id="${movies[i].id}">Edit</button>
                <button class="delete-btn" data-id="${movies[i].id}">Delete</button>
<!--              <div class="card-info">-->
              </div>
<!--            </div>-->
            <!--end of card  -->
<!--          </div>-->
            `;
    }
    // html+= `
    //    </div>
    // </div>
   // </div>
//
// `;
    return  html
}

    export function HomeEvents() {
        // setupDeleteHandlers();
        getMovieId();
        // editMovie();
        // deleteMovie();
    }


    function  getMovieId() {
        let request = {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        }
        fetch("http://localhost:9001/api/movies/", request)
            .then(response => response.json()).then(data => console.log(data));
    }


    function setupDeleteHandlers() {
        //Follow rest-blog example for now and target all delete buttons, even though there is only one:
        const deleteBtn = document.querySelectorAll(".delete-btn");
        for (let i = 0; i < deleteBtn.length; i++) {
            deleteBtn[i].addEventListener('click', function (event){
                //get movie id of delete button:
                const movieId = this.getAttribute("data-id");

                deleteMovie(movieId);
            });
        }
    }

    //Function that does the deleting work separate from setupDeleteHandler:
    function deleteMovie() {
        const request = {
            method: "DELETE",
            headers: getHeaders(),
        }
        const dataID = this.getAttribute("data-id");
        const url = POST_API_BASE_URL + `/${movies.id}`;
        fetch(url, request)
            .then(function (response) {
                if (response.status !== 200) {
                    console.log("error: fetch returned bad status code " + response.status);
                    console.log(response.statusText);
                } else {
                    console.log("Movie removed successfully!");
                    createView("/movies");
                }
            });
    }

    //Edit movie functionality: Original movie project worked, refactor with some of rest-blog example if needed:
    function editMovie(props) {
        let newMovie = prompt("Enter New Movie Name")
        console.log(newMovie)
        // let newMovie = ""
        // newMovie = userInput
        const requestOptions = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title: newMovie})
        }

        const dataID = this.getAttribute("data-id");
        fetch(`/api/movies/${movies?.id}`, requestOptions)
            .then(response => response.json()).then(data => console.log(data));
    }






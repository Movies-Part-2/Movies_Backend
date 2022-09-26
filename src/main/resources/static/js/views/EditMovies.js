import createView from "../createView.js"
// import {HomeEvents} from "./Home.js";
// import {showNotification} from "../messaging.js";
import {getHeaders} from "../auth.js";


export default function EditMovie(props) {
    console.log(props);
    return `
        <form class="container">
            <h1>Edit Movie</h1>
            <form class="form-styling">
                <label for="movieInput" class="form-label">Edit Name</label>
                <input class="form-control" list="datalistOptions" id="movieI" placeholder="Enter Movie">
                <label for="ratingInput" class="form-label">Edit Score</label>
                <input class="form-control" list="datalistOptions" id="ratingI" placeholder="Enter Rating">
                <button class="form-control" id="edit-btn" data->Save Changes</button>
            </form>
        </div>
`;
}

//
// export function EditMovieEvents() {
//     const editButton = document.querySelector("#edit-btn");
//     editButton.addEventListener("click", editMovie);
//     // editMovie();
// }
//
// export function editMovie() {
//     // 1. validate the data (movie and rating)
//     const movieI = document.querySelector("#movieI");
//     const movieT = movieI.value.trim();
//
//     const ratingI = document.querySelector("#ratingI");
//     let ratingT = ratingI.value.trim();
//
//     if (movieT.length < 1) {
//         showNotification("Please fill in Movie", "danger");
//         return;
//     }
//     if (ratingT.length < 1) {
//         ratingT = "Enter Rating";
//     }
//
//     const movieE = {
//         title: movieT,
//         rating: ratingT
//     }
//
//
//     const requestOptions = {
//         method: "PATCH",
//         headers: getHeaders(),
//         body: JSON.stringify(movieE)
//     }
//
//     let editBtn = document.querySelectorAll('.edit-btn');
//     // let id = editBtn.getAttribute("data-id");
//     fetch(url, request).then(response => response.json()).then(data => {
//             console.log("edit movie ok");
//             createView("/movies");
//         })}
//

export function EditMovieEvents() {
    // let editButton = document.querySelectorAll('.edit-btn');
    // editButton.addEventListener("click", editMovie);
    editMovie();
}

function editMovie() {
    let editBtn = document.querySelectorAll('#edit-btn');
    for (let i = 0; i < editBtn.length; i++) {
        editBtn[i].addEventListener('click', (event) => {
                    console.log("clicked");
            let id = editBtn[i].getAttribute("data-id");
                    const request = {
                        method: "PUT",
                        headers: getHeaders(),
                    }
                    const url = POST_API_BASE_URL + `/edit/${editBtn[i].getAttribute("data-id")}`;
                    fetch(url, request).then(response => response.json()).then(data => {
                        // location.reload();
                        createView("/");
                    })
        })}}




// function editMovie() {
//     // // 1. validate the data (movie and rating)
//     // const movieI = document.querySelector("#movieI");
//     // const movieT = movieI.value.trim();
//     //
//     // const ratingI = document.querySelector("#ratingI");
//     // let ratingT = ratingI.value.trim();
//     //
//     // if (movieT.length < 1) {
//     //     showNotification("Please fill in Movie", "danger");
//     //     return;
//     // }
//     // if (ratingT.length < 1) {
//     //     ratingT = "Enter Rating";
//     // }
//     //
//     // const movieE = {
//     //     title: movieT,
//     //     rating: ratingT
//     // }
//
//
//     const requestOptions = {
//         method: "PATCH",
//         headers: getHeaders(),
//         body: JSON.stringify(movieE)
//     }
//
//     const editBtn = document.querySelector("#edit-btn")
//     editBtn.addEventListener("click", function() {
//         console.log("ouch, you touched me")
//     })
//
//     const url = POST_API_BASE_URL + `/${editBtn[i].getAttribute("data-id")}`;
//     fetch(url, requestOptions).then(response => response.json()).then(data => {
//         console.log("button ID is: " + editBtn);
//         if (!response .ok) {
//             console.log("edit movie error: " + response.status);
//         } else {
//             console.log("edit movie ok");
//             createView("/");
//         }
//     });
// }
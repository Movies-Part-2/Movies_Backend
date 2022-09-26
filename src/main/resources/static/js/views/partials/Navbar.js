import {getUser, isLoggedIn} from "../../auth.js";

export default function Navbar(props) {
    const loggedIn = isLoggedIn();

    // what everyone can see if not logged in:
    let navbar = `
        <nav class="navbar navbar-expand-lg bg-dark justify-content-center">
            <a class="jalopy-nav" href="/" data-link>Home</a>
            <a class="jalopy-nav" href="/genre" data-link>Categories</a>
            <a class="jalopy-nav" href="/search" data-link>Search</a>`;

    //If user is logged in:
    if(isLoggedIn()) {
        navbar += `
            <a class="jalopy-nav" href="/me" data-link>About Me</a>
            <a class="jalopy-nav" href="/add" data-link>Add Movie</a>
            <a class="jalopy-nav" href="/edit" data-link>Edit Movie</a>
            <a class="jalopy-nav" href="/logout" data-link>Logout</a>
        `;
    } else {
        navbar += `
            <a class="jalopy-nav" href="/login" data-link>Login</a>
            <a class="jalopy-nav" href="/register" data-link>Register</a>
        `;
    }

    let loginName = "Not logged in";
    if(isLoggedIn()) {
        const loggedInUser = getUser();
        loginName = "Logged in as " + loggedInUser.userName;
    }
    // navbar += `
    //     <span id="login-name">${loginName}</span>`;

    navbar += `</nav>`;
    return navbar;

}
import createView from "../createView.js";

export default function Logout(props) {
    console.log("Logging out...");
    return `<h1>Logging Out...</h1>`;
}

export function LogoutEvents() {
    console.log("Calling LogoutEvents...");
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("refresh_token");
    createView("/login");

}
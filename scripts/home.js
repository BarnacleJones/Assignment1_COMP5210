import {createHeader} from "./header.js";

function renderHomePage(){
    // create/append header
    createHeader();
    // define variables
    let page = document.getElementById("page_content");
    let mainArea = document.createElement("div");
    //update contents of the main area
    mainArea.setAttribute("class", "main_area");
    mainArea.innerHTML = `
    <h1>Welcome to the SCP Foundation</h1>
    <h2>Warning:The foundation database is</h2>
    <h2>CLASSIFIED</h2>`
    // append to the DOM
    page.appendChild(mainArea)
}

export {renderHomePage}


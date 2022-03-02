// Function for creating the header to the webpage
function createHeader(){
    
    let page = document.getElementById("page_content");

    let header = document.createElement("header");

    header.innerHTML = `    
    <h3 class="header_tag">Home</h1>
    <h3 class="header_tag">SCP002</h3>
    <h3 class="header_tag">SCP003</h3>
    <h3 class="header_tag">SCP004</h3>
    <h3 class="header_tag">SCP005</h3>
    <h3 class="header_tag">SCP006</h3>`
    header.setAttribute("class", "header")
    page.appendChild(header);
    

}

export {createHeader}

// Function for creating the header to the webpage
function createHeader(){
    
    let page = document.getElementById("page_content");

    let header = document.createElement("header");

    header.innerHTML = `  
    <h2>Menu<h2>  
    <br><br>
    `
    header.setAttribute("id", "header")
    page.appendChild(header);
    
    
    let headerInner = document.createElement("div");
    headerInner.innerHTML = `
    <h3 class="header_tag">Home</h1>
    <h3 class="header_tag">SCP002</h3>
    <h3 class="header_tag">SCP003</h3>
    <h3 class="header_tag">SCP004</h3>
    <h3 class="header_tag">SCP005</h3>
    <h3 class="header_tag">SCP006</h3>
    <h3 class="header_tag" style="color:red">CLOSE</h3>
    `
    page.appendChild(headerInner);
    headerInner.setAttribute("id", "headerInner");
    headerInner.style.display = "none";

    
}

export {createHeader}
import { renderHomePage } from "./home.js";
import { render002 } from "./scp_002.js";
import { render003 } from "./scp_003.js";
import { render004 } from "./scp_004.js";
import { render005 } from "./scp_005.js";
import { render006 } from "./scp_006.js";

//default page is loading the home page script 
renderHomePage();


//event listeners for navigation
document.addEventListener("click", (e) => {
    const target = e.target.innerText;
    if (target === "Home") renderHomePage();
    if (target === "SCP002" ) render002();
    if (target === "SCP003") render003();
    if (target === "SCP004") render004();
    if (target === "SCP005") render005();
    if (target === "SCP006") render006();
    if (target == "Menu") { header.style.display = "none"; headerInner.style.display = "flex"; }
    if (target == "CLOSE") {header.style.display = "inherit"; headerInner.style.display = "none";}
})
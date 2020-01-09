document.getElementById("urlGoesHere").innerText = document.URL;

document.getElementById("closeButton").addEventListener("click", closeTab);
document.getElementById("shortcut").addEventListener("dblclick", closeTab);

function closeTab(){
    var window = document.getElementById("window");
    var shortcut = document.getElementById("shortcut");

    if(window.style.display === "block"){
        window.style.display = "none";
        shortcut.style.display ="block";
    } else if(window.style.display === "none"){
        shortcut.style.display ="none";
        window.style.display ="block";
    }


}
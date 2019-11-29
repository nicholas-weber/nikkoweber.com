function openOverlay1() {
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("overlay").innerHTML = 
    `
        <button onclick="closeOverlay()">Close</button>
        <iframe src="lubetech-v2.html"></iframe> 
    `
}
  
function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlay").innerHTML = "";
} 
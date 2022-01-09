let colorSelected = "black";
function setPixelColour(pixel){
    pixel.style.backgroundColor = colorSelected;
    
}
function setColor (color){
    colorSelected = color.id;
    let allColors = document.querySelectorAll(".color");
    allColors.forEach(function(el){
        el.className = "color";
    })
    color.classList.add("selected")
}

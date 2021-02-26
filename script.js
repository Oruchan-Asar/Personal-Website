var image = document.getElementById("image");
const toggle = document.getElementById("toggle");

image.addEventListener("mouseover", function(){
    this.style = "box-shadow: 2px 2px 2px grey";
    this.width = "180px";
});

image.addEventListener("mouseout", function(){
    this.style = ""
    this.width = "150px"
});

toggle.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
});
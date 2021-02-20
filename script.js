var image = document.getElementById("image");

image.addEventListener("mouseover", function(){
    this.style = "box-shadow: 2px 2px 2px grey";
    this.width = "160px";
});

image.addEventListener("mouseout", function(){
    this.style = ""
    this.width = "150px"
});
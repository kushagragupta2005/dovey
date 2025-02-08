document.getElementById("noButton").addEventListener("mouseover", function() {
    this.style.position = "absolute";
    this.style.top = Math.random() * window.innerHeight + "px";
    this.style.left = Math.random() * window.innerWidth + "px";
});

document.getElementById("yesButton").addEventListener("click", function() {
    alert("Yay! See you on Valentine's Day! ❤️🥰");
});
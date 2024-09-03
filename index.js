const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nani = document.querySelector(".nani");

menu.addEventListener("click", function(){
    nani.classList.add("clicked");
    menu.style.display = "none";
    close.classList.add("clicked1");
})

close.addEventListener("click", function(){
    nani.classList.remove("clicked");
    menu.style.display = "block";
    close.classList.remove("clicked1");
})
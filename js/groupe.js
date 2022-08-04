const choisi = document.querySelector(".choisi");
const optionbox = document.querySelector(".option-box");
const optionlist = document.querySelectorAll(".option");

choisi.addEventListener("click", () => {
    optionbox.classList.toggle("active");   
});

optionlist.forEach( o => {
    o.addEventListener("click", () => {
        choisi.innerHTML = o.querySelector("label").innerHTML;
        optionbox.classList.remove("active");
    });
});
/* I know.. ce n'est pas du tout optimisé ce code. */


const choisi1 = document.querySelector(".choisi");
const choisi2 = document.getElementById("#choisi2");
const optionbox1 = document.querySelector(".option-box");
const optionbox2 = document.getElementById("#option-box2");
const optionlist1 = document.querySelectorAll(".option1");
const optionlist2 = document.querySelectorAll(".option2");


choisi1.addEventListener("click", () => {
    optionbox1.classList.toggle("active");
});

choisi2.addEventListener("click", () => {
    optionbox2.classList.toggle("active");
});



optionlist1.forEach(o => {
    o.addEventListener("click", () => {
        choisi1.innerHTML = o.querySelector("label").innerHTML;
        optionbox1.classList.remove("active");
    });
});

optionlist2.forEach(option => {
    option.addEventListener("click", () => {
        choisi2.innerHTML = option.querySelector("label").innerHTML;
        optionbox2.classList.remove("active");
    });
});
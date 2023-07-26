let btn = document.getElementById("btn");
let nav = document.querySelector(".txt")
// console.log(nav)

btn.onclick = () => {
    btn.classList.toggle("fa-times");
    nav.classList.toggle("active");
};
window.onscroll = () => {
    btn.classList.remove("fa-times");
    btn.classList.remove("active");
};
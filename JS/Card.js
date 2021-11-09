var Span;
var Imag;

function Main(){
    document.querySelectorAll(".card").forEach((ele)=>{
        ele.addEventListener("click", ()=>{
            Span = ele.querySelector("span").innerHTML;
            Imag = ele.querySelector("img").src;
            localStorage.setItem("Proper", Span);
            localStorage.setItem("Imagen", Imag);
            window.location.href = "Compra.html";
        })
    })
}
function Property(){

    document.querySelector("title").innerText = localStorage.getItem("Proper");
    document.querySelector("img").src = localStorage.getItem("Imagen");
    document.querySelector(".des").innerHTML = localStorage.getItem("Proper");
}
var Span;
var Imag;

function Main(){
    document.querySelectorAll(".card").forEach((ele)=>{
        ele.addEventListener("click", ()=>{
            Span = ele.querySelector("span").innerHTML;
            Imag = ele.querySelector("img").src;
            localStorage.setItem("Proper", Span);
            localStorage.setItem("Imagen", Imag);
            localStorage.key(ele);
            window.location.href = "Compra.html";
        })
    })
}
function Property(){

    document.querySelector("title").innerText = localStorage.getItem("Proper");
    document.querySelector("img").src = localStorage.getItem("Imagen");
    document.querySelector(".des").innerHTML = localStorage.getItem("Proper");

    var h3 = "<h3>Descripcion</h3>";
    var Llana_llma =  "<span>echa con lana de llama</span>";
    var LLana_Ove =  "<span>echa con lana de oveja</span>";
    var color = "<span>Posee un color </span>";


    const Descripcion = {
        'Chalina echa con lana de llama Cusqueña': document.querySelector(".features").innerHTML = h3+"</br>"+ Llana_llma+"</br>"+ "<span>Posee varios colores</span>",
        'Lana de llama' : document.querySelector(".features").innerHTML = h3+"</br>"+ LLana_Ove+"</br>"+"<span>Posee varios colores</span>",
        'Saco de lana para mujer': document.querySelector(".features").innerHTML=h3+"</br>"+Llana_llma+"</br>"+color+"marron",
        'Set de crochetes para tejer': document.querySelector(".features").innerHTML = h3+"</br>"+"Posee un set de 5 crochetes, agujas y ganchos" + "</br>"+ "Posee varios colores",


    }
}
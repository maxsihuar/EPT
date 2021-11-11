var Count = 0;
    document.querySelector("h3").addEventListener("click", ()=>{
        var Span = document.querySelector(".des").innerText;

        switch (Span) {
            case 'Chalina echa con lana de llama Cusqueña':
                document.querySelector(".features").innerHTML ="</br>"+ LLana_Ove+"</br>"+"<span>Posee varios colores</span>";
                break;
            case 'Lana de llama':
                document.querySelector(".features").innerHTML = h3+"</br>"+ LLana_Ove+"</br>"+"<span>Posee varios colores</span>"
                break;
            
            default:
                break;
        }
            
    })

    document.querySelector(".fa-shopping-cart").addEventListener("click", ()=>{
        if(Count==1)return;
        document.querySelector(".precio").innerHTML=document.querySelector(".precio").innerHTML+12;
        document.querySelector(".precio").classList.remove("display");
        Count=1;

    })
    var Llana_llma =  "<span>echa con lana de llama</span>";
    var LLana_Ove =  "<span>echa con lana de oveja</span>";
    var color = "<span>Posee un color </span>";


    /*const Descripcion = {
        'Chalina echa con lana de llama Cusqueña': document.querySelector(".features").innerHTML = h3+"</br>"+ Llana_llma+"</br>"+ "<span>Posee varios colores</span>",
        'Lana de llama' : document.querySelector(".features").innerHTML = h3+"</br>"+ LLana_Ove+"</br>"+"<span>Posee varios colores</span>",
        'Saco de lana para mujer': document.querySelector(".features").innerHTML=h3+"</br>"+Llana_llma+"</br>"+color+"marron",
        'Set de crochetes para tejer': document.querySelector(".features").innerHTML = h3+"</br>"+"Posee un set de 5 crochetes, agujas y ganchos" + "</br>"+ "Posee varios colores",
        'Guantes blancos de lana' : document.querySelector(".features").innerHTML=h3+"</br>"+LLana_Ove+"</br>"+color+"blanco",
        'Gorro de lana': document.querySelector(".feutures").innerHTML=h3+"</br>"+LLana_Ove+"</br>"+color+"marron",


    }*/



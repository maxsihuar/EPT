var Count = 0;

const Harina_Habas = "</br>"+"<span>Harina de habas peladas</span>"+"</br>"+"<span>Granos finamente molios</span>";
const Kañiwa_tostada = "</br>"+"<span>Granos de Kañiwa tostadas</span>"+"</br>"+"<span>Granos tostados parejamente</span>";
const Granos_Quinua = "</br>"+"<span>Granos de Quinua sin tostar</span>"+"</br>"+"<span>Granos de quinua pelados y lavados</span>";
const Granos_Trigo= "</br>"+"<span>Granos de trigo sin tostar</span>"+"</br>"+"<span>Granos de trigo lavados y pelados</span>";
const Granos_Sacha = "</br>"+"<span>Granos de Sacha Inchi sin pelas</span>"+"</br>"+"<span>Granos lavados y descontaminados</span>";
const Granos_Mani = "</br>"+"<span>Harina de mani pelados</span>"+"</br>"+"<span>Granos lavados son tostar</span>";
const Harina_Maiz = "</br>"+"<span>Harina de granos de maiz amarillos</span>"+"</br>"+"<span>Harina de maiz seco</span>";
const Castañas = "</br>"+"<span>Granos de castaña lavados</span>"+"</br>"+"<span>Granos sin tostar</span>"




    document.querySelector("h3").addEventListener("click", ()=>{
        var Span = document.querySelector(".des").innerText;
        switch (Span) {
            case 'Harina de habas':
                document.querySelector(".features").innerHTML =Harina_Habas;
                break;
            case 'Kañiwa tostada':
                document.querySelector(".features").innerHTML = Kañiwa_tostada;
                break;
            case 'Granos de Quinua':
                document.querySelector(".features").innerHTML = Granos_Quinua;
                break;
            case 'Granos de Trigo':
                document.querySelector(".features").innerHTML=Granos_Trigo;
                break;
            case 'Granos de Sacha inchi':
                document.querySelector(".features").innerHTML = Granos_Sacha;
                break;
            case 'Granos de mani pelados':
                document.querySelector(".features").innerHTML=Granos_Mani;
                break;
            case 'Harina de maiz':
                document.querySelector(".features").innerHTML=Harina_Maiz;
                break;
            case 'Castañas':
                document.querySelector(".features").innerHTML=Castañas;
                break;
        }
            
    })

    document.querySelector(".fa-shopping-cart").addEventListener("click", ()=>{
        if(Count==1)return;
        document.querySelector(".precio").innerHTML=document.querySelector(".precio").innerHTML+"S/"+12;
        document.querySelector(".cont").classList.remove("display");
        Count=1;
    })



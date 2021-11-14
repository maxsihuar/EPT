var Count = 0;
var Span;

const Harina_Habas = "</br>"+"<span>Harina de habas peladas</span>"+"</br>"+"<span>Granos finamente molios</span>";
const Kañiwa_tostada = "</br>"+"<span>Granos de Kañiwa tostadas</span>"+"</br>"+"<span>Granos tostados parejamente</span>";
const Granos_Quinua = "</br>"+"<span>Granos de Quinua sin tostar</span>"+"</br>"+"<span>Granos de quinua pelados y lavados</span>";
const Granos_Trigo= "</br>"+"<span>Granos de trigo sin tostar</span>"+"</br>"+"<span>Granos de trigo lavados y pelados</span>";
const Granos_Sacha = "</br>"+"<span>Granos de Sacha Inchi sin pelas</span>"+"</br>"+"<span>Granos lavados y descontaminados</span>";
const Granos_Mani = "</br>"+"<span>Harina de mani pelados</span>"+"</br>"+"<span>Granos lavados son tostar</span>";
const Harina_Maiz = "</br>"+"<span>Harina de granos de maiz amarillos</span>"+"</br>"+"<span>Harina de maiz seco</span>";
const Castañas = "</br>"+"<span>Granos de castaña lavados</span>"+"</br>"+"<span>Granos sin tostar</span>";
const Oca = "</br>"+"<span>Ocas lavada cuidadosamente</span>"+"</br>"+"<span>Oca sin pelar </span>";
const Olluco = "</br>"+"<span>Olluco sin lavar ni pelar</span>"+"</br>"+"<span>Olluco lavada cuidadosamente</span>";
const Yuca = "</br>"+"<span>Yuca lavada y cortada de las puntas</span>"+"</br>"+"<span>Yucasin pelar </span>";
const Jicama = "</br>"+"<span>Jicama madura lista para preparar</span>"+"</br>"+"<span>Jicama lavada cuidadosamente</span>";
const Chuño = "</br>"+"<span>Chuño secado cuidadosamente</span>"+"</br>"+"<span>Chuño bien pelado</span>";
const Camote = "</br>"+"<span>Camote lavada cuidadosamente</span>"+"</br>"+"<span>Camote sin pelar</span>";
const Yacon = "</br>"+"<span>Yácon bien lavado y envasado</span>"+"</br>"+"<span>Yácon sin pelar y son raices</span>";
const Cecina = "</br>"+"<span>Cecina bien secada y conservada con sal</span>"+"</br>"+"<span>Sellado al vacio</span>";
const Charqi = "</br>"+"<span>Charqi bien secado al sol y conservada con sal</span>"+"</br>"+"<span>Sellado al vacio</span>";
const Higado = "</br>"+"<span>Higado filetiado y sin grasa</span>"+"</br>"+"<span>Sellado al vacio</span>";
const Trucha = "</br>"+"<span>Trucha filetiada y sin huesos</span>"+"</br>"+"<span>Sellado al vacio</span>";




    document.querySelector("h3").addEventListener("click", ()=>{
        Span = document.querySelector(".des").innerText;
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
            case 'Oca':
                document.querySelector(".features").innerHTML=Oca;
                break;
            case 'Olluco':
                document.querySelector(".features").innerHTML=Olluco;
                break; 
            case 'Yuca':
                document.querySelector(".features").innerHTML=Yuca;
                break;
            case 'Jicama':
                document.querySelector(".features").innerHTML=Jicama;
                break;
            case 'Chuño':
                document.querySelector(".features").innerHTML=Chuño;
                break;
            case 'Yácon':
                document.querySelector(".features").innerHTML=Yacon;
                break;
            case 'Cecina':
                document.querySelector(".features").innerHTML=Cecina;
                break;
            case 'Charqi':
                document.querySelector(".features").innerHTML=Charqi;
                break;
            case 'Higado':
                document.querySelector(".features").innerHTML=Higado;
                break;
            case 'Trucha':
                document.querySelector(".features").innerHTML=Trucha;
                break;
        }
            
    })

    const Precios = {
        'Harina de habas': 'S/7',
        'Kañiwa tostada': 'S/8',
        'Granos de Quinua': 'S/7',
        'Granos de Trigo': 'S/7',
        'Granos de Sacha inchi': 'S/9',
        'Granos de mani pelados': 'S/5',
        'Harina de maiz': 'S/6',
        'Castañas': 'S/7',
        'Oca': 'S/10',
        'Olluco': 'S/8',
        'Yuca': 'S/11',
        'Jicama': "S/12",
        'Chuño': 'S/7',
        'Yácon': 'S/13',
        'Cecina': "S/12",
        'Charqi': 'S/11',
        'Higado': 'S/11',
        'Trucha': 'S/10',

    }

    document.querySelector(".fa-shopping-cart").addEventListener("click", ()=>{
        if(Count==1)return;
        var Precio_actual = Precios[Span];
        document.querySelector(".precio").innerHTML=document.querySelector(".precio").innerHTML+Precio_actual+" por kilo";
        document.querySelector(".cont").classList.remove("display");
        Count=1;
    })



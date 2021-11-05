const Search =  document.getElementById("search"); 

const Bar = document.getElementById("btn");

Bar.addEventListener('click', ()=>{
    document.querySelectorAll('li').forEach((element) =>{
      element.classList.toggle('responsive')
    });
})

function Seach(){
  Search.classList.toggle("display");
}

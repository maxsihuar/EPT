const Search =  document.getElementById("search"); 

const Bar = document.getElementById("btn");

let Submit = document.querySelector("#searcher");

document.querySelector("form").addEventListener("submit",()=>{
	event.preventDefault()
})

Bar.addEventListener('click', ()=>{
    document.querySelectorAll('li').forEach((element) =>{
      element.classList.toggle('responsive')
    });
})

function Seach(){
  Search.classList.toggle("display");
}

function onKeyDow(event){
  let key = event.keyCode;
  
  if(key==13){
    window.location.href = "https://www.google.com/search?q=" + Submit.value;
  };
}
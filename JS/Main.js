const Search =  document.getElementById("search"); 

const Bar = document.getElementById("btn");

let Submit = document.querySelector("#searcher");

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');

	// Guardamos el modo en localstorage.
	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

// Obtenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
}

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

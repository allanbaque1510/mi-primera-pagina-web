const imenu= document.querySelector('.imenu');
const menu= document.querySelector('.menu-navegacion');
//console.log(menu)
//console.log(imenu)

imenu.addEventListener('click', ()=>{
	menu.classList.toggle("spread")
})
window.addEventListener('click', e=>{
	if(menu.classList.contains("spread") && e.target !=menu && e.target !=imenu){
		menu.classList.toggle("spread")
	}
})
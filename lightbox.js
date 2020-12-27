const imagenes=document.querySelectorAll('.img-galeria')
const imageneslight=document.querySelector('.agregar-imagen')
const contenedorLight=document.querySelector('.imagen-light')
const imenu1= document.querySelector('.imenu');
imagenes.forEach(imagen =>{
	imagen.addEventListener('click',()=>{
		aparecerImagen(imagen.getAttribute('src'))
	
	})
})
contenedorLight.addEventListener('click', (e) =>{
	if(e.target !== imageneslight){
		contenedorLight.classList.toggle('show')
		imageneslight.classList.toggle('showimage')
		imenu1.style.opacity='1'
	}
})


const aparecerImagen =(imagen)=>{
	imageneslight.src=imagen;
	contenedorLight.classList.toggle('show')
	imageneslight.classList.toggle('showimage')
	imenu1.style.opacity='0'
}


let filas = document.getElementsByClassName('temario-fila')


for(let fila of filas)
{
	fila.addEventListener('click', function()
	{
		if(this.offsetHeight == 25)
		{
			fila.style.height = this.children[1].offsetHeight + 25 + 'px'
			fila.style.marginBottom = '20px'
			fila.style.height = this.children[0].style.color = 'royalblue'
		}
		else
		{
			fila.style.height = '25px'
			fila.style.marginBottom = '0'
			fila.style.height = this.children[0].style.color = '#333'

			console.log(this.children[0])
		}
	})
}


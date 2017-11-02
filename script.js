var scissors = document.getElementById('tijeras')
var rock = document.getElementById('piedra')
var paper = document.getElementById('papel')
var userSelect =5
var pcSelect = 5
var result = document.getElementById('resultado')
var VS = document.getElementById('vs')

scissors.addEventListener('click', function myFunction(){
	userSelect = 0
	document.getElementById('tijeras').style.border = 'solid 10px black'
	document.getElementById('piedra').style.border = 'none'
	document.getElementById('papel').style.border = 'none'
		
		console.log(userSelect)
		pcSelect = Math.floor(Math.random()*3)
		console.log(pcSelect)
		
		if (userSelect>pcSelect && userSelect != 0 || userSelect==0 && pcSelect==2) {
		result.innerHTML = 'GANASTE!'
		}else if(userSelect==pcSelect){
		result.innerHTML = 'EMPATE!'
		}else{
		result.innerHTML = 'PERDISTE'
		}

		if (pcSelect==0){
			VS.innerHTML = 'Tijeras VS. Tijeras'
		}else if (pcSelect==1){
			VS.innerHTML = 'Tijeras VS. Piedra'
		}else{
			VS.innerHTML = 'Tijeras VS. Papel'
		}
})

rock.addEventListener('click', function myFunction(){
	userSelect = 1
	document.getElementById('piedra').style.border = 'solid 10px black'
	document.getElementById('tijeras').style.border = 'none'
	document.getElementById('papel').style.border = 'none'
		
		console.log(userSelect)
		pcSelect = Math.floor(Math.random()*3)
		console.log(pcSelect)
		
		if (userSelect>pcSelect && userSelect != 0 || userSelect==0 && pcSelect==2) {
		result.innerHTML = 'GANASTE!'
		}else if(userSelect==pcSelect){
		result.innerHTML = 'EMPATE!'
		}else{
		result.innerHTML = 'PERDISTE'
		}

		if (pcSelect==0){
			VS.innerHTML = 'Piedra VS. Tijeras'
		}else if (pcSelect==1){
			VS.innerHTML = 'Piedra VS. Piedra'
		}else{
			VS.innerHTML = 'Piedra VS. Papel'
		}
})
paper.addEventListener('click', function myFunction(){
	userSelect = 2
	document.getElementById('papel').style.border = 'solid 10px black'
	document.getElementById('tijeras').style.border = 'none'
	document.getElementById('piedra').style.border = 'none'
		
		console.log(userSelect)
		pcSelect = Math.floor(Math.random()*3)
		console.log(pcSelect)
		
		if (userSelect>pcSelect && userSelect != 0 || userSelect==0 && pcSelect==2) {
		result.innerHTML = 'GANASTE!'
		}else if(userSelect==pcSelect){
		result.innerHTML = 'EMPATE!'
		}else{
		result.innerHTML = 'PERDISTE'
		}

		if (pcSelect==0){
			VS.innerHTML = 'Papel VS. Tijeras'
		}else if (pcSelect==1){
			VS.innerHTML = 'Papel VS. Piedra'
		}else{
			VS.innerHTML = 'Papel VS. Papel'
		}
})


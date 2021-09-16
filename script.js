function result() {
	let valor = document.getElementById("resultado").value

	document.getElementById("resultado").value = eval(valor)
}

function colocar(valor) {
	document.getElementById("resultado").value = document.getElementById("resultado").value + valor
}


function remove() {
	document.getElementById("resultado").value = "" 
}

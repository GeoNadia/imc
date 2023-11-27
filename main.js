

function calcularIMC(){
    var peso = parseFloat(document.getElementById("peso").value)
    var altura = parseFloat(document.getElementById("altura").value)
    var idade = parseInt(document.getElementById("idade").value)
    var nome = document.getElementById("nome").value.trim()
    var alturaEmMetros = altura / 100
    var imc = peso / (alturaEmMetros * alturaEmMetros)
    var res = document.getElementById("res")

    if(isNaN(peso) || isNaN(altura) || isNaN(idade) || nome.length === 0) {
           //alert('ERRO.. Faltam dados!')
          res.innerHTML= "Impossível contar"
       }

    if(imc < 18.5){
        res.innerHTML = "<p>Oi "+ nome+", " + " seu IMC é de: " + imc.toFixed(2) + "<br>"+ "Abaixo do Peso"
    } else if(imc < 24.9){
        res.innerHTML = "<p>Oi "+ nome+", " + " seu IMC é de: " + imc.toFixed(2) + "<br>"+ "Peso Normal"
    } else if(imc< 29.9){
        res.innerHTML = "<p>Oi "+ nome+", " + " seu IMC é de: " + imc.toFixed(2) + "<br>"+ "Excesso de peso"
    } else if(imc < 34.9){
        res.innerHTML = "<p>Oi "+ nome+", " + " seu IMC é de: " + imc.toFixed(2) + "<br>"+ "Obesidade grau I"
    } else if(imc < 39.9){
        res.innerHTML = "<p>Oi "+ nome+", " + " seu IMC é de: " + imc.toFixed(2) + "<br>"+ "Obesidade Grau II"
    } else{
        res.innerHTML = "<p>Oi "+ nome+", " + " seu IMC é de: " + imc.toFixed(2) + "<br>"+ "Obesidade Grau III"
    }
    document.getElementById("peso").value = ""
    document.getElementById("altura").value = ""
    document.getElementById("idade").value = ""
    document.getElementById("nome").value = ""

}

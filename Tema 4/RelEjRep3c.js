function calcular(){
    valor = parseInt(document.getElementById("numero").value);
    valordoble = valor * 2;
    valorcuadrado = valor * valor;
    document.getElementById("doble").value = valordoble;
    document.getElementById("cuadrado").value = valorcuadrado;
}
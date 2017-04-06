function loadDoc() {
    
  var entrada = document.getElementById("user").value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("carga").innerHTML = xhttp.responseText;
    }
  };
    
  xhttp.open("GET", "pruebaCarga.php?user="+ entrada , true);
  xhttp.send();
} 
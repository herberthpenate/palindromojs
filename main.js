function evaluar() {
    var palabra = document.getElementById("palabra").value;
    if(palabra != '' && palabra.length>1) {
        var palabra_invertida = '';
        palabra = palabra.toLowerCase();
        var long_palabra = palabra.length;
        for(var i = 1; i<=(palabra.length);i++){
            palabra_invertida = palabra_invertida + palabra[long_palabra-i];
        };
        if(palabra==palabra_invertida) {
            document.write('La palabra ' + palabra + ' es un palindromo');
            document.palabra.value = '';
        }
        else {
            document.write('La palabra ' + '<Strong>' + palabra + '</Strong>' + ' no es un palíndromo');
        }
    }
    else if(palabra.length == 1) {
        document.write('No puede evaluarse un solo caracter como palabra');
    }
    else {
        alert('Inserte palabra a evaluar');
    }
};
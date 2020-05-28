let btnEncode = document.getElementById("botonE");
let btnDecode = document.getElementById("botonD");
let btnLimpiar = document.getElementById("botonLimpiar");
let ingTexto = document.getElementById("ingTextoHtml");
let salTexto = document.getElementById("salTextoHtml");

btnEncode.addEventListener("click", Encode);
function Encode(){

    let llave = document.getElementById("keyHtml").value;
    let nuevoTexto = '';
    for (let i = 0; i < ingTexto.value.length; i++) {
        let convAscii = ingTexto.value.charCodeAt(i);
        console.log(convAscii);
        
        if (convAscii >= 65 && convAscii <= 90) {
          nuevoTexto += String.fromCharCode((convAscii - 65 + parseInt(llave)) % 26 + 65); 
        } 
        
        else if (convAscii >= 97 && convAscii <= 122) {
          nuevoTexto += String.fromCharCode((convAscii - 97 + parseInt(llave)) % 26 + 97); 
        } 
        else {
          nuevoTexto += ingTexto.value[i];
        }
    }
    salTexto.value = nuevoTexto;    
    return nuevoTexto;
}

btnDecode.addEventListener("click", Decode);
function Decode(){
  let llave = document.getElementById("keyHtml").value;
    let nuevoTexto = '';
    for (let i = 0; i < ingTexto.value.length; i++) {
        let convAscii = ingTexto.value.charCodeAt(i);
        console.log(convAscii);
        
        if (convAscii >= 65 && convAscii <= 90) {
          nuevoTexto += String.fromCharCode((convAscii - 90 - parseInt(llave)) % 26 + 90); 
        } 
        
        else if (convAscii >= 97 && convAscii <= 122) {
          nuevoTexto += String.fromCharCode((convAscii - 122 - parseInt(llave)) % 26 + 122);
        } 
        else {
          nuevoTexto +=ingTexto.value[i];
        }

    }
    salTexto.value = nuevoTexto;    
    return nuevoTexto;
}

 btnLimpiar.addEventListener("click", limpiar); 
 function limpiar(){
  ingTexto.value = "";
  salTexto.value = "";

}



document.getElementById('botonC').addEventListener('click', function(){
    document.getElementById('salTextoHtml').focus();
    document.execCommand('selectAll');
    document.execCommand('copy');

    ingTexto.value = '';
    keyHtml.innerHtml = '';

    document.getElementById('salTextoHtml').value = '';

})
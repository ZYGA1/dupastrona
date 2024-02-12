var zdjencia = 
['zadymiarze/1.png',
 'zadymiarze/2.png',
 'zadymiarze/3.png',
 'zadymiarze/4.png',
 'zadymiarze/5.png',
 'zadymiarze/6.png',
 'zadymiarze/7.png',
 'zadymiarze/8.png',
 'zadymiarze/9.png',
 'zadymiarze/10.png'];
 
var zdjenciaIndex=0
console.log("dupa")
function funkcja() {
    let tak = document.getElementById('szeli');
    zdjenciaIndex=(zdjenciaIndex+1) %zdjencia.length;
    tak.src=zdjencia[zdjenciaIndex];
}

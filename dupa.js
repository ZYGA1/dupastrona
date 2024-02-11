var zdjencia = ['1.png','2.png','3.png','4.png','5.png'];
var zdjenciaIndex=0
console.log("dupa")
function funkcja() {
    let tak = document.getElementById('szeli');
    zdjenciaIndex=(zdjenciaIndex+1) %zdjencia.length;
    tak.src=zdjencia[zdjenciaIndex];
}

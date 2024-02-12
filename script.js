var zdjencia = [['zadymiarze/1.png',
'zadymiarze/2.png',
'zadymiarze/3.png',
'zadymiarze/4.png',
'zadymiarze/5.png',
'zadymiarze/6.png',
'zadymiarze/7.png',
'zadymiarze/8.png',
'zadymiarze/9.png',
'zadymiarze/10.png',
'zadymiarze/11.png',
'zadymiarze/12.png'],
[
 'Shelly',
 'El primo',
 'Edgar',
 'Colt',
 'Brock',
 'Bull',
 'Poco',
 'Nita',
 'Piper',
 'Mico',
 'Leon',
 'Crow']
]

var nazwy = zdjencia[1].flat();
console.log(nazwy)

var zdjenciaIndex=0
function postacieZdjecie() {
    let zdjecie = document.getElementById('szeli');
    let nazwa = document.getElementById('nazwa');

    zdjenciaIndex=(zdjenciaIndex+1) %zdjencia[0].length;
    zdjecie.src=zdjencia[0][zdjenciaIndex];
    nazwa.innerHTML = zdjencia[1][zdjenciaIndex];
}

const zdjecia = document.getElementById("kontener")
zdjencia[0].forEach((zdjecie, index) => {
        let box = document.createElement("div");
        const imagine = document.createElement("img");
        box.classList.add("card")
        imagine.src = zdjecie;
        imagine.alt = "picture";
        zdjecia.appendChild(box);
        box.appendChild(imagine);

        let nazwa = document.createElement('h3');
        nazwa.textContent = nazwy[index];
        box.appendChild(nazwa);

   
        

});







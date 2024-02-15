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
 'El_primo',
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

const zdjecia = document.getElementById("kontener")

function pojawianiezdjec(tekst = '') {
    zdjecia.innerHTML = '';

    zdjencia[0].forEach((zdjecie, index) => {
        const nazwa = nazwy[index];
        
        
        if (nazwa.toLowerCase().includes(tekst.toLowerCase()) || zdjecie.toLowerCase().includes(tekst.toLowerCase())) {
            let box = document.createElement("div");
            const imagine = document.createElement("img");
            box.classList.add("card")
            imagine.src = zdjecie;
            imagine.alt = "picture";
            zdjecia.appendChild(box);
            box.appendChild(imagine);

            let nazwaElement = document.createElement('h3');
            nazwaElement.textContent = nazwa;
            box.appendChild(nazwaElement);
           
            imagine.onclick = () =>{
                location.href = dupa(nazwa)
            }
        }
    });
}


const wyszukiwanieInput = document.getElementById('wyszukiwanieInput');
wyszukiwanieInput.addEventListener('input', function() {
    const tekst = wyszukiwanieInput.value;
    pojawianiezdjec(tekst);
});


pojawianiezdjec()

function dupa(nazwa) {
    return 'strony/' + nazwa + '.html';
}


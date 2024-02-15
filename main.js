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


var zdjenciaIndex=0
function postacieZdjecie() {
    let zdjecie = document.getElementById('szeli');
    let nazwa = document.getElementById('nazwa');

    zdjenciaIndex=(zdjenciaIndex+1) %zdjencia[0].length;
    zdjecie.src=zdjencia[0][zdjenciaIndex];
    nazwa.innerHTML = zdjencia[1][zdjenciaIndex];
}

const a =  document.getElementById('tak')
let rotation = 0

document.addEventListener("keydown", iwent =>{
    switch (iwent.key) {
        case 'a' :
            a.style.backgroundColor = 'white'
            a.style.transform = 'rotate(-90deg)';
            rotation = -90;
            break;
        case 'd':
            a.style.transform = 'rotate(90deg)';
            a.style.backgroundColor = 'white'
            rotation = 90;
            break;
        case 'w':
            a.style.transform = 'rotate(0deg)';
            a.style.backgroundColor = 'white'
            rotation = 0;
            break;
        case 's':
            a.style.transform = 'rotate(180deg)';
            a.style.backgroundColor = 'white'
            rotation = 180;
            break;
        case 'j' :
            if( rotation >= 10 * -360){
                rotation -= 5;
                a.style.transform = `rotate(${rotation}deg)`
                console.log(rotation)
            }else{
                console.log("nie")
                a.style.transform = `rotate(-3600deg)`
            }
            break;
        case 'l':
            if (rotation <= 10 * 360) {
                rotation += 5
                a.style.transform = `rotate(${rotation}deg)`
                console.log(rotation)
            }else {
                console("tak")
                a.style.transform = `rotate(3600deg)`
            }
            break;

        default:
            break;
        
    
        
                

    }

});

document.addEventListener("keyup", event =>{
    if(event.key == 'a' || event.key == 'd' || event.key == 'c' || event.key ==  'd'){
    a.style.backgroundColor = 'green'

    }
});




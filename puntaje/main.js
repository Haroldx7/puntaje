const puntaje = document.querySelector('.puntaje');
let puntajeActual = 0;
let puntajeLimite = 5;

const htmlMap = Array.from(Array(puntajeLimite)).map((item, i)=>{
    return `<div class="item item-${i}" data-pos="${i}"></div>`;
});

puntaje.innerHTML = htmlMap.join("");


document.querySelectorAll(".item").forEach((item) => {
    item.addEventListener('mouseover', e =>{
        const posicion = item.getAttribute("data-pos");

        if(puntajeActual === parseInt(posicion) + 1){
            return;
        }

        document.querySelectorAll(".item").forEach(c =>{
            if(c.classList.contains("select")){
                c.classList.remove("select");
            }
        });

        for(let i = 0; i<= posicion; i++){
            const cuadro = document.querySelector(`.item-${i}`);
            if(!cuadro.classList.contains("select")){
                cuadro.classList.add("select")
            };
        };
        puntajeActual = parseInt(posicion)+1
    });
    item.addEventListener('click', e =>{
        const posicion = item.getAttribute("data-pos");
        puntajeActual = parseInt(posicion) + 1;
    });
});
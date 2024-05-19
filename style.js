//Funcion de coger un elemento aleatorio en un array
const random = (array) => {
 return array[Math.floor(Math.random() * array.length)];
}

//BANNER: Aleatorio al click
    //Array de imagenes de banner
    const arrayBanner = ['banner/1.jpg', 'banner/2.jpg', 'banner/3.jpg', 'banner/4.jpg', 'banner/5.jpg', 'banner/6.jpg', 'banner/7.jpg', 'banner/8.jpg']
    //Selector del id banner
    const idBanner = document.querySelector('#banner')
    //Crear un elemento imagen para añadirlo despues
    let añadirImagenBanner = document.createElement("img")
    //Añadir atributo src a la imagen - pongo la funcion con el array de banners
    añadirImagenBanner.src = random(arrayBanner)
    //Añadir el alt a las imagenes
    añadirImagenBanner.alt = "Banner con imagenes de viajes"
    //Añadir imagen al contenedor
    idBanner.appendChild(añadirImagenBanner)

    //Para que se cambie haciendo click
    añadirImagenBanner.addEventListener("click", function() {
        añadirImagenBanner.src = random(arrayBanner)
        })


//CANARIAS: Para que cambie al click
    const arrayCanarias = ['viajes/viajes-1.jpg','viajes/viajes-2.jpg']
    const idCanarias = document.querySelector('#canarias')
    const añadirImagenCanarias = document.createElement("img")

    añadirImagenCanarias.src = 'viajes/viajes-1.jpg'
    añadirImagenCanarias.alt = 'Una bonita imagen de canarias'
    idCanarias.appendChild(añadirImagenCanarias)

    añadirImagenCanarias.addEventListener("click", function(){
        añadirImagenCanarias.src = random(arrayCanarias)
})

/*PUNTA CANA: Aquí voy a hacer algo distinto,
en vez de hacerlo random voy a 
añadir sólo dos imagenes */
    const idPuntaCana = document.querySelector('#puntaCana');
    const imgPuntaCana = document.createElement("img");

    imgPuntaCana.src = 'viajes/viajes-3.jpg';
    imgPuntaCana.alt = 'Una bonita imagen de Punta Cana';
    idPuntaCana.appendChild(imgPuntaCana);

    imgPuntaCana.addEventListener("click", function(){
        if (imgPuntaCana.src.includes("viajes/viajes-3.jpg")) {
            imgPuntaCana.src = "viajes/viajes-4.jpg";
        } else {
            imgPuntaCana.src = "viajes/viajes-3.jpg";
        }
    });

//VALLECAS: Aquí voy a coger elementos directamente del array en vez de hacer random
    //Hago variables del array, id, imagen y el valor en el que iniciaremos el índice del array
    const arrayVallecas = ['viajes/viajes-5.jpg','viajes/viajes-6.jpg', 'viajes/viajes-7.jpg']
    const idVallecas = document.querySelector('#vallecas')
    const imagenVallecas = document.createElement("img")
    let indiceVallecas = 0
    //Hago una funcion para que la source cambie en función del indice del array
    function cambiarImagenArray(){
        imagenVallecas.src = arrayVallecas[indiceVallecas]
    }
    //Invoco la función y mostramos la primera imagen
    cambiarImagenArray()
    idVallecas.appendChild(imagenVallecas)
    //Hacemos un evento para que cambie al hacer click estableciendo el máximo del array
    imagenVallecas.addEventListener("click", function(){
        if(indiceVallecas > 1){
            indiceVallecas = 0
        } else {
            indiceVallecas++
        }
        //invocamos la función
        cambiarImagenArray()
    })


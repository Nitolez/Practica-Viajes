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
    idBanner.append(añadirImagenBanner)

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
    idCanarias.append(añadirImagenCanarias)

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
    idPuntaCana.append(imgPuntaCana);

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
    //Hago una funcion para cambiar la source cambie en función del indice del array
    function cambiarImagenArray(){
        imagenVallecas.src = arrayVallecas[indiceVallecas]
    }
    //Invoco la función y mostramos la primera imagen
    cambiarImagenArray()
    idVallecas.append(imagenVallecas)
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

//Añadir una lista de opciones al final de la pagina
    // Crear y configurar los elementos
    const formulario = document.createElement("form");
    // Añadir atributos al formulario
    formulario.setAttribute("action", "enviar_formulario.php");
    formulario.setAttribute("method", "get");

    const label = document.createElement("label");
    label.setAttribute("for", "destino");

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("list", "listaDestinos");
    input.setAttribute("id", "destino");
    input.setAttribute("name", "destino");
    input.setAttribute("required", true);

    const datalist = document.createElement("datalist");
    datalist.setAttribute("id", "listaDestinos");

    // Añadir las opciones a la datalist
    const opciones = ["Canarias", "Punta Cana", "Vallecas"];
    opciones.forEach(opcion => {
        const option = document.createElement("option");
        option.value = opcion;
        datalist.append(option);
    });

    // Asegúrate de que el contenedor 'destinos' existe en el DOM
    const contenedorDestinos = document.querySelector("#destinos");

    if (contenedorDestinos) {
        // Función para añadir un elemento a un contenedor
        function crearElemento(elemento, contenedor) {
            contenedor.appendChild(elemento);
        }

        // Añadir elementos al formulario
        formulario.append(label);
        formulario.append(input);
        formulario.append(datalist);

        // Añadir el formulario al contenedor 'destinos'
        crearElemento(formulario, contenedorDestinos);
    } else {
    }
//Hacer un array multidimensional desestructurado
const arrayDesestructurado  = [
    ["imagen1.jpg", "Nombre de la Imagen 1", "Texto Alternativo 1"],
    ["imagen2.jpg", "Nombre de la Imagen 2", "Texto Alternativo 2"],
    ["imagen3.jpg", "Nombre de la Imagen 3", "Texto Alternativo 3"],
    ["imagen4.jpg", "Nombre de la Imagen 4", "Texto Alternativo 4"],
    ["imagen5.jpg", "Nombre de la Imagen 5", "Texto Alternativo 5"],
    ["imagen6.jpg", "Nombre de la Imagen 6", "Texto Alternativo 6"]
];

const [src, textoImg, alt] = arrayDesestructurado[0]

   function convertirArrayMultidimensional(imagenes) {
       let imagenesConvertidas = [];
       for (let i = 0; i < imagenes.length; i++) {
           let [src, textoImg, alt] = imagenes[i];
           imagenesConvertidas.push({ src, textoImg, alt });
       }
       return imagenesConvertidas;
   }
   
   let imagenesConvertidas = convertirArrayMultidimensional(imagenes);
   console.log(imagenesConvertidas);

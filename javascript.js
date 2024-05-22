//VARIABLES
const bienvenidosContainer = document.querySelector('.container-bienvenidos');
const recomendadosContainer = document.querySelector('#recomendados');
const select = document.querySelector('select');
const fragment = document.createDocumentFragment();
const destinosArray = [{value: 'Vallecas'}, {value: 'Canarias'}, {value: 'Alcalá de Henares'}, {value: 'Las 100 mil viviendas'}, {value: 'Tu casa'}, {value: 'Mi casa'}, {value: 'Miaumiaumiau'}];
const imgArray = [
     {
        src: './viajes/viajes-1.jpg',
        alt: 'paisaje uno',
        title: 'paisaje genérico',
        texto: 'Suspendisse mollis mi ac dui iaculis euismod. Cras neque ipsum, tristique sit amet orci eget, porttitor scelerisque dui. Integer iaculis fermentum nunc at ultricies.',
        id: "viaje1"
    },
     {
        src: 'viajes/viajes-2.jpg',
        alt: 'paisaje dos',
        title: 'paisaje genérico',
        texto: 'Suspendisse mollis mi ac dui iaculis euismod. Cras neque ipsum, tristique sit amet orci eget, porttitor scelerisque dui. Integer iaculis fermentum nunc at ultricies.',
        id: "viaje2"
    },
     {
        src: 'viajes/viajes-3.jpg',
        alt: 'paisaje tres',
        title: 'paisaje genérico',
        texto: 'Suspendisse mollis mi ac dui iaculis euismod. Cras neque ipsum, tristique sit amet orci eget, porttitor scelerisque dui. Integer iaculis fermentum nunc at ultricies.',
        id: "viaje3"
    },
     {
        src: 'viajes/viajes-4.jpg',
        alt: 'paisaje cuatro',
        title: 'paisaje genérico',
        texto: 'Suspendisse mollis mi ac dui iaculis euismod. Cras neque ipsum, tristique sit amet orci eget, porttitor scelerisque dui. Integer iaculis fermentum nunc at ultricies.',
        id: "viaje4"
    },
     {
        src: 'viajes/viajes-5.jpg',
        alt: 'paisaje cinco',
        title: 'paisaje genérico',
        texto: 'Suspendisse mollis mi ac dui iaculis euismod. Cras neque ipsum, tristique sit amet orci eget, porttitor scelerisque dui. Integer iaculis fermentum nunc at ultricies.',
        id: "viaje5"
    },
     {
        src: 'viajes/viajes-6.jpg',
        alt: 'paisaje seis',
        title: 'paisaje genérico',
        texto: 'Suspendisse mollis mi ac dui iaculis euismod. Cras neque ipsum, tristique sit amet orci eget, porttitor scelerisque dui. Integer iaculis fermentum nunc at ultricies.',
        id: "viaje6"
    },
     {
        src: 'viajes/viajes-7.jpg',
        alt: 'paisaje siete',
        title: 'paisaje genérico',
        texto: 'Suspendisse mollis mi ac dui iaculis euismod. Cras neque ipsum, tristique sit amet orci eget, porttitor scelerisque dui. Integer iaculis fermentum nunc at ultricies.',
        id: "viaje7"
    }
];
const bannerArray = [
    {
        src: 'banner/1.jpg',
        alt: 'paisaje banner uno',
        title: 'paisaje genérico banner'
    },
    {
        src: 'banner/2.jpg',
        alt: 'paisaje banner dos',
        title: 'paisaje genérico banner'
    },
    {
        src: 'banner/3.jpg',
        alt: 'paisaje banner tres',
        title: 'paisaje genérico banner'
    },
    {
        src: 'banner/4.jpg',
        alt: 'paisaje banner cuatro',
        title: 'paisaje genérico banner'
    },
    {
        src: 'banner/5.jpg',
        alt: 'paisaje banner cinco',
        title: 'paisaje genérico banner'
    },
    {
        src: 'banner/6.jpg',
        alt: 'paisaje banner seis',
        title: 'paisaje genérico banner'
    },
    {
        src: 'banner/7.jpg',
        alt: 'paisaje banner siete',
        title: 'paisaje genérico banner'
    },
    {
        src: 'banner/8.jpg',
        alt: 'paisaje banner ocho',
        title: 'paisaje genérico banner'
    }
];

//FUNCIONES
function random(arr) {
    return Math.floor(Math.random() * arr.length);
}
//desestructuro cada objeto destino
const pintarOpciones = () => {
    destinosArray.forEach(({value}) => {
        const option = document.createElement('option');
        option.textContent = value;
        option.setAttribute('value', value);
        fragment.append(option);
    });
    select.append(fragment);
};
const pintarBanner = () => {
    const banner = document.createElement('img');
    banner.classList.add('imagen-banner');
    const randomBanner = bannerArray[random(bannerArray)];
    banner.src = randomBanner.src;
    banner.alt = randomBanner.alt;
    banner.title = randomBanner.title;
    fragment.append(banner);
    bienvenidosContainer.append(fragment);
};
const pintarCards = () => {
    imgArray.forEach(({alt, src, texto, title, id}, index) => {
        const contenedorViajes = document.createElement('article');
        const contenedorImagen = document.createElement('div');
        const boton = document.createElement("button")
        const imagenViajes = document.createElement('img');
        contenedorImagen.classList.add('contenedorImagen');
        const tituloViajes = document.createElement('h3');
        const textoViajes = document.createElement('p');
        imagenViajes.src = src;
        imagenViajes.alt = alt;
        imagenViajes.title = title;
        contenedorViajes.id = id
        boton.type = "button";
        boton.textContent = "Click"
        boton.id = src;
        boton.alt = alt;
        tituloViajes.textContent = destinosArray[index].value;
        textoViajes.textContent = texto;
        contenedorImagen.append(imagenViajes);
        contenedorViajes.append(contenedorImagen, tituloViajes, textoViajes, boton);
        fragment.append(contenedorViajes);
    })
    recomendadosContainer.append(fragment);
};

//INVOCACIÓN DE FUNCIONES
pintarOpciones();
pintarBanner();
pintarCards();


//EJERCICIO DE CLASE DIA 6

//NUEVAS VARIABLES

const seccionImagenGrande = document.querySelector("#seccionGrande")

//EVENTOS NUEVOS
document.addEventListener("click", ({target}) => {
    if(target.matches('div#recomendados button')){
        let id = target.id
        let titulo = target.alt
        dibujarFotoGrande(target.id, titulo)
    }
})

//NUEVAS FUNCIONES

const dibujarFotoGrande = (id, titulo) => {
    console.log(`Pintando la foto con id: ${id}`)
    console.log(`El titulo es ${titulo}`)
    // Limpiar el contenido anterior
    seccionImagenGrande.innerHTML = '';
    const imagenGrande = document.createElement('img');
    const textoImagenGrande = document.createElement("h2")
    imagenGrande.src = id   
    textoImagenGrande.textContent = titulo;
    seccionImagenGrande.append(textoImagenGrande, imagenGrande)
}
// PRODUCTOS
const productos = [
    // PS5
    {
        id: "chilenito",
        titulo: "Tormented Souls",
        imagen: "./img/games/chilenito.jpg",
        categoria: {
            nombre: "PS5",
            id: "ps5"
        },
        precio: 1000
    },
    {
        id: "codv",
        titulo: "Call of Duty: Vanguard",
        imagen: "./img/games/codv.png",
        categoria: {
            nombre: "PS5",
            id: "ps5"
        },
        precio: 1000
    },
    {
        id: "f1",
        titulo: "Formula 1",
        imagen: "./img/games/f1.jpg",
        categoria: {
            nombre: "PS5",
            id: "ps5"
        },
        precio: 1000
    },
    {
        id: "gowr",
        titulo: "God of War: Ragnarök",
        imagen: "./img/games/gowr.png",
        categoria: {
            nombre: "PS5",
            id: "ps5"
        },
        precio: 1000
    },
    {
        id: "gt7",
        titulo: "Gran Turismo 7",
        imagen: "./img/games/gt7.png",
        categoria: {
            nombre: "PS5",
            id: "ps5"
        },
        precio: 1000
    },
    {
        id: "horizonfw",
        titulo: "Horizon: Forbidden West",
        imagen: "./img/games/horizonfw.png",
        categoria: {
            nombre: "PS5",
            id: "ps5"
        },
        precio: 1000
    },
    {
        id: "hades",
        titulo: "Hades",
        imagen: "./img/games/hades.png",
        categoria: {
            nombre: "PS5",
            id: "ps5"
        },
        precio: 1000
    },
    {
        id: "tloup1",
        titulo: "The Last of Us: Part 1",
        imagen: "./img/games/tloup1.jpg",
        categoria: {
            nombre: "PS5",
            id: "ps5"
        },
        precio: 1000
    },
    // Xbox
    {
        id: "bones",
        titulo: "Skull and Bones",
        imagen: "./img/games/bones.jpg",
        categoria: {
            nombre: "Xbox",
            id: "xbox"
        },
        precio: 1000
    },
    {
        id: "callisto",
        titulo: "The Callisto Protocol",
        imagen: "./img/games/callisto.jpg",
        categoria: {
            nombre: "Xbox",
            id: "xbox"
        },
        precio: 1000
    },
    {
        id: "fifa23x",
        titulo: "FIFA23",
        imagen: "./img/games/fifa23x.jpg",
        categoria: {
            nombre: "Xbox",
            id: "xbox"
        },
        precio: 1000
    },
    {
        id: "forza",
        titulo: "Forza Horizon",
        imagen: "./img/games/forza.png",
        categoria: {
            nombre: "Xbox",
            id: "xbox"
        },
        precio: 1000
    },
    {
        id: "gotham",
        titulo: "Gotham Knight",
        imagen: "./img/games/gotham.png",
        categoria: {
            nombre: "Xbox",
            id: "xbox"
        },
        precio: 1000
    },
    {
        id: "sekiro",
        titulo: "Sekiro: Shadows Die Twice",
        imagen: "./img/games/sekiro.jpg",
        categoria: {
            nombre: "Xbox",
            id: "xbox"
        },
        precio: 1000
    },
    {
        id: "street",
        titulo: "Street Fighters 6",
        imagen: "./img/games/street.jpg",
        categoria: {
            nombre: "Xbox",
            id: "xbox"
        },
        precio: 1000
    },
    {
        id: "valhalla",
        titulo: "Assassins Creed: Valhalla",
        imagen: "./img/games/valhalla.jpg",
        categoria: {
            nombre: "Xbox",
            id: "xbox"
        },
        precio: 1000
    },
    // Nintendo
    {
        id: "poke_scarlet_violet",
        titulo: "Pokemón: Scarlet/Violet",
        imagen: "./img/games/poke_scarlet_violet.png",
        categoria: {
            nombre: "Nintendo",
            id: "nintendo"
        },
        precio: 1000
    },
    {
        id: "kirby",
        titulo: "Kirby and the ForgottenLand",
        imagen: "./img/games/kirby.jpg",
        categoria: {
            nombre: "Nintendo",
            id: "nintendo"
        },
        precio: 1000
    },
    {
        id: "hogwarts",
        titulo: "Hogwart Legacy",
        imagen: "./img/games/hogwarts.png",
        categoria: {
            nombre: "Nintendo",
            id: "nintendo"
        },
        precio: 1000
    },
    {
        id: "splatoon3",
        titulo: "Splatoon 3",
        imagen: "./img/games/Splatoon3.png",
        categoria: {
            nombre: "Nintendo",
            id: "nintendo"
        },
        precio: 1000
    },
    {
        id: "zelda",
        titulo: "lThe Legends of Zelda: Breath of the Wild",
        imagen: "./img/games/zelda.jpg",
        categoria: {
            nombre: "Nintendo",
            id: "nintendo"
        },
        precio: 1000
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    Toastify({
        text: ` ${productoAgregado.titulo} ha sido agregado con éxito`,
        duration: 3000, 
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: 'center', // `left`, `center` or `right`
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      }).showToast();
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

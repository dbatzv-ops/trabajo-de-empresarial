const productosNutriVital = [
    {
        id: "aceite-250",
        nombre: "Aceite de aguacate 250ml",
        descripcion: "Presentación práctica para probar NutriVital o usar en desayunos y ensaladas.",
        precio: "45.50",
        imagen: "img/a1.png",
        categoria: "botellas",
        etiqueta: "Ideal para empezar",
        beneficios: ["100% natural", "Rico en antioxidantes", "Uso diario"]
    },
    {
        id: "aceite-500",
        nombre: "Aceite de aguacate 500ml",
        descripcion: "El favorito para cocinar saludable durante la semana con sabor suave y natural.",
        precio: "89.99",
        imagen: "img/a2.png",
        categoria: "botellas",
        etiqueta: "Más vendido",
        beneficios: ["Producción artesanal", "Sin químicos", "Para toda la familia"]
    },
    {
        id: "aceite-1l",
        nombre: "Aceite de aguacate 1L",
        descripcion: "Formato amplio para cocina frecuente, restaurantes pequeños o preparación profesional.",
        precio: "149.99",
        imagen: "img/a3.png",
        categoria: "botellas",
        etiqueta: "Alto rendimiento",
        beneficios: ["Sabor intenso", "Presentación premium", "Cocina profesional"]
    },
    {
        id: "aceite-galon",
        nombre: "Aceite de aguacate 3.20L",
        descripcion: "Presentación grande para hogares que cocinan saludable todos los días.",
        precio: "249.95",
        imagen: "img/a3.png",
        categoria: "formato-grande",
        etiqueta: "Formato familiar",
        beneficios: ["Disponible", "Alto rendimiento", "Ideal para cocina familiar"]
    },
    {
        id: "aceite-spray",
        nombre: "Aceite de aguacate en spray 400g",
        descripcion: "Opción práctica para controlar porciones en sartén, ensaladas y recetas ligeras.",
        precio: "94.95",
        imagen: "img/a1.png",
        categoria: "formato-grande",
        etiqueta: "Práctico",
        beneficios: ["Disponible", "Uso rápido", "Control de porciones"]
    },
    {
        id: "caja-8-unidades",
        nombre: "Aceite de aguacate caja 8 unidades",
        descripcion: "Paquete para negocios, restaurantes pequeños o compras por volumen.",
        precio: "459.95",
        imagen: "img/a2.png",
        categoria: "mayoreo",
        etiqueta: "Mayoreo",
        beneficios: ["Disponible", "8 unidades", "Compra por volumen"]
    },
    {
        id: "caja-500ml",
        nombre: "Caja de aceite de aguacate 500ml",
        descripcion: "Caja de botellas NutriVital de 500ml para abastecer tu negocio o cocina familiar.",
        precio: "649.95",
        imagen: "img/a2.png",
        categoria: "mayoreo",
        etiqueta: "Caja 500ml",
        beneficios: ["Disponible", "Botellas de 500ml", "Ideal para mayoreo"]
    }
];

const contenedorProductos = document.getElementById("catalogoProductos");
const botonesFiltro = document.querySelectorAll(".catalogo_filter");
const catalogoTitulo = document.getElementById("catalogoTitulo");
const catalogoContador = document.getElementById("catalogoContador");

const titulosCategoria = {
    todos: "Todos los productos",
    botellas: "Botellas",
    "formato-grande": "Formato grande",
    mayoreo: "Mayoreo"
};

function cargarProductos(categoria = "todos") {
    const productosFiltrados = categoria === "todos"
        ? productosNutriVital
        : productosNutriVital.filter(producto => producto.categoria === categoria);

    catalogoTitulo.textContent = titulosCategoria[categoria];
    catalogoContador.textContent = `${productosFiltrados.length} productos disponibles`;

    contenedorProductos.innerHTML = productosFiltrados.map(producto => `
        <article class="producto">
            <div class="producto_img_box">
                <span>${producto.etiqueta}</span>
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>

            <div class="producto_info">
                <h3>${producto.nombre}</h3>
                <strong class="producto_estado">Disponible</strong>
                <p>${producto.descripcion}</p>

                <ul class="beneficios">
                    ${producto.beneficios.map(beneficio => `<li><i class="fa-solid fa-check"></i>${beneficio}</li>`).join("")}
                </ul>

                <div class="producto_footer">
                    <h2 class="precio">Q${producto.precio}</h2>
                    <button class="comprarBtn"
                        data-producto="${producto.nombre}"
                        data-precio="${producto.precio}"
                        data-imagen="${producto.imagen}">
                        Comprar
                    </button>
                </div>
            </div>
        </article>
    `).join("");

    actualizarBotonesCompra();
}

function actualizarBotonesCompra() {
    document.querySelectorAll(".comprarBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            localStorage.setItem("producto", btn.dataset.producto);
            localStorage.setItem("precio", btn.dataset.precio);
            localStorage.setItem("imagen", btn.dataset.imagen);

            window.location.href = "pago.html";
        });
    });
}

botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
        botonesFiltro.forEach(item => item.classList.remove("active"));
        boton.classList.add("active");
        cargarProductos(boton.dataset.categoria);
    });
});

cargarProductos();

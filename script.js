// Simulación de carrito de compras
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    actualizarCarrito();
}

// Función para actualizar el carrito en la página
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
    
    carrito.forEach((item, index) => {
        const p = document.createElement('p');
        p.textContent = `${item.producto} - $${item.precio.toFixed(2)}`;
        listaCarrito.appendChild(p);
    });
    
    const totalItems = carrito.length;
    document.querySelector('a[href="#carrito"]').textContent = `Carrito (${totalItems})`;
}

// Simulación de navegación a la sección de productos
function irAProductos() {
    window.location.href = "#productos";
}

// Finalizar compra (puede integrarse con un sistema de pago en el futuro)
document.getElementById('checkout').addEventListener('click', function() {
    if (carrito.length > 0) {
        alert('Compra finalizada. ¡Gracias por tu compra!');
        carrito = [];
        actualizarCarrito();
    } else {
        alert('Tu carrito está vacío.');
    }
});

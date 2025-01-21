document.addEventListener('DOMContentLoaded', function() {
    // Precios de los platos
    const precios = {
        hamburguesa: 10000,
        pizza: 15000,
        perro: 8000
    };

    let carrito = []; // Array para almacenar los items del carrito

    // Elementos del DOM
    const cartItemsList = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total');
    const realizarPedidoBtn = document.getElementById('realizar-pedido');
    const userInfoForm = document.getElementById('user-info');
    const enviarPedidoBtn = document.getElementById('enviar-pedido');
    const nombreInput = document.getElementById('nombre');
    const telefonoInput = document.getElementById('telefono');
    const direccionInput = document.getElementById('direccion');
    const modal = document.getElementById('carritoModal');
    const closeModalBtn = document.getElementById('close-modal');
    const openCartBtn = document.getElementById('open-cart');

    // Función para actualizar el carrito en la modal
    function actualizarCarrito() {
        cartItemsList.innerHTML = '';
        let total = 0;

        // Recorrer los productos en el carrito
        carrito.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.cantidad} x ${item.plato} - $${(precios[item.plato] * item.cantidad).toLocaleString()}`;
            cartItemsList.appendChild(li);
            total += precios[item.plato] * item.cantidad;
        });

        totalSpan.textContent = total.toLocaleString(); // Mostrar total con formato
    }

    // Función para agregar un plato al carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const plato = this.parentElement.getAttribute('data-id');
            const existingItem = carrito.find(item => item.plato === plato);

            if (existingItem) {
                existingItem.cantidad++;
            } else {
                carrito.push({ plato: plato, cantidad: 1 });
            }

            actualizarCarrito();
        });
    });

    // Mostrar modal (carrito)
    openCartBtn.addEventListener('click', function() {
        if (carrito.length === 0) {
            alert('No tienes productos en el carrito.');
            return;
        }
        modal.style.display = 'block'; // Mostrar el modal
    });

    // Cerrar el modal (carrito)
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Mostrar formulario de usuario (al dar clic en realizar pedido)
    realizarPedidoBtn.addEventListener('click', function() {
        userInfoForm.style.display = 'block';
    });

    // Función para enviar el pedido por WhatsApp
    enviarPedidoBtn.addEventListener('click', function() {
        const nombre = nombreInput.value.trim();
        const telefono = telefonoInput.value.trim();
        const direccion = direccionInput.value.trim();

        if (nombre === '' || telefono === '' || direccion === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        let mensaje = `Pedido de ${nombre}:\n`;
        carrito.forEach(item => {
            mensaje += `${item.cantidad} x ${item.plato} - $${(precios[item.plato] * item.cantidad).toLocaleString()}\n`;
        });
        mensaje += `\nTotal: $${totalSpan.textContent}\n`;
        mensaje += `Dirección: ${direccion}\nTeléfono: ${telefono}`;

        // Redirigir al usuario a WhatsApp con el mensaje
        const url = `https://wa.me/57315XXXXXXX?text=${encodeURIComponent(mensaje)}`;
        window.location.href = url;
    });
});

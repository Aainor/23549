const inputElement = document.getElementById('miInput');

inputElement.addEventListener('input', function() {

    let inputValue = inputElement.value;

    inputValue = inputValue.replace(/[^0-9]/g, '');

    const numericValue = parseInt(inputValue, 10);

    if (isNaN(numericValue) || numericValue < 0) {
        numericValue = 0;
    } else if (numericValue > 100) {
        numericValue = 100;
    }

    inputElement.value = numericValue;
});


document.addEventListener("DOMContentLoaded", function() {
    const miInputInput = document.getElementById("miInput");
    const descuentoSelect = document.getElementById("descuento");
    const calcularPrecioTotalButton = document.getElementById("calcularPrecioTotal");
    const precioTotalSpan = document.getElementById("precioTotal");
    const formulario = document.getElementById("ticketForm");
    const resumenButton = document.querySelector(".b-resumen");
    const modal = document.getElementById("modal");
    const confirmarBtn = document.getElementById("confirmar");
    const closeBtn = document.getElementById("close");
    const resumenNombre = document.getElementById("resumenNombre");
    const resumenApellido = document.getElementById("resumenApellido");
    const resumenCorreo = document.getElementById("resumenCorreo");
    const resumenCantidad = document.getElementById("resumenCantidad");
    const resumenCategoria = document.getElementById("resumenCategoria");

    resumenButton.addEventListener("click", function() {
        // Validar los datos antes de mostrar el cuadro de diálogo modal
        if (validarDatos()) {
          // Obtener los valores del formulario y llenar el resumen
      
          // Actualizar el precio total en el cuadro de diálogo modal
          const precioTotalModalSpan = document.getElementById("precioTotalModal");
          precioTotalModalSpan.textContent = precioTotal.toFixed(2); // Actualizar el precio total en el cuadro de diálogo modal
      
          // Mostrar el cuadro de diálogo modal
          modal.style.display = "block";
        }
      });
  
    calcularPrecioTotalButton.addEventListener("click", function() {
      const miInput = parseInt(miInputInput.value);
      const descuento = descuentoSelect.value;
      let precioUnitario = 200;  // Precio sin descuento por ticket
  
      // Aplicar descuento según la categoría
      if (descuento === "1") {
        precioUnitario *= 0.2; // 80% de descuento
      } else if (descuento === "2") {
        precioUnitario *= 0.5; // 50% de descuento
      } else if (descuento === "3") {
        precioUnitario *= 0.85; // 15% de descuento
      }
  
      // Calcular el precio total
      const precioTotal = miInput * precioUnitario;
  
      // Mostrar el precio total en el elemento HTML
      precioTotalSpan.textContent = precioTotal.toFixed(2); // Redondear a 2 decimales
    });

    calcularPrecioTotalButton.addEventListener("click", function() {
        // ... (Código para calcular el precio total) ...
      });
    
      // Agregar un evento al botón "Reset" para borrar el valor del precio total
      formulario.addEventListener("reset", function() {
        precioTotalSpan.textContent = "0.00"; // Restablecer el valor
      });

  resumenButton.addEventListener("click", function() {
    // Obtener los valores del formulario
    const nombre = document.querySelector(".t-nombre").value;
    const apellido = document.querySelector(".t-apellido").value;
    const correo = document.querySelector(".t-correo").value;
    const cantidad = document.getElementById("miInput").value;
    const categoria = document.querySelector(".t-categoria").value;

    // Llenar los campos del resumen en el cuadro de diálogo modal
    resumenNombre.textContent = nombre;
    resumenApellido.textContent = apellido;
    resumenCorreo.textContent = correo;
    resumenCantidad.textContent = cantidad;
    
    const categoriaOptions = document.querySelector(".t-categoria").options;
    const categoriaSelected = categoriaOptions[categoria - 1].text;
    resumenCategoria.textContent = categoriaSelected;

    // Mostrar el cuadro de diálogo modal
    modal.style.display = "block";
  });

  confirmarBtn.addEventListener("click", function() {
    // Aquí puedes realizar acciones para confirmar la compra
    modal.style.display = "none";
  });

  closeBtn.addEventListener("click", function() {
    // Cerrar el cuadro de diálogo modal
    modal.style.display = "none";
  });

});


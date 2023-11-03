const inputElement = document.getElementById('miInput');

inputElement.addEventListener('input', function() {
    // Obtén el valor actual del input
    let inputValue = inputElement.value;

    // Reemplaza cualquier letra o símbolo no numérico con una cadena vacía
    inputValue = inputValue.replace(/[^0-9]/g, '');

    // Convierte el valor a un número entero
    const numericValue = parseInt(inputValue, 10);

    // Asegúrate de que el valor esté dentro del rango de 0 a 100
    if (isNaN(numericValue) || numericValue < 0) {
        numericValue = 0;
    } else if (numericValue > 100) {
        numericValue = 100;
    }

    // Actualiza el valor del input con el valor procesado
    inputElement.value = numericValue;
});


function verificarFormulario() {
  const nombreInput = document.querySelector(".t-nombre");
  const apellidoInput = document.querySelector(".t-apellido");
  const correoInput = document.querySelector(".t-correo");
  const cantidadInput = document.getElementById("miInput");
  const categoriaSelect = document.getElementById("descuento");

  const formularioCompleto =
    nombreInput.value.trim() !== "" &&
    apellidoInput.value.trim() !== "" &&
    correoInput.value.trim() !== "" &&
    cantidadInput.value !== "" &&
    categoriaSelect.value !== "";

  return formularioCompleto;
}


document.addEventListener("DOMContentLoaded", function() {
  const miInputInput = document.getElementById("miInput");
  const descuentoSelect = document.getElementById("descuento");
  const calcularPrecioTotalButton = document.getElementById("calcularPrecioTotal");
  const precioTotalSpan = document.getElementById("precioTotal");
  const formulario = document.getElementById("ticketForm");

  formulario.addEventListener("input", function() {
    calcularPrecioTotalButton.disabled = !verificarFormulario();
  });

  calcularPrecioTotalButton.addEventListener("click", function() {
    if (verificarFormulario()) {
      // El formulario está completo, realiza el cálculo
      const miInput = parseInt(miInputInput.value);
      const descuento = descuentoSelect.value;
      let precioUnitario = 200;

      // Aplicar descuento según la categoría
      if (descuento === "2") {
        precioUnitario *= 0.2; // 80% de descuento
      } else if (descuento === "3") {
        precioUnitario *= 0.5; // 50% de descuento
      } else if (descuento === "4") {
        precioUnitario *= 0.85; // 15% de descuento
      }

      // Calcular el precio total
      const precioTotal = miInput * precioUnitario;

      // Mostrar el precio total en el elemento HTML
      precioTotalSpan.textContent = precioTotal.toFixed(2); // Redondear a 2 decimales
    } else {
      alert("Por favor, complete todos los campos obligatorios.");
    }
  });

  formulario.addEventListener("reset", function() {
    precioTotalSpan.textContent = "0.00"; // Restablecer el valor
    calcularPrecioTotalButton.disabled = true; // Deshabilitar el botón
  });
});




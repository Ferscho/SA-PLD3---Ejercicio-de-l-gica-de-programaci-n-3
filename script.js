function calcularFactorial() {
      let entrada = document.getElementById("numero").value;
      let numero = Number(entrada);

      // Validación
      if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
        alert("❌ Error: Ingresa un número entero positivo.");
        document.getElementById("resultado").textContent = "";
        return;
      }

      // Cálculo del factorial
      let factorial = 1;
      for (let i = 1; i <= numero; i++) {
        factorial *= i;
      }

      // Mostrar el resultado
      document.getElementById("resultado").textContent = `El factorial de ${numero} es: ${factorial}`;   
    }

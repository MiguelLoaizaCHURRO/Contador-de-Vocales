function contarVocales() {
    // Obtiene la frase ingresada y la convierte a minúsculas para simplificar el conteo
    const frase = document.getElementById('frase').value.toLowerCase();
    // Arreglo con las vocales para validar si cada letra es una vocal
    const vocales = ['a', 'e', 'i', 'o', 'u'];

    // Contadores individuales para cada vocal
    let contadorA = 0;
    let contadorE = 0;
    let contadorI = 0;
    let contadorO = 0;
    let contadorU = 0;

    // Recorre cada letra de la frase
    for (let i = 0; i < frase.length; i++) {
        // Verifica si la letra actual es una vocal
        if (vocales.includes(frase[i])) {
            // Usa un switch para incrementar el contador correspondiente según la vocal encontrada
            switch (frase[i]) {
                case 'a': contadorA++; break;
                case 'e': contadorE++; break;
                case 'i': contadorI++; break;
                case 'o': contadorO++; break;
                case 'u': contadorU++; break;
            }
        }
    }

    // Calcula el total de vocales sumando los contadores individuales
    const totalVocales = contadorA + contadorE + contadorI + contadorO + contadorU;
    let resultado = ""; // Variable para almacenar el mensaje de resultado

    // Verifica si se encontraron vocales en la frase
    if (totalVocales > 0) {
        // Genera el mensaje de resultado con el conteo de cada vocal
        resultado = `La frase contiene un total de ${totalVocales} vocales:\n`;
        resultado += `A: ${contadorA}\nE: ${contadorE}\nI: ${contadorI}\nO: ${contadorO}\nU: ${contadorU}`;
    } else {
        // Mensaje en caso de que no se encuentren vocales en la frase
        resultado = "No se encontraron vocales en la frase.";
    }

    // Muestra el mensaje en el elemento HTML con id="resultado"
    document.getElementById('resultado').innerText = resultado;
}

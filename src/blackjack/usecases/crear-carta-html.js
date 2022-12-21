
/**
 * Devuelve un elemento HTML para ser renderizado
 * @param {String} carta 
 * @returns {HTMLImagenElement} imagen de retorno
 */
export const crearCartaHTML = (carta) => {
    if (!carta) throw new Error('La carta es un argumento obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}
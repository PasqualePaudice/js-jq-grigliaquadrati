// Creare in HTML una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi
// Suggerimento: usare una classe per individuare quali quadratini diventano rossi
// BONUS: generare la griglia dei quadratini utilizzando jQuery


$(document).ready(function() {

    // creo un array di 15 numeri random tutti diversi compresi tra 1 e 64
    // predispongo un array che conterrà i 15 numeri
    var posizioni_quadrati_rossi = [];

    do {
        // genero un numero casuale tra 1 e 64
        var random_position = randomNumber(1,64);
        if(!posizioni_quadrati_rossi.includes(random_position)) {
            // se questo numero non è già presente nell'array delle posizioni, lo aggiungo
            posizioni_quadrati_rossi.push(random_position);
        }
        // continuo a ciclare finché nell'array delle posizioni non ci sono 15 elementi (tutti diversi)
    } while(posizioni_quadrati_rossi.length < 15);

    // questi 15 numeri sono le posizioni dei quadrati rossi
    console.log(posizioni_quadrati_rossi);


    var elemento_quadrato = '<div class="quadrato"></div>';
    var elemento_quadrato_rosso = '<div class="quadrato divento-rosso"></div>';

    for (var i = 1; i <= 64; i++) {
        // quando sto ciclando per appendere i quadrati
        // vado a vedere se quello che sto appendendo deve essere rosso
        if(posizioni_quadrati_rossi.includes(i)) {
            // questo quadrato deve essere rosso
            $('#scacchiera').append(elemento_quadrato_rosso);
        } else {
            // questo quadrato deve essere verde
            $('#scacchiera').append(elemento_quadrato);
        }
    }


    // intercetto il click sul quadratino
    $('.quadrato').click(function(){
        // verifico se il quadratino ha la classe divento-rosso:
        if($(this).hasClass('divento-rosso')) {
            // se ce l'ha, aggiungo la classe rosso (che assegna il colore di sfondo rosso)
            $(this).addClass('rosso');
        } else {
            // altrimenti, se non ce l'ha, aggiungo la classe verde (che assegna il colore di sfondo verde)
            $(this).addClass('verde');
        }
    
    });

});

function randomNumber(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
}

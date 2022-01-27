console.log('Vue ok', Vue);
Vue.config.devtools = true;

/* 
TRACCIA:

Partendo dal markup fornito in allegato, implementare la logica per far funzionare lo slider:
Deve essere possibile scorrere le immagini cliccando sulle freccette.
I pallini in basso devono illuminarsi in base all'immagine che sto visualizzando.
Far si che cliccando i pallini, venga selezionata l'immagine corrispondente.

Note:  
scegliamo una delle due seguenti soluzioni per le freccette;
Se stiamo visualizzando la prima immagine, la freccetta di sinistra può:
a- scomparire
b- passare all'ultima immagine
Se stiamo visualizzando l'ultima immagine, la freccetta  a destra può:
scomparire
c- passare alla prima immagine

Siate coerenti: o scompaiono o continuano a navigare, no a soluzioni miste!!

Bonus:
1- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
2- quando il mouse va in hover sulle freccette o sui pallini l'autoplay si interrompe
3 - l'autoplay riparte quando il mouse lascia le freccette o i pallini

Regola d'oro: il riciclo spesso va a braccetto coi methods!
*/

// # creo un array Vue collegato al DOM
const app = new Vue({
    el: '#root',
    data: {
        // Setto il currentindex per tenere traccia dell'immagine corrente visualizzata in pagina
        currentIndex: 0,
        // Aggiungo le immagini
        images: [
            'images/image1.jpg',
            'images/image2.jpg',
            'images/image3.jpg',
            'images/image4.jpg',
        ]
    },
    methods: {

    },
});
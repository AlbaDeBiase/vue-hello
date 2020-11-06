// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// BONUS: Aggiungere un’immagine presa anch’essa da un data
// Nome repo: vue-hello


var app = new Vue(
    {
        el: '#container',
        data: {
            testo: 'Ce la faremo!!',
            titolo: 'verde',
            image: 'https://memegenerator.net/img/instances/80672268/tieni-duro.jpg'
    },
    methods: {
            cambiaColore() {
                if(this.titolo == 'pink') {
                    // se il colore attuale è rosso => lo imposto a blu
                    this.titolo = 'verde';
                } else {
                    // se il colore attuale è blu => lo imposto a rosso
                    this.titolo = 'pink';
                }
            }
        }
    }
);

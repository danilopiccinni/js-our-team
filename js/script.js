/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
*/

// creo un array che ragruppi i membri del team
let membriTeam = [
    {
        nome : 'Wayne Barnett',
        ruolo : 'Founder & CEO',
        foto : 'wayne-barnett-founder-ceo.jpg',
    },

    {
        nome : 'Angela Caroll',
        ruolo : 'Chief Editor',
        foto : 'angela-caroll-chief-editor.jpg',
    },

    {
        nome : 'Walter Gordon',
        ruolo : 'Office Manager',
        foto : 'walter-gordon-office-manager.jpg',
    },

    {
        nome : 'Angela Lopez',
        ruolo : 'Social Media Manager',
        foto : 'angela-lopez-social-media-manager.jpg',
    },

    {
        nome : 'Scott Estrada',
        ruolo : 'Developer',
        foto : 'scott-estrada-developer.jpg',
    },

    {
        nome : 'Barbara Ramos',
        ruolo : 'Graphic Designer',
        foto : 'barbara-ramos-graphic-designer.jpg',
    },

    
]

// let membro = creacard(membriTeam)


// fa apparire con un ciclo for-in i dati di ciascun membro in consol
for (let chiave in membriTeam) {

    console.log(membriTeam[chiave].nome)
    console.log(membriTeam[chiave].ruolo)
    console.log(membriTeam[chiave].foto)
    console.log('-------------------')

}



// bersaglio l'elemento in pagina da usare come output per poi appenderci i membri da far comparire in pagina
let listaMembriEl = document.getElementById ('lista-membri')

for (let i  in membriTeam) {
    // crea l'elemento 'li
    let membro = document.createElement ('li')

// dati vari stili all'elemento prima creato 
    // allineamento testo
    membro.style.textAlign = 'center'
    // la misura massima che della largezza ( in questo caso optato per adattarsi alla foto)
    membro.style.width = 'fit-content'
    // sfondo
    membro.style.backgroundColor = 'rgba(128, 128, 128, 0.364)'
    // tolto il marcatore creato in automatico essendo un 'li'
    membro.style.listStyleType = 'none'

    // appendiamo l'elemento 'li' creato all'elemento che vogliamo usare come output in pagina
    listaMembriEl.append(membro)

        //sezione foto nel 'li'
        // crea un div dedicato a contenere successivamente l'immagine assegnandolo a una variabile
    let contFoto = document.createElement ('div')
        // assegna all'elemento creato un contenuto HTML per un immagine richiamando al suo interno il valore della foto del membro 
    contFoto.innerHTML = '<img src="./img/'+ membriTeam[i].foto + '"alt="">'
        // appende quest'ultimo al 'li'
    membro.append(contFoto)

        // sezione nome nel 'li'
        // crea un div dedicato a contenere il nome del membro assegnandolo a una variabile
    let nome =document.createElement ('div')
        // assegna al suo interno (innerTEXT) il valore 'nome' del membro 
    nome.innerText=membriTeam[i].nome
        // appendiamo quest'ultimo al 'li'
    membro.append(nome)

        // ruolo nel 'li'
        // crea un div dedicato a contenere il ruolo del membro assegnandolo a una variabile
    let ruolo = document.createElement('div')
        // assegna al suo interno (innerTEXT) il valore 'ruolo' del membro 
    ruolo.innerText = membriTeam[i].ruolo
        // appendiamo quest'ultimo al 'li'
    membro.append(ruolo)
}







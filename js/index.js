
const errou =document.getElementById ('errou')
const pfizer =document.getElementById ('pfizer')
const cavalo =document.getElementById ('cavalo')
const porco =document.getElementById ('porco')
const rapaz =document.getElementById ('rapaz')
const vaiResponder =document.getElementById('responder')
const freeza = document.getElementById('freeza')
const giovani =document.getElementById('giovani')

const errouAudio = new Audio ('./songs/errou.mp3')
const pfizerAudio = new Audio ('./songs/pfizer.mp3')
const cavaloAudio = new Audio ('./songs/cavalo.mp3')
const porcoAranhaAudio = new Audio ('./songs/porcoAranha.mp3')
const rapazAudio = new Audio ('./songs/rapaz.mp4')
const vaiResponderAudio = new Audio ('./songs/vai responder não.mp3')
const freezaAudio = new Audio('./songs/freeza.mp3')
const giovaniAudio = new Audio('./songs/giovani.mp4')

errou.addEventListener('click', ()=>{
    errouAudio.play()
});

pfizer.addEventListener('click', ()=>{
    pfizerAudio.play()
});

cavalo.addEventListener('click', ()=>{
    cavaloAudio.play() 
});

porco.addEventListener('click', ()=>{
    porcoAranhaAudio.play();
});

rapaz.addEventListener('click', ()=>{
    rapazAudio.play();
});

vaiResponder.addEventListener('click',()=>{
    vaiResponderAudio.play();
});

freeza.addEventListener('click',()=>{
    freezaAudio.play();
});

giovani.addEventListener('click',()=>{
    giovaniAudio.play();
});
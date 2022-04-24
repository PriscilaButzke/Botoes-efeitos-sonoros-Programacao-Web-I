
const errou =document.getElementById ('errou')
const sirene =document.getElementById ('sirene')
const cavalo =document.getElementById ('cavalo')
const porco =document.getElementById ('porco')
const rapaz =document.getElementById ('rapaz')
const errouAudio = new Audio ('./songs/errou.mp3')
const sireneAudio = new Audio ('./songs/sirene.mp3')
const cavaloAudio = new Audio ('./songs/cavalo.mp3')
const porcoAranhaAudio = new Audio ('./songs/porcoAranha.mp3')
const rapazAudio = new Audio ('./songs/rapaz.mp4')

errou.addEventListener('click', ()=>{
    errouAudio.play()
});

sirene.addEventListener('click', ()=>{
    sireneAudio.play()
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

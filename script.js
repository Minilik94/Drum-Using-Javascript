const audios = document.querySelectorAll('audio')
const pressedKeys = document.querySelectorAll('.key')
let numKeys
let currentKey
let currentAudio
window.addEventListener('keydown', (event) => {
   numKeys = event.keyCode
 let  numKey = numKeys.toString()

 pressedKeys.forEach(key=>{
    currentKey = key.getAttribute('data-key')
    if(numKey === currentKey){
        audios.forEach(audio => {
            currentAudio = audio.getAttribute('data-key')
            if(currentKey === currentAudio){
                key.classList.add('playing')
                audio.currentTime = 0
                audio.play()
            }
        })
    }
 })
})

window.addEventListener('keyup', (event)=>{
    numKeys = event.keyCode
    let numKey = numKeys.toString()
    
    pressedKeys.forEach(key =>{
        currentKey = key.getAttribute('data-key')
        if(currentKey === numKey) key.classList.remove('playing')
    })

})
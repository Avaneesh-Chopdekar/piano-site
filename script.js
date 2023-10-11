const ALL_KEYS = [];
const pianoKeys = document.querySelectorAll('.piano-keys .key')
const volumeSlider = document.querySelector('.volume-slider input')
const keysCheckbox = document.querySelector('.keys-checkbox input')
const audioTags = document.querySelectorAll('audio')

pianoKeys.forEach(key => {
    ALL_KEYS.push(key.dataset.key)
    key.addEventListener('click', () => playTune(key.dataset.key))
})

function playTune(key) {
    const audio = document.getElementById(key)
    audio.currentTime = 0
    audio.play()
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add('active')
    setTimeout(() => {
        clickedKey.classList.remove('active')
    }, 150);

}

function pressedKey(e) {
    if (e.repeat) return
    if (ALL_KEYS.includes(e.key.toLowerCase())) playTune(e.key.toLowerCase())
}

function handleVolume(e) {
    audioTags.forEach(audio => {
        audio.volume = e.target.value
    })
}

function toggleKeys(e) {
    pianoKeys.forEach(key => key.classList.toggle('hide'))
}

keysCheckbox.addEventListener('click', toggleKeys)
volumeSlider.addEventListener('input', handleVolume)
document.addEventListener('keydown', pressedKey)
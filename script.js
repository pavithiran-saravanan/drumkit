const keys = document.querySelectorAll(".key");

function animateKey(e){
    // Select the node that matches with pressed key
    const selectedKey = document.querySelector(`div[data-key = ${e.code}]`);
    if(selectedKey){
        const audio = document.querySelector(`audio[data-key = ${e.code}]`);
        audio.currentTime = 0;
        audio.play();
        selectedKey.classList.add('pressed');
    }
}

function reverseAnimateKey(e){
    const selectedKey = document.querySelector(`div[data-key = ${e.code}]`);
    if(selectedKey){
        selectedKey.classList.remove('pressed');
    }
}

// Add event listener to catch keydown
window.addEventListener('keydown', animateKey);
window.addEventListener('keyup', reverseAnimateKey);
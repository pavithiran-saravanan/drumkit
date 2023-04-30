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

function clickHandler(e){
    if(!this.contains(e.target)) return;
    const sound = document.querySelector(`audio[data-key = ${this.getAttribute('data-key')}]`);
    this.classList.add('tapped');
    if(sound){
        sound.currentTime = 0;
        sound.play();
    }
}

function bounceBack(e){
    this.classList.remove('tapped');
}

function bounceBackAll(e){
    keys.forEach((key)=>{
        if(key.classList.contains('tapped')) key.classList.remove('tapped');
    });
}

keys.forEach((key) => {
    key.addEventListener('mousedown', clickHandler);
    key.addEventListener('mouseup', bounceBack);
})

// Add event listener to catch keydown
window.addEventListener('keydown', animateKey);
window.addEventListener('keyup', reverseAnimateKey);
window.addEventListener('mouseup', bounceBackAll);
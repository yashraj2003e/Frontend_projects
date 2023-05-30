class DrumKit {
    constructor() {
        this.pads = document.querySelectorAll(".pad");
        this.playBtn = document.querySelector(".play");
        this.kickAudio = document.querySelector('.kick-sound');
        this.snareAudio = document.querySelector('.snare-sound');
        this.hihatAudio = document.querySelector('.hihat-sound');
        this.index = 0;
        this.bpm = 150;
        this.currentKick = './sounds/kick-classic.wav'
        this.currentSnare = './sounds/snare-acoustic01.wav'
        this.currentHihat = './sounds/hihat-acoustic01.wav'
        this.isPlaying = null;
        this.selects = document.querySelectorAll("select");
        this.muteBtn = document.querySelectorAll(".mute");
        this.tempoSlider = document.querySelector(".tempo");
        this.tempobpm = document.querySelector(".tempo-nr");
    }

    activePad() {
        this.classList.toggle("active");
    }

    repeat() {

        let step = this.index % 8;
        // console.log(step);
        const activeBars = document.querySelectorAll(`.b${step}`);
        // console.log(activeBars);
        activeBars.forEach(bar => {
            bar.style.animation=`playTrack 0.3s alternate ease-in-out 2`;
            if(bar.classList.contains('active')) {
                if(bar.classList.contains('kick-pad')) {
                    this.kickAudio.currentTime = 0;
                    this.kickAudio.play();
                }
                if(bar.classList.contains('snare-pad')) {
                    this.snareAudio.currentTime = 0;
                    this.snareAudio.play();
                }
                if(bar.classList.contains('hihat-pad')) {
                    this.hihatAudio.currentTime = 0;
                    this.hihatAudio.play();
                }
            }
        });
        this.index++;
    }



    reset1() {
        this.index = 0;
    }

    start() {
        // console.log(this);
        const interval = (60/this.bpm)*1000;
        if(!this.isPlaying) {
            this.isPlaying = setInterval(() => {
                this.repeat();
            },interval)
        }
        else {
            clearInterval(this.isPlaying);
            this.isPlaying = null;
            // this.reset1();
        }
    }

    changeSound(e) {
        const soundTarget = e.target.name;
        const soundValue = e.target.value;
        switch(soundTarget) {
            case "kick-select":
                this.kickAudio.src = soundValue;
                break;
            case "snare-select":
                this.snareAudio.src = soundValue;
                break;
            case "hihat-select":
                this.hihatAudio.src = soundValue;
                break;
        }
    }

    mute(e) {
        const track = e.target;
        console.log(track);
        const trackval = e.target.getAttribute("data-track");
        track.classList.toggle("active");
        if(track.classList.contains("active")) {
            switch(trackval) {
                case "0":
                    this.kickAudio.volume = 0;
                    break;
                case "1":
                    this.snareAudio.volume = 0;
                    break;
                case "2":
                    this.hihatAudio.volume = 0;
                    break;
            }
        }
        else {
            switch(trackval) {
                case "0":
                    this.kickAudio.volume = 1;
                    break;
                case "1":
                    this.snareAudio.volume = 1;
                    break;
                case "2":
                    this.hihatAudio.volume = 1;
                    break;
            }
        }
    }

    changeTempo(e) {
        this.bpm = e.target.value;
        this.tempobpm.innerText = e.target.value;
    }

    updateTempo(e) {
        clearInterval(this.isPlaying);
        this.isPlaying = null;
        if(this.playBtn.innerText!=="Play") {
            this.start();
            this.playBtn.innerText="Stop";
        }
    }

}

const tl = gsap.timeline();

tl.fromTo(".sequener",{y:-1000,opacity:0,rotation:"360",overflow:"hidden"},{y:0,opacity:1,rotation:"0",ease:"elastic-in",duration:0.8,overflow:"hidden"});
tl.fromTo(".play",{y:-1000,opacity:0,rotation:"360",overflow:"hidden"},{y:0,opacity:1,rotation:"0",ease:"elastic-in",duration:0.8,overflow:"hidden"},">");
tl.fromTo(".tempo",{y:1000,opacity:0,overflow:"hidden"},{y:0,opacity:1,ease:"elastic-in",duration:0.8,overflow:"hidden"},">");


let drum = new DrumKit();

drum.pads.forEach(pad => {
    pad.addEventListener('click',drum.activePad);
    pad.addEventListener('animationend',function() {
        pad.style.animation = "";
    });
});

drum.playBtn.addEventListener("click",function(){
    drum.start();
    if(drum.playBtn.innerText!="Stop") {
        drum.playBtn.innerText = "Stop";
    }
    else {
        drum.playBtn.innerText = "Play";
    }
});

drum.selects.forEach(select => {
    select.addEventListener("change",(e) => {
        drum.changeSound(e);
    })
})

drum.muteBtn.forEach(mutebtn => {
    mutebtn.addEventListener("click",(e) => {
        drum.mute(e);
    })
})


drum.tempoSlider.addEventListener("input",(e) => {
    drum.changeTempo(e);
})

drum.tempoSlider.addEventListener("change",(e) => {
    drum.updateTempo(e);
})
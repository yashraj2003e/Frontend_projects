class DrumKit {
    constructor() {
        this.pads = document.querySelectorAll(".pad");
        this.playBtn = document.querySelector(".play");
        this.kickAudio = document.querySelector('.kick-sound');
        this.snareAudio = document.querySelector('.snare-sound');
        this.hihatAudio = document.querySelector('.hihat-sound');
        this.index = 0;
        this.bpm = 150;
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

    start() {
        // console.log(this);
        const interval = (60/this.bpm)*1000;
        setInterval(() => {
            this.repeat();
        },interval)
    }
}

let drum = new DrumKit();

drum.pads.forEach(pad => {
    pad.addEventListener('click',drum.activePad);
    pad.addEventListener('animationend',function() {
        pad.style.animation = "";
    });
});

drum.playBtn.addEventListener("click",function(){
    drum.start();
});
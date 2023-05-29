class DrumKit {
    constructor() {
        this.pads = document.querySelectorAll(".pad");
        this.playBtn = document.querySelector(".play");
        this.kickAudio = document.querySelectorAll('.kick-sound');
        this.snareAudio = document.querySelectorAll('.snare-sound');
        this.hihatAudio = document.querySelectorAll('.hihat-sound');
        this.index = 0;
        this.bpm = 150;
    }

    repeat() {
        let step = this.index % 8;
        // console.log(step);
        const activeBars = document.querySelectorAll(`.b${step}`);
        console.log(activeBars);
        this.index++;
    }

    start() {
        const interval = (60/this.bpm)*1000;
        setInterval(() => {
            this.repeat();
        },interval)
    }
}

let drum = new DrumKit();

drum.pads.forEach(pad => {
    pad.addEventListener('click',drum.activePad);
})

drum.playBtn.addEventListener("click",() => {
    drum.start();
})
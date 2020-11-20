
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

const changeColor = {
    timerId: null,
    changeHappens: false,

    randomIntegerFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    startChangeColor() {
        if (this.changeHappens) { return };
        this.changeHappens = true;

        this.timerId = setInterval(() => {
            document.body.style.backgroundColor = colors[this.randomIntegerFromInterval(0, 5)];
        }, 1000);
    },
    
    stopChangeColor() {
        this.changeHappens = false;
        clearInterval(this.timerId);
        this.timerId = null;
    },
};

startBtn.addEventListener('click', changeColor.startChangeColor.bind(changeColor));
stopBtn.addEventListener('click', changeColor.stopChangeColor.bind(changeColor));



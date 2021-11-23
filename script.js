const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breathTime = (totalTime/5) * 2;
const holdTime = totalTime/5;

const breatheAnimation = () => {
    // container.classList.add('grow');
    container.className = 'container grow';
    text.innerText = 'Breathe In!';
    setTimeout(() => {
        text.innerText = 'Hold';
        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            // container.classList.remove('grow');
            // container.classList.add('shrink');
            container.className = 'container shrink';
        }, holdTime)
    }, breathTime)
};

breatheAnimation();

// setInterval(() => {
//     container.classList.remove('shrink')
//     breatheAnimation();
// },totalTime)

setInterval(breatheAnimation,totalTime)
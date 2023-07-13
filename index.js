const gameBoard = document.querySelector('.game-board');
const score = document.querySelector('.score');
const scoreCol = document.querySelector('.score-col');
const plits = new Array(150).fill("");

let newPlits = [];
const colClickPlit = [];

const userSelectedTime = prompt('Сколько времени вы желаете играть? 1 секунда равна 1000');

const plitClick = (plit) => {
    if (colClickPlit.includes(plit) === false) {
        colClickPlit.push(plit)
    }
}

for (let i = 0; i < plits.length; i++) {
    const plit = document.createElement('div');
    plit.className = `plit plit${i}`;
    gameBoard.append(plit);
    plit.addEventListener('click', () => {
        plitClick(i)
    })
    newPlits.push(plit);
};

const intervalPlit = setInterval(() => {
    const randomSize = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
    const randomNum = Math.floor(Math.random() * (150 - 1 + 1)) + 1;
    newPlits[randomNum].style.visibility = 'visible';
    newPlits[randomNum].style.backgroundColor = '#0867CC';
    newPlits[randomNum].style.width = `${randomSize}px`;
    newPlits[randomNum].style.height = `${randomSize}px`;
    if (randomNum) {
        setInterval(() => {
            newPlits[randomNum].style.display = 'none'
        }, 500);
    }
}, 500);
setTimeout(() => {
    clearInterval(intervalPlit)
    scoreCol.textContent = colClickPlit.length
    score.style.display = 'block';
}, userSelectedTime);
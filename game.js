const game = () =>{
    let pScore = 0;
    let cScore = 0;

    const startGame = ()=>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add('FadeOut');
            match.classList.add('fadeIn');
        });
    };

    const playMatch = () =>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        
        const computerOptions = ['Rock','Paper','Scissors'];

        const computerNumber = Math.random() * 3;
        console.log(computerNumber);
    }

    startGame();
    playMatch();
};

game();

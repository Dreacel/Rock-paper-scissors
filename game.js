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

        options.forEach(options=>{
            options.addEventListener('click', function(){

               const computerNumber = Math.floor(Math.random() * 3);
               const computerChoice = computerOptions[computerNumber]
               
            });
        });

    }

    startGame();
    playMatch();
};

game();

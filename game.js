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
               const computerChoice = computerOptions[computerNumber];

               comparehands(this.textContent, computerChoice);

               playerHand.src = `./asset/${this.textContent}.png`;
               computerHand.src = `./asset/${computerChoice}.png`;
            });
        });
    }

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent =cScore;
    }

    const comparehands = (playerChoice, computerChoice) =>{
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }

        if(playerChoice === 'Rock') {
            if(computerChoice === 'Scissors'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }  

        if(playerChoice === 'Paper'){
            if(computerChoice === 'Scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'Scissors'){
            if(computerChoice === 'Rock'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }


    }

    startGame();
    playMatch();
};

game();

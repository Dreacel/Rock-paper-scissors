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


               playerHand.src = `./asset/${this.textContent}.png`;
               computerHand.src = `./asset/${computerChoice}.png`;
            });
        });
    }

    const comparehands = (playerChoice, computerChoice) =>{
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }

        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                return;
            }else{
                winner.textContent = 'Computer Wins';
                return;
            }
        }  

        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                return;
            }else{
                winner.textContent = 'Player Wins';
                return;
            }
        }

        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins';
                return;
            }else{
                winner.textContent = 'Player Wins';
                return;
            }
        }


    }

    startGame();
    playMatch();
};

game();

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput =='bomb' || userInput=='rock' || userInput=='paper' || userInput=='scissors'){
        return userInput;
    }else{
        console.log('Invalid input.')
    }
};
 
const getComputerChoice = ()=>{
    let random = Math.floor(Math.random() * 3);
    switch(random){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;;        
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice==computerChoice){
        return "The game was a tie.";
    }
    if(userChoice=='rock'){
        if(computerChoice=='paper'){
            return "The Computer Won!";
        }else{
            return "You Won!";
        }
    }
    if(userChoice=='bomb'){
        return "You won!";
    }

    if(userChoice=='paper'){
        if(computerChoice=='scissors'){
            return "The Computer Won!";
        }else{
            return "You Won!";
        }
    }

    if(userChoice=='scissors'){
        if(computerChoice=='rock'){
            return "The Computer Won!";
        }else{
            return "You Won!";
        }
    }
};

const playGame = () =>{
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    
    console.log(`Your choice: ${userChoice}.`);
    console.log(`Computer's choice: ${computerChoice}.`);

    console.log(determineWinner(userChoice, computerChoice));
};
playGame();
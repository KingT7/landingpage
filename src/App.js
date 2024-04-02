
import "./App.css";
import {useState} from 'react';
import rock from './photos/rock.png'
import paper from './photos/paper.png'
import scissors from './photos/scissors.png'
import rps from './photos/rps.png'

function App() {

  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);


  const getComputerChoice = () => {

  const choices = ['rock', 'paper', 'scissors'];
   const randomChoice = Math.floor(Math.random() * choices.length);

   return choices[randomChoice];
    
  }

  function playRound(playerSelection) {
    let result = '';
    const computerSelection = getComputerChoice(); 

    if (playerSelection === computerSelection) { 
      result = 'Nobody wins....It\'s a tie!'; 
  } else if ( 
      (playerSelection === "rock" && computerSelection === "scissors") || 
      (playerSelection === "scissors" && computerSelection === "paper") || 
      (playerSelection === "paper" && computerSelection === "rock") 
  ) { 
      result = 'You Win!'; 
      setPlayerWins(playerWins + 1);
  } else { 
      result = 'Computer wins!'; 
      setComputerWins(computerWins + 1);
  }

  document.getElementById('result').innerText = result;

 checkWinner();

return result;

}

const checkWinner = () => {
  if (playerWins === 5) {
    alert('You won the game!');
    resetGame();
  } else if (computerWins === 5) {
    alert('Computer won the game!');
    resetGame();
  }
}

  
  
const handleRockClick = () => {
  playRound('rock');
}

const handlePaperClick = () => {
  playRound('paper');
}

const handleScissorsClick = () => {
  playRound('scissors');
}



const resetGame = () => {
  setPlayerWins(0);
  setComputerWins(0);
  document.getElementById('result').innerText = '';
  
}


  return (
    <div className="App">
       
   <div className="header"> 
     Rock Paper Scissors Game  <div className="rpsimg"> <img src= {rps} width={150} height={150} style={{ margin: '0 0 0 200%' }}alt= 'rps'/> </div>
     </div>



    <div className="playerWins">

<div id="result"></div>

   </div>


    <div className="mainContainer">

    <div className="player1">

<div className="score">
  Player 1 score: {playerWins} 
</div>
   </div>


    <div className="computer">

<div className="score">
 Computer score: {computerWins}
</div>

  </div>





    </div> {/* main div */} 

    <div className="buttonContainer">

<div className="image">
<img src = {rock}  width= {120} height= {120} alt='rock' onClick={handleRockClick} />
</div>

<div className="image">
<img src = {paper}  width= {120} height= {120} alt='paper' onClick={handlePaperClick}/>
</div>

<div className="image">
<img src = {scissors}  width= {120} height= {120} alt='scissors' onClick={handleScissorsClick}/>
</div>

</div>


    </div> // ending div
  );
  }

export default App;

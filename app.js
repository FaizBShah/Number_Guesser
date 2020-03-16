// Game values
let min=1,
    max=10,
    winningNum=getRandomNum(min, max),
    guessesLeft=3;

// UI Elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again event listener
game.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play-again')
  {
    window.location.reload();
  }
})

// Listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);

  // Validating
  if((isNaN(guess))||(guess<min)||(guess>max))
  {
    guessInput.value = '';
    setMessage(`Please Enter a number between ${min} and ${max}`, 'red');
  }
  else
  {
  if(guess===winningNum)
  {
    guessInput.disabled = true;
    guessInput.style.borderColor = 'green';
    setMessage(`${winningNum} is correct, YOU WIN!!`, 'green');
    gameOver();
  }
  else
  {
    guessesLeft-=1;
    if(guessesLeft===0)
    {
      // Game Over-Lost

    guessInput.disabled = true;
    guessInput.style.borderColor = 'red';
    setMessage(`Game Over, you lost. The correct number was ${winningNum}`, 'red');
    gameOver();
    }
    else
    {
      // Game Continues

      guessInput.value = '';
      guessInput.style.borderColor = 'red';
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
      //if(Math.abs(guess-winningNum)<3)
      //{
        //setMessage(`Your guess was very close!! ${guessesLeft} guesses left`, 'red');
      //}
      //else
      //{
        //setMessage(`Your guess was very far!! ${guessesLeft} guesses left`, 'red');
      //}
    }
  }
  }
})

function setMessage(msg, color)
{
  message.style.color = color;
  message.textContent = msg;
}

// Game Over
function gameOver()
{
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNum(min, max)
{
  return Math.floor(Math.random()*(max-min+1)+min);
}

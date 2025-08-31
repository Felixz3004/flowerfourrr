let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  const choices = ['✊', '✋', '✌️'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let resultText = `เราเลือก ${userChoice} | คุณเลือก ${computerChoice}<br>`;

  if (userChoice === computerChoice) {
    resultText += "เสมอเลย 💞";
  } else if (
    (userChoice === '✊' && computerChoice === '✌️') ||
    (userChoice === '✋' && computerChoice === '✊') ||
    (userChoice === '✌️' && computerChoice === '✋')
  ) {
    userScore++;
    resultText += "เราชนะ เย้! 💖";
  } else {
    computerScore++;
    resultText += "คุณชนะ แงง 😚";
  }

  document.getElementById("result").innerHTML = resultText;
  document.getElementById("score").innerText = `คุณ: ${computerScore} | เรา: ${userScore}`;
}


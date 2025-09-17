function checkAnswer(i){
  const feedback = document.getElementById('feedback'+i);
  feedback.textContent = "Правильно! ❤️"; // всегда правильный

  // Переход на следующий экран или поздравление
  if(i === questions.length-1){
    setTimeout(()=> window.location.href = "congrats.html", 1000);
  } else {
    setTimeout(()=> nextScreen(i+2), 1000);
  }
}

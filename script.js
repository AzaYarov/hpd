// Список правильных ответов
const questions = [
  {a:"25 марта"}, // Вопрос 1
  {a:"Парк Кирова"},       // Вопрос 2
  {a:"Джакеев"},           // Вопрос 3
  {a:"Роро"}           // Вопрос 4
];

// Переход между экранами (для вопросов)
function nextScreen(n){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen'+n).classList.add('active');
}

// Проверка ответа
function checkAnswer(i){
  const answerInput = document.getElementById('answer'+(i+1));
  const feedback = document.getElementById('feedback'+i);

  if(answerInput.value.trim().toLowerCase() === questions[i].a.toLowerCase()){
    feedback.textContent = "Правильно! ❤️";

    if(i === questions.length-1){
      // Если это последний вопрос → открываем страницу с поздравлением
      setTimeout(()=> window.location.href = "congrats.html", 1000);
    } else {
      // Иначе просто идем на следующий экран
      setTimeout(()=>nextScreen(i+2),1000);
    }

  } else {
    feedback.textContent = "Попробуй ещё 😉";
  }

  
}

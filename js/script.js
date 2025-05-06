function calcRectangleArea(event) {
    event.preventDefault();
    const width = parseFloat(document.getElementById('width').value);
    const length = parseFloat(document.getElementById('length').value);
    const area = width * length;
    document.getElementById('areaResult').textContent = `Area: ${area}`;
  }

  function feetToInches(event) {
    event.preventDefault();
    const feet = parseFloat(document.getElementById('feetInput').value);
    const inches = feet * 12;
    document.getElementById('inchesResult').textContent = `${feet} feet is ${inches} inches.`;
  }

  let quizNum1, quizNum2;
  function generateQuiz() {
    quizNum1 = Math.floor(Math.random() * 500);
    quizNum2 = Math.floor(Math.random() * 500);
    document.getElementById('quizQuestion').textContent = `What is ${quizNum1} + ${quizNum2}?`;
    document.getElementById('quizFeedback').textContent = '';
  }

  function checkQuizAnswer(event) {
    event.preventDefault();
    const userAnswer = parseInt(document.getElementById('quizAnswer').value);
    const correctAnswer = quizNum1 + quizNum2;
    const feedback = userAnswer === correctAnswer
      ? 'Correct! Great job.'
      : `Incorrect. The correct answer was ${correctAnswer}.`;
    document.getElementById('quizFeedback').textContent = feedback;
  }

  function findMaximum(event) {
    event.preventDefault();
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const maxVal = Math.max(num1, num2);
    document.getElementById('maxResult').textContent = `The greater value is: ${maxVal}`;
  }

  function showFallingDistances() {
    const g = 9.8;
    const list = document.getElementById('fallingList');
    list.innerHTML = '';
    for (let t = 1; t <= 10; t++) {
      const d = 0.5 * g * t * t;
      const item = document.createElement('li');
      item.className = 'list-group-item';
      item.textContent = `Time: ${t}s — Distance: ${d.toFixed(2)} meters`;
      list.appendChild(item);
    }
  }
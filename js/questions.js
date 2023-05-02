import {questions} from '../js/data.js';

const progressValueEl = document.querySelector('.progress .value');
const numberEl = document.querySelector('.number');
const questionEl = document.querySelector('.question');
const choice1El = document.querySelector('.choice1');
const choice2El = document.querySelector('.choice2');

let currentNumber = 0; // 현재 질문의 번호
let mbti = ''; // mbti결과

function renderQuestion(){
  const question = questions[currentNumber];
  numberEl.innerHTML = question.number; // 01
  questionEl.innerHTML = question.question;
  choice1El.innerHTML = question.choices[0].text;
  choice2El.innerHTML = question.choices[1].text;
  progressValueEl.style.width = (currentNumber + 1) * 10 + "%";
}

function nextQuestion(choiceNumber){
  if(currentNumber === questions.length - 1){
    showResultPage();
    return;
  }
  const question = questions[currentNumber];
  mbti = mbti + question.choices[choiceNumber].value;
  currentNumber += 1;
  renderQuestion();
}

function showResultPage(){
  location.href = '/results.html?mbti=' + mbti; // 해당 주소로 이동, 쿼리스트링
}

choice1El.addEventListener('click', () => nextQuestion(0));
choice2El.addEventListener('click', () => nextQuestion(1));

renderQuestion();

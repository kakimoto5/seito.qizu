const quiz = [
  { 
    question: 'ゲーム市場最も売れたゲーム機は次の内どれ？',
    answers: [
      'スーパファミコン', 
      'プレイステーション２', 
      'Nintendo Switch', 
      'ニンテンドウDS'
    ],
    correct: 'ニンテンドウDS'
  }, {
    question: '糸井重里が企画に関わった任天堂の看板ゲームは？',
    answers: [
      'MOTHER2', 
      'スーパーマリオブラザーズ３', 
      'ドンキーコング', 
      '星のカービィ'
    ],
    correct:  'MOTHER2'
  }, {
    question: 'FFIVの主人公の名前は？',
    answers: ['フリオニール', 'クラウド', 'ティーダ', 'セシル'],
    correct: 'セシル'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength) {
    $button[buttonIndex].textContent =quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
 if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
 } else {
    window.alert('不正解！あなたの正解数は' + score + '/' + quizLength + 'です！');
 }

 quizIndex++;
 if(quizIndex < quizLength) {
  //問題数がまだあればこちらを実行
  setupQuiz();
 } else {
    //問題数がもうなければこちらを実行
  window.alert('終了！');
 }
;}

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}


const mainDiv = document.getElementById('main');
const questDiv = document.getElementById('quests');
const questOneDiv = document.getElementById('quest_one');
const questOneMainDiv = document.getElementById('mainQuestOne');
const questOneOneClick = document.getElementById('oneClick');
const questOneTwoClick = document.getElementById('twoClick');
const questOneThreeClick = document.getElementById('threeClick');
const questOneFourClick = document.getElementById('fourClick');
const questOneFiveClick = document.getElementById('fiveClick');
const questOneClose = document.getElementById('questOneClose');
const questOneInput = document.getElementById('questOneName');
// const questOneButton = document.getElementById('closeInput');
// const openQuestOne = document.getElementById('openQuestOne');
// const questOneNames = [];

mainDiv.style.display = 'block';
questDiv.style.display = 'none';
questOneDiv.style.display = 'none';
questOneMainDiv.style.display = 'none';
questOneDiv.style.display = 'none';

function open_main() {
  mainDiv.style.display = 'block';
  questDiv.style.display = 'none';
  questOneDiv.style.display = 'none';
  questOneMainDiv.style.display = 'none';
}

function close_main() {
  mainDiv.style.display = 'none';
  questDiv.style.display = 'block';
  questOneDiv.style.display = 'none';
  questOneMainDiv.style.display = 'none';
}

function questOneOpen() {
  mainDiv.style.display = 'none';
  questDiv.style.display = 'none';
  questOneDiv.style.display = 'block';
  questOneMainDiv.style.display = 'none';
}

function questOneMainOpen() {
  mainDiv.style.display = 'none';
  questDiv.style.display = 'none';
  questOneDiv.style.display = 'none';
  questOneMainDiv.style.display = 'flex';
}

questOneTwoClick.style.display = 'none';
questOneThreeClick.style.display = 'none';
questOneFourClick.style.display = 'none';
questOneFiveClick.style.display = 'none';
questOneClose.style.display = 'none';
openQuestOne.style.display = 'none';

function blurOneOneClick() {
  questOneOneClick.style.filter = 'blur(10px)';
  questOneTwoClick.style.display = 'block';
}

function blurOneTwoClick() {
  questOneTwoClick.style.filter = 'blur(10px)';
  questOneThreeClick.style.display = 'block';
}

function blurOneThreeClick() {
  questOneThreeClick.style.filter = 'blur(10px)';
  questOneFourClick.style.display = 'block';
}

function blurOneFourClick() {
  questOneFourClick.style.filter = 'blur(10px)';
  questOneFiveClick.style.display = 'block';
}

function blurOneFiveClick() {
  questOneFiveClick.style.filter = 'blur(10px)';
  questOneClose.style.display = 'block';
}

function dontBlurOpenQuestOne() {
  openQuestOne.style.display = 'block';
}

// function sendNameQuestOne() {
//   const nameValue = questOneInput.value.trim();
    
//   if (nameValue !== '') {
//     questOneNames.push(nameValue);
//     questOneInput.value = '';
//     questOneMainOpen();
//   } else {
//     alert('Пожалуйста, введите имя!');
//   }
// }

const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', (event) => {
  event.preventDefault();

 //Botones
  btnLeft.classList.toggle('stop');

  if(btnLeft.innerHTML === 'START'){
    btnLeft.innerHTML = 'STOP';
  } else {
    btnLeft.innerHTML = 'START';
  }
  

  btnRight.classList.toggle('split');

  if(btnRight.innerHTML === 'RESET'){
    btnRight.innerHTML = 'SPLIT';
  } else {
    btnRight.innerHTML = 'RESET';
  }

  
//Start - Stop

  if (btnLeft.classList.contains("stop")){
    chronometer.startClick()
  } else {
    chronometer.stopClick();
  }
  
});



// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});



// .btn.start { background: #5fca5f; }
// .btn.stop  { background: #f14949; }
// .btn.reset { background: #908e8e; }
// .btn.split { background: #0851ab; }
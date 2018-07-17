$(() => {
  // ***************************************** 1st deliverable PSEUDO CODE ***************************************************

  // TASK - trigger a collission in the console:
  // 1. create a vertical div, length of screen.
  // 2. create 2 children inside of div - one fixed at bottom (target), one able to move vertically(note)
  // 3. Animate note to travel down screen
  // 4. alert a collission in the console


  // create each song in notation vs 1/4s vs a/b/c/d key strokes **** needs a few hours
  // 250ms countdowns through 4 arrays to trigger through 1/0


  //***********************************************************************************************************************
  //*********************************************** THESE ARE THE SONGS ******************************************************
  //***********************************************************************************************************************

  // The 1s will trigger a note to move down the screen. 0s will not. This will make a rythm.


  // const superMassiveA = [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]; // this will be ENTIRE SONG button 1 commands
  // const superMassiveB = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // this will be ENTIRE SONG button 2 commands
  // const superMassiveC = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // this will be ENTIRE SONG button 3 commands
  // const superMassiveD = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // this will be ENTIRE SONG button 4 commands
  //
  // const verseGuitarRythmA = [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  // const verseGuitarRythmB = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // const verseGuitarRythmC = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // const verseGuitarRythmD = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  //************************************************* MISSED NOTES **************************************************************

  const missedNote = document.querySelector('.miss');
  missedNote.setAttribute('src', 'sounds/bum-note1.mp3');



  //******************************************** THIS WILL PLAY THE SONG ********************************************************
  const body = document.querySelector('body');
  const loadPage = document.createElement('div');
  loadPage.classList.add('load');
  // const logo = document.createElement('img');
  // logo.classList.add('image');
  // logo.setAttribute('src', 'images/odesza-logo.png');
  // logo.classList.add('hide');

  loadPage.addEventListener('click', event => {
    const audio = document.querySelector('.main');
    audio.setAttribute('src', 'sounds/SayMyName120Bpm.mp3');

    audio.play();
    setTimeout(() => {
      runProgram();
    },4000 );
    event.target.classList.add('hide');
  });
  body.appendChild(loadPage);
  // loadPage.appendChild(logo);




  // SPACE RESETS THE TRACK - NEEDS A DEBUG

  //*******************************************************************************************************************************************
  const odesza = [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0,
    1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0,
    1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0,
    1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0,
    1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1,
    1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, // V
    0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1,
    1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1,  // HALF WAY THROUGH V // RYTHM CHANGE //
    1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1];

  //*******************************************************************************************************************************************
  const odeszaD = [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
    1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0,
    1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
    //*******************************************************************************************************************************************
  const odeszaC = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
  //*******************************************************************************************************************************************
  const odeszaB = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1];
  //*******************************************************************************************************************************************
  const odeszaA = [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0,
    0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0,
    0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0,
    0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0,
    0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1];


  //******************************************** THIS IS REGULATING THE TIMING *****************************************************
  //***************************************** 250 = QUARTER NOTES, 125 = 8TH NOTES *************************************************
  function runProgram() {
    const timing = setInterval(() => {
      fireNotesA();
      fireNotesB();
      fireNotesC();
      fireNotesD();
      updateScore();
    }, 250);
    setTimeout(() => {
      clearInterval(timing);
    }, 75000);
  }
  //************************************************ SCORE KEEPER ********************************************************************
  const scoreBox = document.querySelector('.score');
  let score = 0;
  function updateScore() {
    scoreBox.textContent = `Player 1 Score: ${score}`;
  }
  //******************************************** THIS WILL TRIGGER THE DIVS ********************************************************
  // console.log(odesza.length);
  let i = 0;

  function fireNotesA() {
    if(odeszaA[i] === 1){
      create();
      i++;
    } else if(odeszaA[i] === 0) {
      i++;
    } else {
      console.log('Out of notes');
    }
  }
  // *************************************************** CREATE/KILL NOTES BUTTON A **********************************************************
  const container = document.querySelector('.container');
  const targetA = document.querySelector('.target-a');
  const notesInPlay = [];

  function create() {
    const newNote = document.createElement('div');
    container.appendChild(newNote);
    newNote.classList.add('note');
    notesInPlay.push(newNote);
    newNote.animate([
      {transform: 'translateY(0px)'},
      {transform: 'translateY(680px)'}
    ], 4000);
    setTimeout(() => {
      notesInPlay.splice(0, 1);
      newNote.remove();
    }, 4000);
  }

  $(window).keydown(function(e) {
    if (e.which === 90) {
      checkColA();
    }
  });

  function checkColA() {
    //this is run when you press z
    //TODO change the css of the target zone
    const position = parseFloat(window.getComputedStyle(notesInPlay[0]).transform.split(',')[5]);
    // console.log(position);
    if(position >= 620 && position <= 680){
      score = score+100;
      updateScore();
      targetA.classList.add('hit');
      setTimeout(() => {
        targetA.classList.remove('hit');
      }, 180);
    } else {
      missedNote.setAttribute('src', 'sounds/bum-note1.mp3');
      missedNote.play();
      score = score-100;
      updateScore();
    }
  }
  //*************************************************** BUTTON B *******************************************************************
  let j = 0;
  function fireNotesB() {
    if(odeszaB[j] === 1){
      createB();
      j++;
    } else if(odeszaB[j] === 0) {
      j++;
    } else {
      // console.log('End of song');
    }
  }

  const containerB = document.querySelector('.container-b');
  const targetB = document.querySelector('.target-b');
  const notesInPlayB = [];

  function createB() {
    const newNote = document.createElement('div');
    containerB.appendChild(newNote);
    newNote.classList.add('note');
    notesInPlayB.push(newNote);

    newNote.animate([
      {transform: 'translateY(0px)'},
      {transform: 'translateY(680px)'}
    ], 4000);
    setTimeout(() => {
      notesInPlayB.splice(0, 1);
      newNote.remove();
    }, 4000);
  }

  $(window).keydown(function(e) {
    if (e.which === 88) {
      checkColB();
    }
  });

  function checkColB() {
    //this is run when you press x
    //TODO change the css of the target zone
    // console.log(notesInPlayB[0]);
    const position = parseFloat(window.getComputedStyle(notesInPlayB[0]).transform.split(',')[5]);
    if(position >= 620 && position <= 680){
      score = score+100;
      updateScore();
      targetB.classList.add('hit');
      setTimeout(() => {
        targetB.classList.remove('hit');
      }, 180);
    } else {
      console.log('MISS MISS MISS MISS MISS');
      missedNote.setAttribute('src', 'sounds/bum-note2.mp3');
      missedNote.play();
      score = score-100;
      updateScore();
    }
  }
  //*************************************************** BUTTON C *******************************************************************
  let k = 0;
  function fireNotesC() {
    if(odeszaC[k] === 1){
      createC();
      k++;
    } else if(odeszaC[k] === 0) {
      k++;
    } else {
      // console.log('End of song');
    }
  }

  const containerC = document.querySelector('.container-c');
  const targetC = document.querySelector('.target-c');
  const notesInPlayC = [];

  function createC() {
    const newNote = document.createElement('div');
    containerC.appendChild(newNote);
    newNote.classList.add('note');
    notesInPlayC.push(newNote);

    newNote.animate([
      {transform: 'translateY(0px)'},
      {transform: 'translateY(680px)'}
    ], 4000);
    setTimeout(() => {
      notesInPlayC.splice(0, 1);
      newNote.remove();
    }, 4000);
  }

  $(window).keydown(function(e) {
    if (e.which === 67) {
      checkColC();
    }
  });

  function checkColC() {
    //this is run when you press x
    //TODO change the css of the target zone
    // console.log(notesInPlayC[0]);
    const position = parseFloat(window.getComputedStyle(notesInPlayC[0]).transform.split(',')[5]);
    if(position >= 620 && position <= 680){
      score = score+100;
      updateScore();
      targetC.classList.add('hit');
      setTimeout(() => {
        targetC.classList.remove('hit');
      }, 180);
    } else {
      console.log('MISS MISS MISS MISS MISS');
      missedNote.setAttribute('src', 'sounds/bum-note3.mp3');
      missedNote.play();
      score = score-100;
      updateScore();
    }
  }
  //*************************************************** BUTTON D *******************************************************************
  let l = 0;
  function fireNotesD() {
    if(odeszaD[l] === 1){
      createD();
      l++;
    } else if(odeszaD[l] === 0) {
      l++;
    } else {
      // console.log('End of song');
    }
  }

  const containerD = document.querySelector('.container-d');
  const targetD = document.querySelector('.target-d');
  const notesInPlayD = [];

  function createD() {
    const newNote = document.createElement('div');
    containerD.appendChild(newNote);
    newNote.classList.add('note');
    notesInPlayD.push(newNote);

    newNote.animate([
      {transform: 'translateY(0px)'},
      {transform: 'translateY(680px)'}
    ], 4000);
    setTimeout(() => {
      notesInPlayD.splice(0, 1);
      newNote.remove();
    }, 4000);
  }

  $(window).keydown(function(e) {
    if (e.which === 86) {
      checkColD();
    }
  });

  function checkColD() {
    //this is run when you press x
    //TODO change the css of the target zone
    // console.log(notesInPlayD[0]);
    const position = parseFloat(window.getComputedStyle(notesInPlayD[0]).transform.split(',')[5]);
    if(position >= 620 && position <= 680){
      score = score+100;
      updateScore();
      targetD.classList.add('hit');
      setTimeout(() => {
        targetD.classList.remove('hit');
      }, 180);
    } else {
      missedNote.setAttribute('src', 'sounds/bum-note1.mp3');
      missedNote.play();
      score = score-100;
      updateScore();
    }
  }
});

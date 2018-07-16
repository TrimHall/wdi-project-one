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


  const superMassiveA = [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]; // this will be ENTIRE SONG button 1 commands
  const superMassiveB = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // this will be ENTIRE SONG button 2 commands
  const superMassiveC = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // this will be ENTIRE SONG button 3 commands
  const superMassiveD = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // this will be ENTIRE SONG button 4 commands

  const verseGuitarRythmA = [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const verseGuitarRythmB = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const verseGuitarRythmC = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const verseGuitarRythmD = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const verseRhytmA = [];
  const verseRhytmB = [];
  const verseRhytmC = [];
  const verseRhytmD = [];

  // const odesza = [1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0,
  //   1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1,
  //   1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0,
  //   1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1,
  //   1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0,
  //   1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1,
  //   1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0,
  //   1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1,
  //   1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, // VERSE KICKS IN HERE //
  //   0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1,
  //   1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  //   0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1,  // HALF WAY THROUGH VERSE // RYTHM CHANGE //
  //   1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1];

  //********************************************************************************************************************************
  //******************************************** THIS WILL PLAY THE SONG ********************************************************
  //********************************************************************************************************************************
  const startBtn = document.querySelector('button');

  startBtn.addEventListener('click', () => {
    const audio = document.querySelector('audio');
    audio.setAttribute('src', 'sounds/SayMyName120Bpm.mp3');
    audio.play();
    setTimeout(() => {
      runProgram();
    },4000 );
  });

  // SPACE RESETS THE TRACK - NEEDS A DEBUG

  //******************************************** THIS IS REGULATING THE TIMING *****************************************************
  //***************************************** 250 = QUARTER NOTES, 125 = 8TH NOTES *************************************************
  function runProgram() {
    const timing = setInterval(() => {
      fireNotesA();
    }, 250);
    setTimeout(() => {
      clearInterval(timing);
    }, 51500);
  }
  //********************************************************************************************************************************
  //******************************************** THIS WILL TRIGGER THE DIVS ********************************************************
  //********************************************************************************************************************************


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

  console.log(odesza.length);
  let i = 0;

  function fireNotesA() {
    if(odesza[i] === 1){
      console.log('note');
      create();
      // moveNote();
      i++;
    } else if(odesza[i] === 0) {
      console.log('rest');
      i++;
    } else {
      console.log('End of song');
    }
  }

  // ********************************************************************************************************************************
  // ****************************************** CONSTRUCTOR FUNCTION TO CREATE/KILL NOTES ************************************************
  // ********************************************************************************************************************************
  // needs to create a div every time the console logs 'note' in the fireNotes() function.
  const container = document.querySelector('.container');

  function create() {
    const newNote = document.createElement('div');
    container.appendChild(newNote);
    newNote.classList.add('note');

    newNote.animate([
      {transform: 'translateY(0px)'},
      {transform: 'translateY(680px)'}
    ], 4000);
    setTimeout(() => {
      newNote.remove();
    }, 4000);
    newNote.getBoundingClientRect();
    console.log(newNote.top);
    
  }
  // ********************************************************************************************************************************
  // ************************************************* HIT OR MISS ******************************************************************
  // ********************************************************************************************************************************








  //********************************************************************************************************************************
  //*************************************************** BUTTON B *******************************************************************
  //********************************************************************************************************************************

  const buttonB = [1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0,
    1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1,
    1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0,
    1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1];
  // console.log(buttonB.length);
  let iB = 0;

  function fireNotesB() {
    if(buttonB[iB] === 1){
      console.log('note');
      moveNote();
      iB++;
    } else if(buttonB[iB] === 0) {
      console.log('rest');
      iB++;
    } else {
      console.log('End of song');
    }
  }





  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////// CODE GRAVEYARD... R.I.P FRIENDS /////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // testRythm.forEach(note => {
  //   setTimeout(() => {
  //     note === 1 ? console.log('fire') : console.log('rest');
  //   }, 1000);
  // });
  //
  // for(let i = 0; i === 0 || i === 1;){
  //   if(testRythm[i] === 1){
  //     setTimeout(() => {
  //       console.log('fire');
  //     }, 1000);
  //     i++;
  //
  //   }
  // }
  //
  // function fireNotes() {
  //   testRythm.forEach(note => {
  //     setTimeout(() => {
  //       if(testRythm[note] === 1){
  //         console.log('fire');
  //       } else (console.log('rest'));
  //     }, 1000);
  //   });
  // }
  // fireNotes();
  //
  // for(i = 0; i >= 0; i++){
  //   setInterval(() => {
  //     i = 1 ? console.log('fire') : console.log('rest');
  //   }, 500);
  // }
  //
  //   alert("hi");
  // for (var i = 0; i < 5; i++) {
  //   (function (i) {
  //     setTimeout(function () {
  //       alert("hello");
  //      }, 3000*i);
  //     })(i);
  //    };
  //
  // function fireNotes() {
  //   setInterval(() => {
  //     //the loop goes here
  //   }, 500);
  // }
  //
  // function startInterval() {
  //   intervalName = setInterval(() => {
  //     if(startTime === 1) {
  //       stopInterval();
  //       timer.classList.add('ringing');
  //     }
  //     decrement();
  //   }, 1000);
  // }


});

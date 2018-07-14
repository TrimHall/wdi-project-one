$(() => {
  console.log('working');
  // ***************************************** 1st deliverable PSEUDO CODE ***************************************************

  // TASK - trigger a collission in the console:
  // 1. create a vertical div, length of screen.
  // 2. create 2 children inside of div - one fixed at bottom (target), one able to move vertically(note)
  // 3. Animate note to travel down screen
  // 4. alert a collission in the console


  // create each song in notation vs 1/4s vs a/b/c/d key strokes **** needs a few hours
  // 250ms countdowns through 4 arrays to trigger through 1/0

  //***************************************************** THIS IS THE SONG ************************************************
  // The 1s will trigger a note to move down the screen. 0s will not. This will make a rythm.

  // const mainGuitarRythmA = [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]; // this will be ENTIRE SONG button 1 commands
  // const mainGuitarRythmB = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // this will be ENTIRE SONG button 2 commands
  // const mainGuitarRythmC = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // this will be ENTIRE SONG button 3 commands
  // const mainGuitarRythmD = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // this will be ENTIRE SONG button 4 commands
  //
  // const verseGuitarRythmA = [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  // const verseGuitarRythmB = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // const verseGuitarRythmC = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // const verseGuitarRythmD = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  //
  // const verseRhytmA = [];
  // const verseRhytmB = [];
  // const verseRhytmC = [];
  // const verseRhytmD = [];


  //******************************** THIS FUNCTION MOVES NOTES TOWARDS THE TARGET ************************************************

  // const note = document.querySelector('.note');
  //
  // const moveNote = function() {
  //   note.animate([
  //     {transform: 'translateY(0px)'},
  //     {transform: 'translateY(830px)'}
  //   ], {
  //     duration: 5000
  //   });
  // };
  // moveNote();

  //********************************************THIS WILL RUN THROUGH THE ARRAY AND TEST EVERY INTERVAL********************************************************


  // testRythm.forEach(note => {
  //   setTimeout(() => {
  //     note === 1 ? console.log('fire') : console.log('rest');
  //   }, 1000);
  // });
  const testRythm = [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  let i = 0;

  function fireNotes() {
    if(testRythm[i] === 1){
      console.log('fire');
      i++;
    } else {
      console.log('rest');
      i++;
    }
  }
  fireNotes();

  setInterval(() => {
    fireNotes();
  }, 500);




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


  // function fireNotes() {
  //   setInterval(() => {
  //     //the loop goes here
  //   }, 500);
  // }



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

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

const a = [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]; // this will be ENTIRE SONG button 1 commands
const b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // this will be ENTIRE SONG button 2 commands
const c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // this will be ENTIRE SONG button 3 commands
const d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // this will be ENTIRE SONG button 4 commands

  // arrange in arrays and upload to the hub for checking


  const note = document.querySelector('.note');

  const moveNote = function() {
    note.animate([
      {transform: 'translateY(0px)'},
      {transform: 'translateY(830px)'}
    ], {
      duration: 5000
    });
  };
  moveNote();
  console.log(note.x);


  window.setInterval;

});

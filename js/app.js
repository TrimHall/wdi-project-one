$(() => {
  console.log('working');
  // ***************************************** 1st deliverable PSEUDO CODE ***************************************************

  // TASK - trigger a collission in the console:
  // 1. create a vertical div, length of screen.
  // 2. create 2 children inside of div - one fixed at bottom (target), one able to move vertically(note)
  // 3. Animate note to travel down screen
  // 4. alert a collission in the console



  const note = document.querySelector('.note');

  const moveNote = function() {
    note.animate([
      {transform: 'translateY(0px)'},
      {transform: 'translateY(830px)'}
    ], {
      duration: 5000,
    });
  };
  moveNote();
  console.log(note.x);


  // if (note.x < target.x + target.width &&
  //  note.x + note.width > target.x &&
  //  note.y < target.y + target.height &&
  //  note.height + note.y > target.y) {
  //   console.log('collission detected');
  // }


});

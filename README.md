# WDI - Project One
# Rock Band / Guitar Hero

## Goal:

To create a single page, browser hosted game using all of the tools and technologies I had learned during the first three weeks of the WDI course at General Assembly.

# Instructions:

Play the notes as they reach the target area at the bottom of the game board.

## Win Streaks

> - 10 notes correctly and in succession to trigger a message
> - 20 notes to get the crowd cheering
> - 30 notes to trigger another success message
> - 40 notes correctly and in succession for a glowing game board background
> - 50 notes for a glowing and shaking game play area

## Controls

> - `Z` for the 1st column notes
> - `X` for the 2nd column notes
> - `C` for the 3rd column notes
> - `V` for the 4th column notes

# Technologies Used:

> - Vanilla Javascript
> - SASS
> - CSS 3
> - HTML 5
> - Git
> - jQuery
> - Atom
> - GitHub

# Approach

## Planning:

I planned that MVP would be a single column with collision detection for the notes and ability to score points if the user pressed the correct key at the right time. The next step was psudocoding the processes involved that I didn't already know how to do, such as figuring out how to 'fire' a note in time with the music, detect a collision etc.

I then planned out what function I would need and started to build a very basic version of the game.

<!-- <p align="center"><img src="[Imgur](https://i.imgur.com/1LBG1wP.gifv)"></p> -->

# Wins:

CSS Animations - on the final day of the project I started to play around with a few CSS animations to make the gameplay more exciting as it progresses through the level. I was able to incorporate visual and audio "win streaks" to increase the intensity of the game.

<img src="./public/images/streak.gif">

Collisions - For my collision detection, I created an arrays of "active notes" which are currently on the game board. I then used forEach loops and computed values to see if any of the notes are in the target area when the user presses a corresponding key. This took a bit of research and some trial and error - but eventually, I got it working!

# Blockers

Timing the notes. This was a tricky problem to solve as the notes would need to "fire" and then arrive in the target area at the right time, in order for the player to be able to score points in time with the audio. I used a set time out to loop through arrays of 1s and 0s to detect if the current note was a "rest" or "note". Writing these arrays was quite time consuming.

# Future Features:

> - 2 player mode (battle and co-op)

## To do:

> - restyling
> - refactoring
> - mobile responsiveness

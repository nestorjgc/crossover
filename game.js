document.addEventListener("DOMContentLoaded", () => {
  PuzzleMe.create({
      id: "puzzle", // ID of the container div
      data: {
          meta: {
              title: "My Crossword Puzzle",
              description: "A fun crossword puzzle for everyone!",
              author: "Your Name",
          },
          dimensions: [5, 5], // 5x5 grid
          squares: [
              // Each square is defined with its content or left null for blank cells
              ["M", "I", "L", "D", null],
              [null, null, null, null, null],
              ["F", "L", "U", "T", "E"],
              [null, null, null, null, null],
              ["N", "A", "N", "A", null],
          ],
          clues: {
              across: [
                  { number: 1, clue: "Not-very-hot salsa choice", answer: "MILD", start: [0, 0] },
                  { number: 3, clue: "High-pitched woodwind", answer: "FLUTE", start: [2, 0] },
              ],
              down: [
                  { number: 2, clue: "Granny", answer: "NANA", start: [4, 0] },
              ],
          },
      },
      options: {
          showClueNumbers: true,
          highlightCorrectCells: true,
      },
  });
});

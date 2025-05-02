import React from 'react';
import Crossword from 'react-crossword';

const data = {
  across: {
    1: { clue: "Her favorite movie genre", answer: "ROMCOM", row: 0, col: 0 },
    3: { clue: "Her favorite rom-com movie", answer: "CLUELESS", row: 2, col: 0 },
    // Add more clues
  },
  down: {
    1: { clue: "What's your favorite flavor?", answer: "TANGY", row: 3, col: 5 },
    2: { clue: "Which Disney character you look alike?", answer: "DUMBO", row: 2, col: 3 },
    // Add more clues
  }
};

function CrosswordPage() {
  return (
    <div>
      <h1>Crossword Puzzle</h1>
      <Crossword data={data} />
    </div>
  );
}

export default CrosswordPage;

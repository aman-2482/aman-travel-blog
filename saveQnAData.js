const fs = require('fs');

// Sample Q&A data
const qnaData = [
  {
    question: "Question 1",
    answer: "Answer 1"
  },
  {
    question: "Question 2",
    answer: "Answer 2"
  }
];

// Convert data to JSON string
const jsonData = JSON.stringify(qnaData);

// Write the JSON data to a file
fs.writeFile('qnaData.json', jsonData, (err) => {
  if (err) throw err;
  console.log('Q&A data saved to qnaData.json');
});

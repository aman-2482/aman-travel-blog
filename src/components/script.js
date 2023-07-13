// Event listener for the save button click
document.getElementById('saveButton').addEventListener('click', saveQnAData);

// Function to save the Q&A data
function saveQnAData() {
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

  // Create a Blob with the JSON data
  const blob = new Blob([jsonData], { type: 'application/json' });

  // Create a link element to download the JSON file
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = 'qnaData.json';

  // Trigger the download by programmatically clicking the link
  downloadLink.click();
}

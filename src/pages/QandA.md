---
layout: ../layouts/QandA.astro
---

<!DOCTYPE html>
<html>
<head>
  <title>Q&A Section</title>
  <style>
    .question {
      font-weight: bold;
       color: red;
    }
    .answer {
  color: red;
}
button {
      background-color: #333;
      color: white;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
    }
button:hover {
      background-color: #444;
    }
button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

  </style>
</head>
<body>
  <div id="qaContainer">
    <!-- Questions and answers will be dynamically added here -->
  </div>

  <h2>Add a new question:</h2>
  <form id="qaForm">
    <input type="text" id="questionInput" placeholder="Question" required>
    <input type="text" id="answerInput" placeholder="Answer" required>
    <button type="submit">Submit</button>
  </form>
<script>
    // Load existing questions and answers from local storage
    const savedQAs = localStorage.getItem('myBlogQAs');
    const qas = savedQAs ? JSON.parse(savedQAs) : [];
function saveQAsToLocalStorage() {
      localStorage.setItem('myBlogQAs', JSON.stringify(qas));
    }
function renderQAs() {
      const qaContainer = document.getElementById('qaContainer');
      qaContainer.innerHTML = '';
qas.forEach((qa, index) => {
        const question = document.createElement('div');
        question.classList.add('question');
        question.textContent = `Q: ${qa.question}`;
const answer = document.createElement('div');
        answer.textContent = `A: ${qa.answer}`;
const qaItem = document.createElement('div');
        qaItem.appendChild(question);
        qaItem.appendChild(answer);
// Check if the current user is an admin
        const isAdmin = document.getElementById('isAdmin').checked;
// Only show the delete button if the user is an admin
        if (isAdmin) {
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.addEventListener('click', () => {
            qas.splice(index, 1);
            renderQAs();
          });
 qaItem.appendChild(deleteButton);
        }
qaContainer.appendChild(qaItem);
      });
    }
const qaForm = document.getElementById('qaForm');
    qaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const questionInput = document.getElementById('questionInput');
      const answerInput = document.getElementById('answerInput');
// Check if the question and answer are not empty
      if (questionInput.value === '' || answerInput.value === '') {
        alert('Please enter a question and answer');
        return;
      }
// Add the new question and answer to the list
      const qa = {
        question: questionInput.value,
        answer: answerInput.value,
      };
      qas.push(qa);
// Clear the input fields
      questionInput.value = '';
      answerInput.value = '';
// Render the new questions and answers
      renderQAs();
    });
renderQAs();
  </script>

</body>
</html>

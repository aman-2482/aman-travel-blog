---
layout: ../layouts/QandA.astro
title: "QandA"
---
<!DOCTYPE html>
<html>
<head>
  <title>Q&A Section</title>
  <style>
    .answer {
    color: green;
    }
    .question {
      color: red;
    }
button {
      background-color: #333;
      color: Green;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
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

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
          qas.splice(index, 1);
          renderQAs();
          saveQAsToLocalStorage();
        });

        const qaItem = document.createElement('div');
        qaItem.appendChild(question);
        qaItem.appendChild(answer);
        qaItem.appendChild(deleteButton);

        qaContainer.appendChild(qaItem);
      });
    }

    function addNewQA(question, answer) {
      qas.push({ question, answer });
      renderQAs();
      saveQAsToLocalStorage();
    }

    const qaForm = document.getElementById('qaForm');
    qaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const questionInput = document.getElementById('questionInput');
      const answerInput = document.getElementById('answerInput');
      addNewQA(questionInput.value, answerInput.value);
      questionInput.value = '';
      answerInput.value = '';
    });

    renderQAs();
  </script>
</body>
</html>
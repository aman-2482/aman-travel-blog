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
</script> 
</body>
</html>

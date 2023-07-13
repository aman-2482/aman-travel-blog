---
layout: ../layouts/aboutqanda.astro
title: "QandA"
---
<div id="qna-section">
  <h2>Q&A Section</h2>
  <div id="qna-container">
    <div class="question">
      <h3>Question 1</h3>
      <p>Answer 1</p>
    </div>
    <div class="question">
      <h3>Question 2</h3>
      <p>Answer 2</p>
    </div>
    <!-- Add more question-answer pairs as needed -->
  </div>
  <div id="add-question">
    <h3>Add a Question</h3>
    <input type="text" id="question-input" placeholder="Enter your question" />
    <textarea id="answer-input" placeholder="Enter your answer"></textarea>
    <button onclick="addQuestion()">Submit</button>
  </div>
</div>

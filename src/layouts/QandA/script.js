// Get all the question elements
const questions = document.querySelectorAll('.qa');

// Add click event listener to each question
questions.forEach(question => {
  question.addEventListener('click', () => {
    // Toggle the 'active' class to show/hide the answer
    question.classList.toggle('active');
  });
});

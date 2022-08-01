const resetActivedQuestion = () => {
  const prevAnswerActived = document.querySelector('dd.active');
  const prevQuestionActived = prevAnswerActived.previousElementSibling.firstChild;

  if (prevAnswerActived) {
    prevAnswerActived.classList.remove('active');
    prevQuestionActived.setAttribute('aria-expanded', false);
  }
};

const activeQuestion = ({ target }) => {
  resetActivedQuestion();

  const controls = target.getAttribute('aria-controls');
  const answer = document.getElementById(controls);
  const active = answer.classList.contains('active');

  target.setAttribute('aria-expanded', active);

  answer.classList.toggle('active');
};

const initAccordion = () => {
  const questions = document.querySelectorAll('.questions button');

  questions.forEach((question) => question.addEventListener('click', activeQuestion));
};

export default initAccordion;

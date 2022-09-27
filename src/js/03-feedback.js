import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const key = 'feedback-form-state';

const formUser = {
  email: '',
  message: '',
};

form.addEventListener('input', throttle(saveFormValue, 500));

function saveFormValue() {
  formUser.email = input.value;
  formUser.message = textarea.value;
  localStorage.setItem(key, JSON.stringify(formUser));
}

form.addEventListener('submit', addSubmitForm);

function addSubmitForm(event) {
  event.preventDefault();

  const parselForm = JSON.parse(localStorage.getItem(key));
  console.log(parselForm);

  event.target.reset();
  localStorage.clear();
}

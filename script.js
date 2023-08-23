const profileImage = document.getElementById('profile-image');
const options = document.querySelector('.options');
const callOption = document.querySelector('.call-option');
const messageOption = document.querySelector('.message-option');

profileImage.addEventListener('click', () => {
  profileImage.classList.toggle('spin');
  options.classList.toggle('show-options');
});

callOption.addEventListener('click', () => {
  window.location.href = 'tel:8345952856';
  console.log('Call option clicked');
});

messageOption.addEventListener('click', () => {
   window.location.href = 'sms:8345952856';
  console.log('Message option clicked');
});

const arrowButtons = document.querySelectorAll('.arrow-button');

arrowButtons.forEach(button => {
  button.addEventListener('click', () => {
    const parentLi = button.closest('li');
    const fullContent = parentLi.querySelector('.full-content');
    fullContent.classList.toggle('show-full-content');
  });
});


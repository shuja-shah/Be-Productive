import './style.css';

const colorChange = document.querySelector('.head');

colorChange.style.color = 'blue';

const getStarted = document.getElementById('btn-start');
getStarted.addEventListener('click', (e) => {
  e.preventDefault();
  const start = document.querySelector('.container');
  start.classList.add('none');
  const dashboard = document.querySelector('.dashboard');
  dashboard.classList.remove('none');
});
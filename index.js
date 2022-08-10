const button = document.querySelector('.btn');
const list = document.querySelector('.list-group');

button.addEventListener('click', function (e) {
  list.classList.toggle('d-none');

  button.textContent = list.classList.contains('d-none')
    ? 'Show Destinations!'
    : 'Hide Destinations';
});

list.addEventListener('click', function (e) {
  const selected = list.querySelector('.active');
  selected.classList.remove('active');
  e.target.classList.add('active');
  let message = document.querySelector('.message');
  if (!document.body.contains(message)) {
    message = document.createElement('div');
    message.classList.add('alert', 'alert-success', 'mt-4', 'message');
  }
  message.textContent = `You selected ${e.target.textContent}`;

  list.append(message);
});

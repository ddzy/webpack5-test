import css from './index.scss';

console.log('css :>> ', css);

function render() {
  const div = document.createElement('div');
  div.innerHTML += `testtesttest`;
  document.body.appendChild(div);
}

render();
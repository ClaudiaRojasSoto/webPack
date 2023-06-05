import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // Agregar clase CSS al elemento div
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());

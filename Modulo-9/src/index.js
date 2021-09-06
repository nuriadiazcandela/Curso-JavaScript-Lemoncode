import './styles.css';
import { createCharacterRow } from './utils.js';
import { getCharacters } from './data-business.js';

getCharacters().then((users) => {
  const nodes = [];
  for (let user of users) {
    const node = createCharacterRow(user);
    nodes.push(node);
  }
  for (let node of nodes) {
    document.getElementById('root').append(node);
  }
});

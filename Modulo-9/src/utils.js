import { getCharactersId } from './data-business';

const createCharacterRow = (character) => {
  const element = document.createElement('div');
  const avatar = createAvatar(character);
  element.appendChild(avatar);
  const link = createRowText(character);
  element.appendChild(link);
  element.className = 'character-row';
  return element;
};

const createAvatar = (character) => {
  const element = document.createElement('img');
  element.width = 150;
  element.className = 'thumbnail';
  element.id = character.char_id;
  element.src = character.img;
  element.addEventListener('click', function (e) {
    getCharactersId(e.target.id).then((charactersId) => {
      showCharacter(charactersId[0]);
    });
  });

  return element;
};

const createRowText = (character) => {
  const element = document.createElement('span');
  element.append(character.name);

  return element;
};

const createAvatarDetail = (character) => {
  const element = document.createElement('img');
  element.width = 250;
  element.src = character.img;

  return element;
};

const showCharacter = (character) => {
  const characterDetail = document.getElementById('character-detail');

  characterDetail.innerHTML = '';
  characterDetail.appendChild(createAvatarDetail(character));
  characterDetail.appendChild(createParagraph('Name: ' + character.name));
  characterDetail.appendChild(createParagraph('Birthday: ' + character.birthday));
  characterDetail.appendChild(createParagraph('Nickname: ' + character.nickname));
};

const createParagraph = (text) => {
  const element = document.createElement('p');
  element.append(text);
  return element;
};

export { createCharacterRow, showCharacter };

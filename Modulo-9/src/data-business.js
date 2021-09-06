import axios from 'axios';

const getCharacters = () => {
  return axios
    .get('https://www.breakingbadapi.com/api/characters')
    .then((response) => response.data);
};

const getCharactersId = (id) => {
  return axios
    .get('https://www.breakingbadapi.com/api/characters/' + id)
    .then((response) => response.data);
};

export { getCharacters, getCharactersId };

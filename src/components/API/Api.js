import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const PIXABAY_KEY = '33503247-588ca757b47ad28580f337a8a';

export function getImg(request, page = 1) {
  return axios
    .get(
      `${BASE_URL}?q=${request}&page=${page}&key=${PIXABAY_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(response => {
      return response;
    })
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch(console.error);
}

import { fetchData } from '../modules/requests.js';

const formEl = document.getElementById('form');

formEl.addEventListener('submit', async (event) => {
  event.preventDefault();
  let fd = new FormData(formEl);

  const fetchOptions = {
    method: 'Post',
    enctype: 'multipart/form-data',
    body: fd,
  };

  const res = await fetchData('https://fe-student-api.herokuapp.com/api/file', fetchOptions);
  console.log(res);
});

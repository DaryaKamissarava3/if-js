const formEl = document.getElementById('form');

formEl.addEventListener('submit', async (event) => {
  event.preventDefault();
  let fd = new FormData(formEl);

  const fetchOptions = {
    method: 'Post',
    enctype: 'multipart/form-data',
    body: fd,
  };

  try {
    const res = await fetch('https://fe-student-api.herokuapp.com/api/file', fetchOptions);
    const parsedResponse=await res.json();
    console.log(parsedResponse);
  } catch (error) {
    console.log(error);
  }
});

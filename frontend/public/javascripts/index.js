window.onload = () => {
  console.log('hello')

  let runButton = document.getElementsByClassName('run-button')[0];
  let loadingCircle = document.getElementsByClassName('loader')[0];
  let responseBox = document.getElementById('response');

  runButton.addEventListener('click', () => {
    loadingCircle.classList.remove('hidden');
    axios.post('http://localhost:3000/script', {
      data: {
        code: editor.getValue()
      } 
    }).then((r) => {
      console.log(r.data);
      responseBox.innerHTML = r.data
      loadingCircle.classList.add('hidden');

    }).catch(e => {
      console.log(e);
    })
  })
}
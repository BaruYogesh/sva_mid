window.onload = () => {
  console.log('hello')

  let runButton = document.getElementsByClassName('run-button')[0];
  let loadingCircle = document.getElementsByClassName('loader')[0];

  runButton.addEventListener('click', () => {
    axios.get('localhost:3000/script', {
      data: {
        code: editor.getValue()
      } 
    })
    loadingCircle.classList.remove('hidden');
    setTimeout(() => {
      loadingCircle.classList.add('hidden');
    }, 3000);
  })
}
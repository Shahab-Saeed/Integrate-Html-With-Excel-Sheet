  const scriptURL = 'https://script.google.com/macros/s/AKfycbzy7TiRSQygiGPSYPktJ5q0yT1gANwDYmguZ3idpkc9YAna45-WfDA2DRgRaFfZAUub/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="ThankYou! For Subscribing"
        setTimeout(() => {
            msg.innerHTML=""
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })

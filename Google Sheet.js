const scriptURL = 'https://script.google.com/macros/s/AKfycbxxbQbh4AMLlXAn1Z8Zs1uBsEUMQU9Bf7m2TS6ZnaOpVk9vwjmURs-gem7iYRXUoD2j5w/exec'

const form = document.forms['contactForm']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! We have received your form submission."))
    .then(() => { window.location.reload(); })
    .catch(error=> console.error('Error!', error.message))
})
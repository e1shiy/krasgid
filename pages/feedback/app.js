if (localStorage.getItem('language') === 'english') { setLanguage('english') }

function setLanguage(choise) {
    const english = {
        title: 'KrasGid | Feedback',
        places: 'Places',
        aboutUs: 'About us',
        feedback: 'Feedback',
    }

    const russian = {
        title: 'КрасГид | Обратная связь',
        places: 'Места',
        aboutUs: 'О нас',
        feedback: 'Обратная связь',
    }

    let language
    if (choise === 'english') { language = Object.assign({}, english) }
    else if (choise === 'русский') { language = Object.assign({}, russian) }
    else { return }

    localStorage.setItem('language', choise)
    document.title = language.title

    document.getElementById('placesButton').querySelector('p').textContent = language.places
    document.getElementById('aboutUsButton').querySelector('p').textContent = language.aboutUs
    document.getElementById('feedbackButton').querySelector('p').textContent = language.feedback
} // доделать



const form = document.querySelector('.feedback__form')
const nameInput = document.getElementById('inputName')
const emailInput = document.getElementById('inputEmail')
const messageInput = document.getElementById('messageTextArea')
const formSubmitButton = form.querySelector('button[type="submit"]')
const formOverlay = document.querySelector('.form-overlay')
const formOverlaySending = formOverlay.querySelector('.form-overlay__sending')
const formOverlaySent = formOverlay.querySelector('.form-overlay__sent')
const formOverlayMessage = formOverlay.querySelector('.form-overlay__sent-result')
const formOverlayButton = formOverlay.querySelector('.form-overlay__sent-button')

const formValidate = (name, email, message) => {
    const isNameValid = name => {
        const syntaxMatch = Boolean(name.match(/^[a-zA-Zа-яА-Я\s-]+$/i))
        const lengthMatch = name.length < 300
        return syntaxMatch && lengthMatch
    }    
    const isEmailValid = email => {
        const syntaxMatch = Boolean(email.match(/^[a-zA-Z0-9]([a-zA-Z\.0-9-_]*[a-zA-Z0-9])?@[a-zA-Z]+\.[a-zA-Z]{2,}$/i))
        const lengthMatch = email.length < 300
        return syntaxMatch && lengthMatch
    }
    const isMessageValid = message => {
        return message.length < 1000 && message.length > 0
    }
    
    if (isNameValid(name)) {
        nameInput.classList.remove('feedback__form-input--failed')
        nameInput.classList.add('feedback__form-input--succeed')
    } else {
        nameInput.classList.remove('feedback__form-input--succeed')
        nameInput.classList.add('feedback__form-input--failed')
    }

    if (isEmailValid(email)) {
        emailInput.classList.add('feedback__form-input--failed')
        emailInput.classList.add('feedback__form-input--succeed')
    } else {
        emailInput.classList.remove('feedback__form-input--succeed')
        emailInput.classList.add('feedback__form-input--failed')
    }

    if (isMessageValid(message)) {
        messageInput.classList.remove('feedback__form-message--failed')
        messageInput.classList.add('feedback__form-message--succeed')
    } else {
        messageInput.classList.remove('feedback__form-message--succeed')
        messageInput.classList.add('feedback__form-message--failed')
    }

    return isNameValid(name) && isEmailValid(email) && isMessageValid(message)
}

async function sendForm() {
    const name = nameInput.value
    const email = emailInput.value
    const message = messageInput.value
    
    const isFormValid = formValidate(name, email, message)
    if (!isFormValid) { return }
    
    const formData = new FormData(form)
    formOverlay.showModal()

    const response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData
    })

    const result =  await response.json()
    
    formOverlaySending.classList.add('visually-hidden')
    formOverlaySent.classList.remove('visually-hidden')
    formOverlayMessage.textContent = result.message
    
    form.reset()
    nameInput.classList.remove('feedback__form-input--succeed')
    nameInput.classList.remove('feedback__form-input--failed')
    emailInput.classList.remove('feedback__form-input--succeed')
    emailInput.classList.remove('feedback__form-input--failed')
    messageInput.classList.remove('feedback__form-message--succeed')
    messageInput.classList.remove('feedback__form-message--failed')
}

formSubmitButton.addEventListener('click', (event) => {
    event.preventDefault()
    sendForm()
})

formOverlayButton.addEventListener('click', () => {
    formOverlaySending.classList.remove('visually-hidden')
    formOverlaySent.classList.add('visually-hidden')
})
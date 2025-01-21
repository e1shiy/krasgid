if (localStorage.getItem('language') === 'english') { setLanguage('english') }

function setLanguage(choise) {
    const english = {
        title: 'KrasGid | Feedback',
        places: 'Places',
        aboutUs: 'About us',
        feedback: 'Feedback',
        intro: `If you want to suggest ideas for future innovations or want to report bugs on the site,
                you can do so right here by filling out the form and writing a message. 
                This will greatly help the development of the site. Thank you for your responsiveness!`,
        name: 'name',
        email: 'email',
        message: 'message',
        send: 'send',
        sending: 'sending',
        sendSuccess: 'the message was sent successfully',
        sendFailed: "couldn't send message :("
    }

    const russian = {
        title: 'КрасГид | Обратная связь',
        places: 'Места',
        aboutUs: 'О нас',
        feedback: 'Обратная связь',
        intro: `Если вы хотите предложить идеи для будущих нововведений или хотите сообщить об ошибках на сайте, 
                то можете сделать это прямо здесь, заполнив форму и написав сообщение. 
                Это очень поможет развитию сайта. Спасибо за вашу отзывчивость!`,
        name: 'имя',
        email: 'почта',
        message: 'сообщение',
        send: 'отправить',
        sending: 'отправляем',
        sendSuccess: 'сообщение успешно отправлено',
        sendFailed: "не удалось отправить сообщение :("
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

    document.querySelector('.feedback__intro').querySelector('p').textContent = language.intro
    document.querySelector('.feedback__form-input[name="firstName"] + label').querySelector('p').textContent = language.name
    document.querySelector('.feedback__form-input[name="email"] + label').querySelector('p').textContent = language.email
    document.querySelector('.feedback__form-message-title').textContent = language.message
    document.querySelector('.feedback__form-button').querySelector('p').textContent = language.send

    document.querySelector('.form-overlay__sending-message').textContent = language.sending
}



const form = document.querySelector('.feedback__form')
const nameInput = document.getElementById('inputName')
const emailInput = document.getElementById('inputEmail')
const messageInput = document.getElementById('messageTextArea')
const formSubmitButton = form.querySelector('button[type="submit"]')
const formOverlay = document.querySelector('.form-overlay')
const formOverlaySending = formOverlay.querySelector('.form-overlay__sending')
const formOverlaySent = formOverlay.querySelector('.form-overlay__sent')
const formOverlaySendingMessage = formOverlay.querySelector('.form-overlay__sending-message')
const formOverlayMessage = formOverlay.querySelector('.form-overlay__sent-result')
const formOverlayButton = formOverlay.querySelector('.form-overlay__sent-button')

const formValidate = (name, email, message) => {
    const isNameValid = name => {
        const syntaxMatch = Boolean(name.match(/^[a-zA-Zа-яА-ЯёЁ\s-]+$/i))
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

const resetForm = (status) => {
    const choise = localStorage.getItem('language')
    let successMessage
    let failedMessage
    if (choise === 'english') {
        successMessage = 'the message was sent successfully'
        failedMessage = "couldn't send message :("
    }
    else if (choise === 'russian') {
        successMessage = 'сообщение успешно отправлено'
        failedMessage = 'не удалось отправить сообщение :('
    }

    if (status === 'success') {
        formOverlayMessage.textContent = successMessage
    } else {
        formOverlayMessage.textContent = failedMessage
    }
    
    formOverlaySending.classList.add('visually-hidden')
    formOverlaySent.classList.remove('visually-hidden')
    
    form.reset()
    nameInput.classList.remove('feedback__form-input--succeed')
    nameInput.classList.remove('feedback__form-input--failed')
    emailInput.classList.remove('feedback__form-input--succeed')
    emailInput.classList.remove('feedback__form-input--failed')
    messageInput.classList.remove('feedback__form-message--succeed')
    messageInput.classList.remove('feedback__form-message--failed')
}

async function sendForm() {    
    const formData = new FormData(form)
    formOverlay.showModal()

    let count = 0
    const interval = setInterval(() => {
        if (count++ === 3) {
            count -= 4
            formOverlaySendingMessage.textContent = formOverlaySendingMessage.textContent.substring(0, formOverlaySendingMessage.textContent.length - 3)
        }
        else {
            formOverlaySendingMessage.textContent += '.'
        }
    }, 400);
    
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('failed')), 3000);  // Таймаут через 30 секунд
    });

    const fetchPromise = fetch('sendmail.php', {
        method: 'POST',
        body: formData
    }).then(response => response.json());

    try {
        const result = await Promise.race([fetchPromise, timeoutPromise]);
        clearInterval(interval)
        return result.status;
    } catch (error) {
        clearInterval(interval)
        return error.message === 'failed' ? 'failed' : 'error';
    }
}

formSubmitButton.addEventListener('click', async (event) => {
    event.preventDefault()

    const name = nameInput.value
    const email = emailInput.value
    const message = messageInput.value
    
    const isFormValid = formValidate(name, email, message)
    if (!isFormValid) { return }

    const status = await sendForm()
    resetForm(status)
})

formOverlayButton.addEventListener('click', () => {
    formOverlaySending.classList.remove('visually-hidden')
    formOverlaySent.classList.add('visually-hidden')
})
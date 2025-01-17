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
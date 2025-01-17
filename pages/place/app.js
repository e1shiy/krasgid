if (localStorage.getItem('language') === 'english') { setLanguage('english') }

function setLanguage(choise) {
    const english = {
        title: 'KrasGid | Place',
        places: 'Places',
        aboutUs: 'About us',
        feedback: 'Feedback',
        filterNames: ['Working days', 'Opening hours', 'Entry cost', 'Address'],
        filterValues: ['dolor sit amet', 'dolor sit', 'dolor sit amet consectetur. Elementum', '78 dolor sit amet consecteur elementum'],
        ifAvailable: 'if available',
        addressExplanation: 'If the place does not have an address, then we try to find a convenient reference point',
        placeTitle: 'Lorem ipsum dolor sit',
        placeText: ['Lorem ipsum dolor sit amet consectetur. Sit nisl id senectus convallis sit sit posuere facilisi nam. Sed sit enim sed ornare nulla in semper. Turpis amet eu mi suspendisse. Donec nascetur quam in sodales dolor eget neque sapien metus. At sed nisl blandit vulputate eu tincidunt est. Mi integer sit est pellentesque eu.', 
            'Faucibus cursus laoreet magna quis tincidunt aliquet. Praesent mi nunc urna sit egestas. Nunc posuere elementum sed tempus. At quis sodales sollicitudin quisque tempus tempor. Lorem at enim amet sed vitae posuere. Nisl neque et scelerisque consectetur elit. Augue tristique vitae convallis volutpat imperdiet pharetra. Urna duis turpis diam nisl integer. Eu lacinia nunc et turpis donec purus. Elit porta id nunc aenean ac scelerisque cras condimentum at. Diam facilisis quis id amet pellentesque ridiculus aliquam. Adipiscing amet nec donec tellus in. Amet ipsum euismod cras tincidunt sodales tempor habitant.', 
            'Egestas nibh scelerisque eget posuere varius faucibus faucibus mauris. Ornare vulputate eget dui neque. Tellus dolor mi mollis aliquam commodo. Quis tincidunt dolor facilisis laoreet consectetur et viverra semper mattis. Malesuada libero ut sed ac. Tellus donec velit non lobortis ultricies pharetra ut in. Rutrum id neque diam mauris nec interdum. Pellentesque pellentesque ipsum penatibus malesuada facilisis. Neque dis aliquet iaculis magna et quisque sollicitudin eget viverra. Amet cursus ultrices amet odio suscipit. Posuere elit posuere pharetra consequat velit nulla ut.',
            'Neque nunc id maecenas aliquet pellentesque morbi id sed habitant. Et amet turpis ultrices et massa. Molestie velit nunc eget ac.']
    }

    const russian = {
        title: 'КрасГид | Место',
        places: 'Места',
        aboutUs: 'О нас',
        feedback: 'Обратная связь',
        filterNames: ['Рабочие дни', 'Часы работы', 'Стоимость входа', 'Адрес'],
        filterValues: ['dolor sit amet', 'dolor sit', 'dolor sit amet consectetur. Elementum', '78 dolor sit amet consecteur elementum'],
        ifAvailable: 'при наличии',
        addressExplanation: 'Если у места нет адреса, то мы стараемся подобрать удобный ориентир',
        placeTitle: 'Lorem ipsum dolor sit',
        placeText: ['Lorem ipsum dolor sit amet consectetur. Sit nisl id senectus convallis sit sit posuere facilisi nam. Sed sit enim sed ornare nulla in semper. Turpis amet eu mi suspendisse. Donec nascetur quam in sodales dolor eget neque sapien metus. At sed nisl blandit vulputate eu tincidunt est. Mi integer sit est pellentesque eu.', 
            'Faucibus cursus laoreet magna quis tincidunt aliquet. Praesent mi nunc urna sit egestas. Nunc posuere elementum sed tempus. At quis sodales sollicitudin quisque tempus tempor. Lorem at enim amet sed vitae posuere. Nisl neque et scelerisque consectetur elit. Augue tristique vitae convallis volutpat imperdiet pharetra. Urna duis turpis diam nisl integer. Eu lacinia nunc et turpis donec purus. Elit porta id nunc aenean ac scelerisque cras condimentum at. Diam facilisis quis id amet pellentesque ridiculus aliquam. Adipiscing amet nec donec tellus in. Amet ipsum euismod cras tincidunt sodales tempor habitant.', 
            'Egestas nibh scelerisque eget posuere varius faucibus faucibus mauris. Ornare vulputate eget dui neque. Tellus dolor mi mollis aliquam commodo. Quis tincidunt dolor facilisis laoreet consectetur et viverra semper mattis. Malesuada libero ut sed ac. Tellus donec velit non lobortis ultricies pharetra ut in. Rutrum id neque diam mauris nec interdum. Pellentesque pellentesque ipsum penatibus malesuada facilisis. Neque dis aliquet iaculis magna et quisque sollicitudin eget viverra. Amet cursus ultrices amet odio suscipit. Posuere elit posuere pharetra consequat velit nulla ut.',
            'Neque nunc id maecenas aliquet pellentesque morbi id sed habitant. Et amet turpis ultrices et massa. Molestie velit nunc eget ac.']
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

    document.querySelectorAll('.place__description-item-title').forEach((title, index) => {
        if (index === 3) {
            title.innerHTML = language.filterNames[index] + ' (' + title.innerHTML.split('(')[1]
        } else {
            title.textContent = language.filterNames[index] + ':'
        }
    })

    document.querySelectorAll('.place__description-item-info').forEach((value, index) => {
        value.textContent = language.filterValues[index]
    })

    document.getElementById('explanatoryButton').querySelector('span').textContent = language.ifAvailable
    document.getElementById('explanatoryBox').textContent = language.addressExplanation

    document.querySelector('.place__description-title').querySelector('p').textContent = language.placeTitle
    document.querySelectorAll('.place__text p').forEach((paragraph, index) => {
        paragraph.textContent = language.placeText[index]
    })
}



const addressInfoTitle = document.querySelectorAll('.place__description-item-title')[3]

addressInfoTitle.addEventListener('click', () => {
    const explanatoryBox = document.getElementById('explanatoryBox')
    explanatoryBox.classList.toggle('place__description-explanation--shown')
})

window.addEventListener('click', ev => {
    const explanatoryBox = document.getElementById('explanatoryBox')
    const isShown = explanatoryBox.classList.contains('place__description-explanation--shown')
    const isExplanatoryButtonClicked = ev.target.closest('#explanatoryButton')

    if (isShown && !isExplanatoryButtonClicked) {
        explanatoryBox.classList.toggle('place__description-explanation--shown')
    }
})



const imageWrapper = document.querySelector('.place__slider-image-wrapper')
const image = document.querySelector('.place__slider-image')

const slider = document.querySelector('.slider')
const sliderButtonUp = slider.querySelector('.slider__button-up')
const sliderButtonDown = slider.querySelector('.slider__button-down')
const sliderImageWrappers = slider.querySelectorAll('.slider__images-item')
let sliderChosenImageWrapper = slider.querySelector('.slider__images-item--chosen')

const sliderScrollImageIntoView = (number) => {
    const isMobile = window.innerWidth <= 767 
    const targetImage = slider.querySelector(`[data-number="${number}"]`)

    const targetImageTop = isMobile ? targetImage.getBoundingClientRect().left : targetImage.getBoundingClientRect().top
    const targetImageBottom = isMobile ? targetImage.getBoundingClientRect().right : targetImage.getBoundingClientRect().bottom
    const containerTop = isMobile ? sliderButtonUp.getBoundingClientRect().right : sliderButtonUp.getBoundingClientRect().bottom
    const containerBottom = isMobile ? sliderButtonDown.getBoundingClientRect().left : sliderButtonDown.getBoundingClientRect().top

    let offset = isMobile ? -1 : 0 // -1 cuz of borders
    if (targetImageTop < containerTop) {
        offset += containerTop - targetImageTop 
        isMobile ? slider.scrollLeft -= offset : slider.scrollTop -= offset
    } else if (targetImageBottom > containerBottom) {
        offset += targetImageBottom - containerBottom
        isMobile ? slider.scrollLeft += offset : slider.scrollTop += offset
    }
}

const wrapperChangeImage = (source) => {
    image.classList.add('place__slider-image--fade-out')
    setTimeout(() => {
        requestAnimationFrame(() => {
            image.src = source;
            requestAnimationFrame(() => {
                image.classList.remove('place__slider-image--fade-out')
            });
        });
    }, 100);
}

const sliderSelectImage = (number) => {
    const previousNumber = Number(sliderChosenImageWrapper.dataset.number)

    sliderChosenImageWrapper.classList.remove('slider__images-item--chosen')
    sliderChosenImageWrapper = slider.querySelector(`[data-number="${number}"]`)
    sliderChosenImageWrapper.classList.add('slider__images-item--chosen')

    if (number === 6) { sliderButtonDown.classList.add('slider__button-down--disabled') }
    else if (number === 1) { sliderButtonUp.classList.add('slider__button-up--disabled') }
    if (previousNumber === 6) { sliderButtonDown.classList.remove('slider__button-down--disabled') }
    else if (previousNumber === 1) { sliderButtonUp.classList.remove('slider__button-up--disabled') }

    wrapperChangeImage(sliderChosenImageWrapper.querySelector('img').src)
    sliderScrollImageIntoView(number)
}

sliderImageWrappers.forEach(wrapper => {
    wrapper.addEventListener('click', () => {
        const number = Number(wrapper.dataset.number)
        if (number == sliderChosenImageWrapper.dataset.number) { return }
        sliderSelectImage(number)
    })
})

sliderButtonUp.addEventListener('click', () => {
    const isDisabled = sliderButtonUp.classList.contains('slider__button-up--disabled')
    if (isDisabled) { return }

    const number = Number(sliderChosenImageWrapper.dataset.number)
    sliderSelectImage(number - 1)
})

sliderButtonDown.addEventListener('click', () => {
    const isDisabled = sliderButtonDown.classList.contains('slider__button-down--disabled')    
    if (isDisabled) { return }

    const number = Number(sliderChosenImageWrapper.dataset.number)
    sliderSelectImage(number + 1)
})
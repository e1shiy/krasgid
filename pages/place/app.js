if (localStorage.getItem('language') === 'english') { setLanguage('english') }

function setLanguage(choise) {
    const english = {
        title: 'KrasGid | Place',
        places: 'Places',
        aboutUs: 'About us',
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



const explanatoryButton = document.getElementById('explanatoryButton')
const explanatoryBox = document.getElementById('explanatoryBox')
explanatoryButton.addEventListener('click', () => {
    explanatoryBox.classList.toggle('place__description-explanation--shown')
})

window.addEventListener('click', ev => {
    const isShown = explanatoryBox.classList.contains('place__description-explanation--shown')
    const isExplanatoryButtonClicked = ev.target.closest('#explanatoryButton')

    if (isShown && !isExplanatoryButtonClicked) {
        explanatoryBox.classList.toggle('place__description-explanation--shown')
    }
})
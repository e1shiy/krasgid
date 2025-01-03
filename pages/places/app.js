if (localStorage.getItem('language') === 'english') { setLanguage('english') }

function setLanguage(choise) {
    const english = {
        title: 'KrasGid | Places',
        places: 'Places',
        aboutUs: 'About us',
        filtersTitle: 'Filters',
        district: 'District',
        entryCost: 'Entry cost',
        workingDays: 'Working days',
        isRoundTheClock: 'Around the clock',
        resetAll: 'Reset filters',
        reset: 'Reset',
        soviet: 'Soviet',
        october: 'October',
        central: 'Central',
        lenins: 'Lenins',
        kirovs: 'Kirovs',
        sverdlovs: 'Sverdlovs',
        railway: 'Railway',
        outside: 'Outside the city',
        free: 'Free',
        from: 'from',
        to: 'to',
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
        search: 'search'
    }

    const russian = {
        title: 'КрасГид | Места',
        places: 'Места',
        aboutUs: 'О нас',
        filtersTitle: 'Фильтры',
        district: 'Район',
        entryCost: 'Стоимость входа',
        workingDays: 'Рабочие дни',
        isRoundTheClock: 'Круглосуточно',
        resetAll: 'Сбросить фильтры',
        reset: 'Сбросить',
        soviet: 'Советский',
        october: 'Октябрьский',
        central: 'Центральный',
        lenins: 'Ленинский',
        kirovs: 'Кировский',
        sverdlovs: 'Свердловский',
        railway: 'Железнодорожный',
        outside: 'За городом',
        free: 'Бесплатно',
        from: 'от',
        to: 'до',
        monday: 'Понедельник',
        tuesday: 'Вторник',
        wednesday: 'Среда',
        thursday: 'Четверг',
        friday: 'Пятница',
        saturday: 'Суббота',
        sunday: 'Воскресенье',
        search: 'поиск'
    }

    let language
    if (choise === 'english') { language = Object.assign({}, english) }
    else if (choise === 'русский') { language = Object.assign({}, russian) }
    else { return }

    localStorage.setItem('language', choise)
    document.title = language.title

    document.getElementById('placesButton').querySelector('p').textContent = language.places
    document.getElementById('aboutUsButton').querySelector('p').textContent = language.aboutUs

    document.querySelector('.filters__title').textContent = language.filtersTitle
    document.getElementById('districtFilterButton').textContent = language.district
    document.getElementById('entryCostFilterButton').textContent = language.entryCost
    document.getElementById('workingDaysFilterButton').textContent = language.workingDays
    document.getElementById('isRoundTheClockFilterButton').textContent = language.isRoundTheClock
    document.getElementById('resetFiltersButton').textContent = language.resetAll

    document.querySelectorAll('.filter__reset-button').forEach(resetButton => resetButton.textContent = language.reset)
    document.getElementById('sovietDistrictInput').closest('label').querySelector('p').textContent = language.soviet
    document.getElementById('octoberDistrictInput').closest('label').querySelector('p').textContent = language.october
    document.getElementById('centralDistrictInput').closest('label').querySelector('p').textContent = language.central
    document.getElementById('leninsDistrictInput').closest('label').querySelector('p').textContent = language.lenins
    document.getElementById('kirovsDistrictInput').closest('label').querySelector('p').textContent = language.kirovs
    document.getElementById('sverdlovsDistrictInput').closest('label').querySelector('p').textContent = language.sverdlovs
    document.getElementById('railwayDistrictInput').closest('label').querySelector('p').textContent = language.railway
    document.getElementById('outsideTheCityDistrictInput').closest('label').querySelector('p').textContent = language.outside

    document.getElementById('isFreeInput').closest('label').querySelector('p').textContent = language.free
    document.querySelector('.from-to-input__from-wrapper').setAttribute('data-before', language.from)
    document.querySelector('.from-to-input__to-wrapper').setAttribute('data-before', language.to)

    document.querySelector('.search__input').setAttribute('placeholder', language.search)

    document.querySelectorAll('.place').forEach(place => {
        console.log(place.dataset.number, places[place.dataset.number])
        if (choise === 'english') { language = Object.assign({}, places[place.dataset.number].english) }
        else if (choise === 'русский') { language = Object.assign({}, places[place.dataset.number].russian) }

        place.querySelector('.place__info-title h4').textContent = language.title
        place.querySelector('.place__info-description p').innerHTML = language.workingDaysText + '<br>' + language.workingHoursText + '<br>' + language.entryCostText
    })
}



const places = [
    { // столбы
        english: {
            title: 'Krasnoyarsk Stolby National Park',
            entryCostText: 'Free entry, services from 200 rubles',
            workingDaysText: 'Works daily',
            workingHoursText: 'Mo-Fr: 10:00 - 21:00, Sa-Su: 10:00 - 22:00'
        },
        russian: {
            title: 'Национальный заповедник "Столбы"',
            entryCostText: 'Вход бесплатный, услуги от 200 рублей',
            workingDaysText: 'Работает ежедневно',
            workingHoursText: 'Пн-Пт: 10:00 - 21:00, Сб-Вс: 10:00 - 22:00'
        },
        filters: {
            district: 'sverdlovs',
            entryCost: 0,
            workingDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
            isRoundTheClock: false,
        },
        isFirst: true,
        imagePath: "../../images/test.jpg",
        URL: document.URL.split('places/index.html')[0] + "place/index.html" // temp
    },

    { // гэс
        english: {
            title: 'Divnogorsk HPS',
            entryCostText: 'Free entry',
            workingDaysText: 'Works daily',
            workingHoursText: 'Around the clock'
        },
        russian: {
            title: 'Дивногорская ГЭС',
            entryCostText: 'Вход бесплатный',
            workingDaysText: 'Работает ежедневно',
            workingHoursText: 'Круглосуточно'
        },
        filters: {
            district: 'outsidethecity',
            entryCost: 0,
            workingDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
            isRoundTheClock: true,
        },
        isFirst: false,
        imagePath: "../../images/hps.jpg",
        URL: document.URL.split('places/index.html')[0] + "place/index.html" // temp
    }
]

function createAPlace(place, number) {
    const container = document.createElement('li')
    container.classList.add('places__item')
    container.classList.add('place')
    container.dataset.number = number

    const wayWrapper = document.createElement('div')
    wayWrapper.classList.add('place__background-way')
    if (place.isFirst) {
        wayWrapper.classList.add('place__background-way--first')
        wayWrapper.innerHTML = `
        <svg width="115" height="203" viewBox="0 0 115 203" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M98.186 179.209C99.1881 178.745 100.377 179.18 100.842 180.183L100.852 180.205C102.269 183.261 105.575 190.392 114.442 199.613C115.207 200.409 115.182 201.676 114.386 202.441C113.59 203.207 112.324 203.182 111.558 202.386C102.25 192.705 98.7263 185.13 97.2127 181.865C96.7481 180.863 97.1839 179.674 98.186 179.209Z" fill="#FF0000"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M114.46 179.657C115.215 180.463 115.173 181.729 114.367 182.484C109.387 187.147 102.757 196.672 99.6849 201.999C99.1331 202.956 97.9101 203.284 96.9533 202.732C95.9964 202.18 95.668 200.957 96.2198 200C99.3747 194.529 106.236 184.618 111.633 179.564C112.439 178.809 113.705 178.85 114.46 179.657Z" fill="#FF0000"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88289 0.021071C7.80428 0.232557 9.19044 1.9616 8.97895 3.88299C8.70988 6.32756 8.47139 8.91991 8.26305 11.6438C8.11564 13.5711 6.43369 15.0141 4.50633 14.8667C2.57896 14.7192 1.13602 13.0373 1.28344 11.1099C1.49693 8.31878 1.74236 5.64843 2.02097 3.11713C2.23246 1.19574 3.9615 -0.190415 5.88289 0.021071ZM3.87052 28.979C5.80306 29.0211 7.33557 30.6219 7.29348 32.5544C7.1833 37.613 7.14396 42.8853 7.17247 48.3053C7.18264 50.2383 5.62391 51.8135 3.69094 51.8237C1.75797 51.8338 0.182741 50.2751 0.17257 48.3421C0.143753 42.8651 0.18346 37.5294 0.295139 32.402C0.337231 30.4694 1.93798 28.9369 3.87052 28.979ZM3.97881 65.9542C5.91067 65.8881 7.53034 67.4006 7.59642 69.3325C7.77495 74.5511 8.00737 79.8216 8.29121 85.0925C8.39516 87.0227 6.91468 88.6717 4.98448 88.7756C3.05428 88.8796 1.40528 87.3991 1.30134 85.4689C1.01507 80.1529 0.780627 74.8368 0.600516 69.5718C0.534428 67.6399 2.04694 66.0203 3.97881 65.9542ZM5.92766 102.874C7.85444 102.719 9.54204 104.155 9.69704 106.082C10.1256 111.41 10.6049 116.663 11.1322 121.787C11.3301 123.709 9.9317 125.429 8.00886 125.627C6.08601 125.824 4.36683 124.426 4.16896 122.503C3.63608 117.325 3.15208 112.02 2.71958 106.643C2.56458 104.717 4.00089 103.029 5.92766 102.874ZM9.69803 139.649C11.6119 139.378 13.3832 140.71 13.6542 142.624C14.0308 145.284 14.4217 147.874 14.8263 150.384C15.1994 152.698 15.6701 154.863 16.2281 156.887C16.7419 158.75 15.6478 160.677 13.7844 161.191C11.9209 161.705 9.99375 160.611 9.47993 158.747C8.85006 156.463 8.3267 154.049 7.91548 151.498C7.5033 148.941 7.10576 146.306 6.72331 143.605C6.4523 141.692 7.78413 139.92 9.69803 139.649ZM18.9236 171.732C20.4222 170.511 22.6268 170.736 23.8477 172.235C26.6245 175.643 29.8906 178.338 33.5327 180.474C35.2 181.452 35.7589 183.596 34.7809 185.264C33.8029 186.931 31.6585 187.49 29.9911 186.512C25.6935 183.991 21.7698 180.767 18.4209 176.656C17.1999 175.158 17.425 172.953 18.9236 171.732ZM45.8458 189.152C46.228 187.258 48.074 186.031 49.9688 186.414C54.3081 187.289 58.8337 187.809 63.4267 188.112C65.3555 188.24 66.816 189.906 66.6888 191.835C66.5616 193.764 64.8949 195.224 62.9661 195.097C58.1597 194.78 53.3109 194.229 48.5845 193.275C46.6897 192.893 45.4635 191.047 45.8458 189.152ZM83.8184 195.49C83.1939 195.493 82.564 195.497 81.9284 195.5C79.9954 195.51 78.4207 193.95 78.4113 192.017C78.4018 190.084 79.9611 188.51 81.8941 188.5C82.5189 188.497 83.1424 188.494 83.7634 188.49C85.5111 188.48 87.2391 188.471 88.9238 188.471C90.8568 188.471 92.4238 190.038 92.4238 191.971C92.4238 193.904 90.8568 195.471 88.9238 195.471C87.2599 195.471 85.5602 195.48 83.8184 195.49Z" fill="black"/>
        </svg>`
    } else {
        wayWrapper.innerHTML = `
        <svg width="116" height="249" viewBox="0 0 116 249" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M99.186 224.542C100.188 224.078 101.377 224.513 101.842 225.515L101.852 225.538C103.269 228.594 106.575 235.725 115.442 244.946C116.207 245.742 116.182 247.009 115.386 247.774C114.59 248.54 113.324 248.515 112.558 247.719C103.25 238.038 99.7263 230.463 98.2127 227.198C97.7481 226.196 98.1839 225.007 99.186 224.542Z" fill="#FF0000"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M115.46 224.99C116.215 225.796 116.173 227.062 115.367 227.817C110.387 232.48 103.757 242.005 100.685 247.332C100.133 248.288 98.9101 248.617 97.9533 248.065C96.9964 247.513 96.668 246.29 97.2198 245.333C100.375 239.862 107.236 229.951 112.633 224.897C113.439 224.142 114.705 224.183 115.46 224.99Z" fill="#FF0000"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M53.7586 3.95783C53.7722 2.02488 55.3501 0.468927 57.2831 0.48251C59.7744 0.500017 62.3336 0.682773 64.9592 1.03028C66.8755 1.28391 68.2234 3.04297 67.9697 4.95925C67.7161 6.87554 65.9571 8.22339 64.0408 7.96976C61.6851 7.65798 59.4166 7.49768 57.2339 7.48234C55.3009 7.46875 53.745 5.89078 53.7586 3.95783ZM41.647 6.3787C42.4653 8.12998 41.7089 10.213 39.9576 11.0312C36.0229 12.8696 32.4372 15.422 29.1993 18.6855C27.8378 20.0577 25.6218 20.0664 24.2496 18.705C22.8774 17.3435 22.8687 15.1275 24.2301 13.7553C28.0128 9.94266 32.2688 6.8972 36.9945 4.68926C38.7458 3.87103 40.8288 4.62742 41.647 6.3787ZM17.3544 28.9549C19.0974 29.7906 19.833 31.881 18.9974 33.624C17.1222 37.5356 15.4707 41.8811 14.0518 46.6533C13.5009 48.5062 11.5523 49.5616 9.69944 49.0107C7.84661 48.4598 6.79119 46.5112 7.3421 44.6583C8.85202 39.5801 10.6305 34.8842 12.6853 30.598C13.5209 28.855 15.6113 28.1193 17.3544 28.9549ZM7.11129 61.0838C9.02284 61.371 10.3397 63.1534 10.0525 65.0649C9.70799 67.3582 9.40246 69.7149 9.13617 72.1342C8.89819 74.2963 8.68748 76.4881 8.5032 78.7079C8.34327 80.6343 6.652 82.0663 4.72563 81.9064C2.79926 81.7465 1.36727 80.0552 1.52719 78.1288C1.71644 75.8493 1.93309 73.5951 2.17819 71.3683C2.45409 68.8618 2.77135 66.4136 3.13017 64.025C3.41734 62.1135 5.19974 60.7967 7.11129 61.0838ZM4.17328 92.7575C6.10577 92.802 7.6363 94.4047 7.59183 96.3371C7.49175 100.686 7.47463 105.113 7.53481 109.606C7.5607 111.539 6.01482 113.127 4.082 113.153C2.14918 113.178 0.561327 111.633 0.535439 109.7C0.474199 105.127 0.491523 100.616 0.593685 96.1761C0.638156 94.2436 2.2408 92.7131 4.17328 92.7575ZM4.45924 124.015C6.38943 123.911 8.0385 125.391 8.14254 127.321C8.37884 131.705 8.67741 136.134 9.03335 140.598C9.18701 142.525 7.74952 144.211 5.82264 144.365C3.89576 144.519 2.20916 143.081 2.0555 141.154C1.69506 136.634 1.3924 132.145 1.15268 127.698C1.04865 125.768 2.52904 124.119 4.45924 124.015ZM6.85392 155.183C8.7754 154.972 10.5039 156.359 10.7146 158.28C11.1966 162.675 11.7264 167.091 12.2994 171.517C12.5476 173.434 11.1947 175.189 9.27768 175.437C7.36068 175.686 5.60547 174.333 5.35732 172.416C4.77877 167.946 4.24356 163.486 3.75635 159.043C3.54562 157.122 4.93245 155.393 6.85392 155.183ZM10.8014 186.195C12.7121 185.903 14.4981 187.215 14.7906 189.126C15.1269 191.323 15.4723 193.52 15.8263 195.716C16.1995 198.031 16.6701 200.196 17.2281 202.219C17.7419 204.083 16.6479 206.01 14.7844 206.524C12.9209 207.038 10.9938 205.944 10.48 204.08C9.85009 201.796 9.32673 199.381 8.91551 196.83C8.55862 194.617 8.2103 192.401 7.87112 190.184C7.5787 188.274 8.89062 186.488 10.8014 186.195ZM19.9236 217.065C21.4222 215.844 23.6268 216.069 24.8478 217.568C27.6246 220.976 30.8907 223.671 34.5327 225.807C36.2001 226.785 36.7589 228.929 35.7809 230.597C34.803 232.264 32.6585 232.823 30.9912 231.845C26.6936 229.324 22.7698 226.1 19.4209 221.989C18.1999 220.491 18.425 218.286 19.9236 217.065ZM46.8458 234.485C47.2281 232.59 49.074 231.364 50.9688 231.747C55.3081 232.622 59.8337 233.142 64.4267 233.445C66.3555 233.572 67.816 235.239 67.6888 237.168C67.5616 239.097 65.8949 240.557 63.9661 240.43C59.1597 240.113 54.311 239.562 49.5846 238.608C47.6897 238.226 46.4636 236.38 46.8458 234.485ZM84.8185 240.823C84.1939 240.826 83.564 240.83 82.9284 240.833C80.9954 240.842 79.4207 239.283 79.4113 237.35C79.4018 235.417 80.9611 233.842 82.8941 233.833C83.519 233.83 84.1424 233.826 84.7634 233.823C86.5111 233.813 88.2392 233.804 89.9238 233.804C91.8568 233.804 93.4238 235.371 93.4238 237.304C93.4238 239.237 91.8568 240.804 89.9238 240.804C88.26 240.804 86.5603 240.813 84.8185 240.823Z" fill="black"/>
        </svg>`
    }

    const body = document.createElement('a')
    body.classList.add('place__body')
    body.setAttribute('href', place.URL)

    const imageWrapper = document.createElement('div')
    imageWrapper.classList.add('place__image-wrapper')

    const image = document.createElement('img')
    image.classList.add('place__image')
    image.setAttribute('src', place.imagePath)
    image.setAttribute('loading', 'lazy')

    imageWrapper.append(image)
    
    const info = document.createElement('div')
    info.classList.add('place__info')

    const title = document.createElement('div')
    title.classList.add('place__info-title')

    const titleHeading = document.createElement('h4')
    titleHeading.classList.add('fw-600')
    if (localStorage.getItem('language') === 'english') {
        titleHeading.textContent = place.english.title
    } else {
        titleHeading.textContent = place.russian.title
    }

    title.append(titleHeading)
    
    const description = document.createElement('div')
    description.classList.add('place__info-description')

    const descriptionParagraph = document.createElement('p')
    const texts = localStorage.getItem('language') === 'english' ? Object.assign({}, place.english) : Object.assign({}, place.russian)
    descriptionParagraph.innerHTML = texts.workingDaysText + '<br>' + texts.workingHoursText + '<br>' + texts.entryCostText

    description.append(descriptionParagraph)

    info.append(title, description)
    body.append(imageWrapper, info)
    container.append(wayWrapper, body)
    document.querySelector('.places__list').append(container)

    // добавление инфы в фильтры // upd 12/27/24: ???
}
places.forEach((place, index) => createAPlace(place, index))

const filtersDefault = {
    search: '',
    district: [],
    entryCost: [0, 10e6],
    workingDays: [],
    isRoundTheClock: false
}
const filters = Object.assign({}, filtersDefault)

function changeFilter(name, value) {
    switch (name) {
        case ('search'):
            filters.search = value
            break
        case ('district'):
            filters.district = value
            break
        case ('entryCost'):
            filters.entryCost = value
            break
        case ('workingDays'):
            filters.workingDays = value
            break
        case ('isRoundTheClock'):
            filters.isRoundTheClock = value
            break
    }

    const searchValue = filters.search
    delete filters['search']
    delete filtersDefault['search']

    const isDefault = JSON.stringify(filters) === JSON.stringify(filtersDefault)
    const resetAllButton = document.getElementById('resetFiltersButton')

    filters['search'] = searchValue
    filtersDefault['search'] = ''

    if (!isDefault && resetAllButton.classList.contains('button--disabled')) {
        resetAllButton.classList.remove('button--disabled')
        resetAllButton.removeAttribute('disabled')
    }
    else if (isDefault && !resetAllButton.classList.contains('button--disabled')) {
        resetAllButton.classList.add('button--disabled')
        resetAllButton.setAttribute('disabled', true)
    }
}


function openFilterList(filter) {
    const headerButton = filter.querySelector('.filter__header')
    const filterList = filter.querySelector('.filter__body')

    headerButton.classList.add('filter__header--active')
    filterList.style.display = 'flex'
    setTimeout(() => {
        filterList.classList.remove('filter__body--closed')
    }, 200);
}
function closeFilterList(filter) {
    const headerButton = filter.querySelector('.filter__header')
    const filterList = filter.querySelector('.filter__body')

    const inputs = filter.querySelectorAll('input')
    const arrayFromInputs = Array.from(inputs)

    if (!arrayFromInputs.some(input => (input.type === 'checkbox' && input.checked) || (input.type === 'number' && input.value !== ''))) {
        headerButton.classList.remove('filter__header--active')
    }

    filterList.classList.add('filter__body--closed')
    setTimeout(() => {
        filterList.style.display = 'none'
    }, 200);
}
function resetFilter(filter, inputs) {
    noRender = true
    inputs.forEach((input, index) => {
        if (index === inputs.length - 1) { noRender = false }
        if (input.checked && input.type === 'checkbox') { input.checked = false }
        else if (input.value && input.type === 'number') { input.value = '' }
        input.dispatchEvent(new Event('change'))
    })

    closeFilterList(filter)
}

const filtersList = document.querySelectorAll('.filter')
filtersList.forEach(filter => {
    const headerButton = filter.querySelector('.filter__header')
    const filterList = filter.querySelector('.filter__body')
    const filterDataNumber = filter.dataset.number
    const inputs = filter.querySelectorAll('input')
    const resetButton = filter.querySelector('.filter__reset-button')

    headerButton.addEventListener('click', () => {
        filtersList.forEach(filter => {
            if (filter.dataset.number !== filterDataNumber) { closeFilterList(filter) }
        })

        filterList.classList.contains('filter__body--closed') ? openFilterList(filter) : closeFilterList(filter)

        window.addEventListener('click', event => {
            if (!event.target.closest('.filter')) { closeFilterList(filter) }
        })
    })

    inputs.forEach(input => {
        input.addEventListener('change', () => {
            let inputName
            switch (filterDataNumber) {
                case '1':
                    inputName = input.id.split('DistrictInput')[0].toLowerCase()
                    if (input.checked) {
                        changeFilter('district', filters.district.concat(inputName))
                    } else {
                        const index = filters.district.indexOf(inputName)
                        if (index !== -1) {
                            const firstSlice = filters.district.slice(0, index)
                            const secondSlice = filters.district.slice(index + 1, 8)
                            changeFilter('district', firstSlice.concat(secondSlice))
                        }
                    }
                    break
                case '2':
                    const isFreeInput = document.getElementById('isFreeInput')
                    const priceFromInput = document.getElementById('priceFromInput')
                    const priceToInput = document.getElementById('priceToInput')
                    if (isFreeInput.checked) {
                        priceFromInput.setAttribute('disabled', 'true')
                        priceToInput.setAttribute('disabled', 'true')
                        priceFromInput.classList.add('from-to-input__from--disabled')
                        priceToInput.classList.add('from-to-input__to--disabled')

                        changeFilter('entryCost', [0, 0])
                    } else {
                        priceFromInput.removeAttribute('disabled')
                        priceToInput.removeAttribute('disabled')
                        priceFromInput.classList.remove('from-to-input__from--disabled')
                        priceToInput.classList.remove('from-to-input__to--disabled')

                        const priceFrom = Number(priceFromInput.value)
                        let priceTo
                        priceToInput.value === '' ? priceTo = 10e6 : priceTo = Number(priceToInput.value)
                        changeFilter('entryCost', [priceFrom, priceTo])
                    }
                    break
                case '3':
                    inputName = input.id.split('Input')[0].toLowerCase()
                    if (input.checked) {
                        changeFilter('workingDays', filters.workingDays.concat(inputName))
                    } else {
                        const index = filters.workingDays.indexOf(inputName)
                        if (index !== -1) {
                            const firstSlice = filters.workingDays.slice(0, index)
                            const secondSlice = filters.workingDays.slice(index + 1, 8)
                            changeFilter('workingDays', firstSlice.concat(secondSlice))
                        }
                    }
                    break
            }
            renderPlaces()
        })
    });

    resetButton.addEventListener('click', () => {
        resetFilter(filter, inputs)
    })
})

const isRoundTheClockButton = document.getElementById('isRoundTheClockFilterButton')
isRoundTheClockButton.addEventListener('click', () => {
    if (isRoundTheClockButton.classList.contains('filter--active')) {
        isRoundTheClockButton.classList.remove('filter--active')
        changeFilter('isRoundTheClock', false)
    } else {
        isRoundTheClockButton.classList.add('filter--active')
        changeFilter('isRoundTheClock', true)
    }
    renderPlaces()
})

const resetAllButton = document.getElementById('resetFiltersButton')
resetAllButton.addEventListener('click', () => {
    filtersList.forEach(filter => {
        const inputs = filter.querySelectorAll('input')
        resetFilter(filter, inputs)
    })

    if (isRoundTheClockButton.classList.contains('filter--active')) {
        isRoundTheClockButton.classList.remove('filter--active')
        changeFilter('isRoundTheClock', false)
    }
    renderPlaces()
})



const search = document.querySelector('.search')
const searchInput = search.querySelector('.search__input')
const searchClearButton = search.querySelector('.search__input-clear-button')
const searchButton = search.querySelector('.search__button')

searchClearButton.addEventListener('click', () => {
    if (searchInput.value) {
        searchInput.value = ''
        searchInput.dispatchEvent(new Event('input'))
    }
    searchInput.focus()
    searchInput.select()
})
searchInput.addEventListener('input', () => {
    const value = searchInput.value

    if (value !== '') {
        if (!searchClearButton.style.cursor) {
            searchClearButton.style.cursor = 'pointer'
        }
    } else if (searchClearButton.style.cursor) { searchClearButton.style.cursor = null }

    changeFilter('search', value)
    renderPlaces()
})
// searchButton.addEventListener('click', () => {
//     const value = searchInput.value
//     changeFilter('search', value)
//     renderPlaces()
// })

let noRender = false
function renderPlaces() {   
    if (noRender) { return }

    const placesList = document.querySelectorAll('.place')
    placesList.forEach(place => place.remove())

    places.forEach((place, index) => {
        const { district, entryCost, workingDays, isRoundTheClock } = place.filters

        const isDistrict = filters.district.length === 0 ? true : filters.district.includes(district)
        const isEntryCost = filters.entryCost[0] <= entryCost && entryCost <= filters.entryCost[1]
        const isWorkingDays = filters.workingDays.length === 0 ? true : filters.workingDays.every(value => workingDays.includes(value))
        const isAroundTheClock = isRoundTheClock >= filters.isRoundTheClock

        handleString = (str) => str.replace(/[^a-zA-Zа-яА-ЯёЁ0-9\s]/g, "").trim().toLowerCase().split(' ')
        const searchWords = handleString(filters.search)
        const title = localStorage.getItem('language') === 'english' ? handleString(place.english.title) : handleString(place.russian.title)
        const isSearch = searchWords.every(searchWord => title.some(titleWord => titleWord.indexOf(searchWord) === 0))
        
        if (isDistrict && isEntryCost && isWorkingDays && isAroundTheClock && isSearch) {
            createAPlace(place, index)
        }
    })
    hideOrShowPlacesBackgrounds()
}



function increaseHeightOfPlacesBody() {
    const placesBody = document.querySelector('.places__body')
    const windowWidth = window.innerWidth
    
    let windowPaddingBottom
    if (windowWidth >= 1024) { windowPaddingBottom = 40 }
    else if (windowWidth >= 480) { windowPaddingBottom = 50 }
    else { windowPaddingBottom = 30 }
    
    const windowHeight = window.innerHeight
    const fullscreenHeight = windowHeight - windowPaddingBottom * 2

    placesBody.style.height = Math.max(fullscreenHeight, 300) + 'px'
}
increaseHeightOfPlacesBody()
window.addEventListener('resize', increaseHeightOfPlacesBody)

function hideOrShowPlacesBackgrounds() {
    const placesBody = document.querySelector('.places__body')
    const placesList = placesBody.querySelectorAll('.place')
    const waysList = placesBody.querySelectorAll('.place__background-way')
    const placesBodyRectLeft = placesBody.getBoundingClientRect().left

    if (placesList.length === 0) { return }

    if (waysList[0].style.display === 'none') { 
        const wayWidth = 115
        const wayTranslateX = -10
        
        const placeRectLeft = placesList[0].getBoundingClientRect().left
        const wayRectLeft = placeRectLeft - wayWidth + wayTranslateX 

        if (wayRectLeft > placesBodyRectLeft) {
            waysList.forEach(way => way.style.display = 'block')
        }
    }
    else {
        let areWaysFit = true
        for (let i = 0; i < waysList.length; i++) {
            const way = waysList[i]
            const wayRectLeft = way.getBoundingClientRect().left

            const wayOffsetX = 20
            
            if (wayRectLeft < placesBodyRectLeft + wayOffsetX) {
                areWaysFit = false
                break
            }
        }
    
        if (!areWaysFit) {
            waysList.forEach(way => way.style.display = 'none')
        }
    }
}
hideOrShowPlacesBackgrounds()
window.addEventListener('resize', hideOrShowPlacesBackgrounds)
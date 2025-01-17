if (localStorage.getItem('language') === 'english') { setLanguage('english') }

function setLanguage(choise) {
    const english = {
        title: 'KrasGid | About us',
        places: 'Places',
        aboutUs: 'About us',
        feedback: 'Feedback',
        introTextFirstParagraph: 'KrasGid is your personal assistant for exploring all the beauties of Krasnoyarsk.',
        introTextSecondParagraph: 'With the help of our service, you will be able to learn not only about the beautiful and interesting places of the city, but also about the ways to get there and the cost of the hike.',
        introTextThirdParagraph: 'On this page there is a guide video, after watching which, it will become a little easier for you to get used to the functionality of KrasGid!',
        startButton: 'Get started!',
        fullscreenButton: 'fullscreen mode'
    }

    const russian = {
        title: 'КрасГид | О нас',
        places: 'Места',
        aboutUs: 'О нас',
        feedback: 'Обратная связь',
        introTextFirstParagraph: 'КрасГид - ваш персональный помощник по изучению всех красот города Красноярска.',
        introTextSecondParagraph: 'С помощью нашего сервиса вы сможете узнать не только о красивых и интересных местах города, но и о способах туда добраться и стоимости похода.',
        introTextThirdParagraph: 'На этой странице есть обучающий ролик, посмотрев который, вам станет немного проще освоиться в функционале КрасГида!',
        startButton: 'Начнём!',
        fullscreenButton: 'полноэкранный режим'
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

    document.getElementById('introTextFirstParagraph').textContent = language.introTextFirstParagraph
    document.getElementById('introTextSecondParagraph').textContent = language.introTextSecondParagraph
    document.getElementById('introTextThirdParagraph').textContent = language.introTextThirdParagraph

    document.getElementById('startButton').querySelector('p').textContent = language.startButton
    document.getElementById('fullscreenButton').querySelector('p').textContent = language.fullscreenButton
}



const videoTutorial = document.getElementById('videoTutorial')
videoTutorial.addEventListener('click', () => {
    if (window.innerHeight !== videoTutorial.clientHeight) {
        videoTutorial.paused ? videoTutorial.play() : videoTutorial.pause()
    }
})

const fullscreenButton = document.getElementById('fullscreenButton')
fullscreenButton.addEventListener('click', () => {
    function openOverlay() {
        function showModalAndSyncVideos() {
            fullscreenVideoOverlay.showModal()
            document.querySelector('body').style.overflow = 'hidden'

            videoTutorialFullscreen.currentTime = videoTutorial.currentTime
            videoTutorial.paused ? videoTutorialFullscreen.pause() : videoTutorialFullscreen.play()
        }

        if (window.innerWidth >= 768 && window.innerHeight > 500) {
            showModalAndSyncVideos()
        } else {
            videoTutorial.requestFullscreen()
            videoTutorial.addEventListener('fullscreenerror', () => {
                showModalAndSyncVideos()

                let videoWrapperNewWidth = (window.innerWidth - 100) / 9 * 16
                while (videoWrapperNewWidth > window.innerHeight - 120 && videoWrapperNewWidth / 16 * 9 < window.innerWidth - 20) { videoWrapperNewWidth-- }
                while (videoWrapperNewWidth < window.innerHeight - 120 && videoWrapperNewWidth / 16 * 9 < window.innerWidth - 20) { videoWrapperNewWidth++ }

                videoTutorialFullscreenWrapper.style.width = videoWrapperNewWidth + 'px'
                videoTutorialFullscreenWrapper.style.rotate = '90deg'
                videoTutorialFullscreen.style.translate = '0px 0px'
            })
        }
    }
    
    function closeOverlay() {
        overlayCloseButton.click()
        document.querySelector('body').style.overflow = null
        videoTutorialFullscreenWrapper.style.width = null
        videoTutorialFullscreenWrapper.style.rotate = null
        videoTutorialFullscreen.style.translate = null
        
        videoTutorial.currentTime = videoTutorialFullscreen.currentTime
        videoTutorialFullscreen.paused ? videoTutorial.pause() : videoTutorial.play()
    }
    
    const fullscreenVideoOverlay = document.getElementById('fullscreenVideoOverlay')
    const videoTutorialFullscreenWrapper = document.querySelector('.fullscreen-video-overlay__video-wrapper')
    const videoTutorialFullscreen = document.getElementById('videoTutorialFullscreen')
    const overlayCloseButtonWrapper = fullscreenVideoOverlay.querySelector('.fullscreen-video-overlay__close-button-wrapper')
    const overlayCloseButton = overlayCloseButtonWrapper.querySelector('.close-button')
    
    openOverlay()
    overlayCloseButtonWrapper.addEventListener('click', closeOverlay)
    
    window.addEventListener('resize', () => {
        if ((window.innerWidth < 768 || window.innerHeight <= 500) && fullscreenVideoOverlay.hasAttribute('open')) {
            closeOverlay()
            videoTutorial.requestFullscreen()
        }
    })
})



const footer = document.querySelector('footer')
const footerBackground = document.getElementById('footerBackground');
['load', 'resize', 'scroll'].forEach(event => {
    window.addEventListener(event, placeFooter)
})

function placeFooter() {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    if (windowWidth < 768) { return }

    const scrolledHeight = window.scrollY
    const footerBackgroundHeight = 360
    const footerBackgroundOffsetTop = windowHeight - footerBackgroundHeight

    footer.style.height = `calc(100% + ${scrolledHeight}px)`
    if (footerBackground.style.top) { footerBackground.style.top = null }

    if (windowWidth >= 1024) {
        const relateElementOffsetTop = document.getElementById('fullscreenButton').getBoundingClientRect().top
        if (footerBackgroundOffsetTop < relateElementOffsetTop + 50) {
            footerBackground.style.top = relateElementOffsetTop + 50 + scrolledHeight + 'px'
        }
    }
    else {
        const relateElementOffsetTop = document.getElementById('startButton').getBoundingClientRect().top
        if (footerBackgroundOffsetTop < relateElementOffsetTop - 30) {
            footerBackground.style.top = relateElementOffsetTop - 30 + scrolledHeight + 'px'
        }
    }

    const bodyHeight = document.querySelector('body').clientHeight
    if (bodyHeight - scrolledHeight + 1 < windowHeight) {
        window.scrollBy(0, bodyHeight - scrolledHeight - windowHeight)
    }
}
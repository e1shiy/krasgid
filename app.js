const dropmenu = document.querySelectorAll('.dropmenu')
dropmenu.forEach(menu => {
    const header = menu.querySelector('.dropmenu__header')
    const list = menu.querySelector('.dropmenu__body-list')
    const options = list.querySelectorAll('.dropmenu__body-option')

    header.addEventListener('click', () => {
        // "if (!list.style.maxHeight)" same as "if (maxHeight !== 0)"

        function openOptionList(dropmenu) {
            const header = dropmenu.querySelector('.dropmenu__header')
            const list = dropmenu.querySelector('.dropmenu__body-list')

            header.classList.add('dropmenu__header--clicked')
            setTimeout(() => {
                list.style.maxHeight = list.scrollHeight + 'px'
                list.style.borderWidth = 'var(--border-width-bold)'
            }, 200);
        }

        function closeOptionList(dropmenu) {
            const header = dropmenu.querySelector('.dropmenu__header')
            const list = dropmenu.querySelector('.dropmenu__body-list')

            list.style.maxHeight = '0px'
            setTimeout(() => {
                header.classList.remove('dropmenu__header--clicked')
                list.style.borderWidth = null
                list.style.maxHeight = null
            }, 200);
        }
        
        if (!list.style.maxHeight) { openOptionList(menu) }
        else { closeOptionList(menu) }

        dropmenu.forEach(drop => {
            if (menu.dataset.number !== drop.dataset.number) {                
                closeOptionList(drop)
            }
        })
        
        options.forEach(option => {
            option.addEventListener('click', () => {
                const choice = option.textContent.toLowerCase().trim()
                setLanguage(choice)
                closeOptionList(menu)
            })
        })

        window.addEventListener('click', event => {
            if (!event.target.closest('.dropmenu') && list.style.maxHeight) {
                closeOptionList(menu)
            }
        })

        window.addEventListener('resize', () => {
            if (list.style.maxHeight) {
                list.style.maxHeight = list.scrollHeight + 'px'
            }
        })
    })
})

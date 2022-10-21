document.querySelector('html').classList.add('twitch-theme')

const menuButton = document.querySelector('[data-test-selector="user-menu__toggle"]')
menuButton.addEventListener('click', () => {
  setTimeout(() => {
    const menuWrapper = document.querySelector('[data-test-selector="user-menu-dropdown__main-menu"]')

    const darkThemeOption = menuWrapper.querySelector('.Layout-sc-nxg1ff-0.FTFzP').children[2]
    const div = document.createElement('div')
    const stringHTML = `
     <div class="Layout-sc-nxg1ff-0 dwuicp">
      <div class="Layout-sc-nxg1ff-0 gcwIMz">
      
      </div>
    </div>
`
    darkThemeOption.after(div)
    div.innerHTML = stringHTML
  }, 500)


})




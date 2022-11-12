document.querySelector('html').classList.add('twitch-theme')
const r = document.querySelector(':root')
let colorStored = localStorage.getItem('color-picked')
if (colorStored !== undefined) {
  setColorPrimary(colorStored)
}
const menuButton = document.querySelector('[data-test-selector="user-menu__toggle"]')

menuButton.addEventListener('click', () => {
  const myInterval = setInterval(() => {
    if (document.querySelector('[data-test-selector="user-menu-dropdown__main-menu"]')) {
      clearInterval(myInterval)
      if (!document.getElementById('hue-range')) {
        render()
      }
    }
  }, 100)


  function render() {
    const menuWrapper = document.querySelector('[data-test-selector="user-menu-dropdown__main-menu"]')
    const darkThemeOption = menuWrapper.querySelector('.Layout-sc-nxg1ff-0.FTFzP').children[2]
    const div = document.createElement('div')
    const stringHTML = `<div id="hue" class="hue"></div>`
    darkThemeOption.after(div)
    div.innerHTML = stringHTML

    let parent = document.getElementById('hue')
    parent.style.height = `18px`
    parent.height = 15

    let range = document.createElement('input')
    range.id = 'hue-range'
    range.type = 'range'
    range.min = 0
    range.max = 360
    colorStored = localStorage.getItem('color-picked')

    if(colorStored === undefined){
      range.value = '350'
    }

    range.value = colorStored
    onHuePicked(colorStored)

    parent.appendChild(range)

    range.onchange = () => onHuePicked(range.value)
    range.oninput = () => onHuePicked(range.value)

    function onHuePicked(hue) {
      setColorPrimary(hue)
      localStorage.setItem('color-picked', hue)
      r.style.setProperty('--primary-color-num', hue)
    }
  }

})

function setColorPrimary(hue) {
  r.style.setProperty('--primary-color-num', hue)
  if (hue <= 200 && hue >= 25) {
    r.style.setProperty('--color-text-button-primary', 'var(--primary-color-5)')
    r.style.setProperty('--primary-color-6', 'var(--primary-color-5)')
    r.style.setProperty('--color-fill-light-svg', 'var(--primary-color-8)')
    r.style.setProperty('--color-background-tag-hover', 'var(--primary-color-7)')
    r.style.setProperty('--color-text-button-overlay-primary', 'var(--primary-color-7)')

  } else {
    r.style.setProperty('--color-text-button-primary', 'var(--color-white)')
    r.style.setProperty('--primary-color-6', 'var(--color-white)')
    r.style.setProperty('--color-fill-light-svg', 'var(--primary-color-3')
    r.style.setProperty('--color-background-tag-hover', 'var(--primary-color-2)')
    r.style.setProperty('--color-text-button-overlay-primary', 'var(--primary-color-3)')
  }
}





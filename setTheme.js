import { HuePicker }
  from './js/HuePicker.mjs'

document.querySelector('html').classList.add('twitch-theme')
const r = document.querySelector(':root')
let colorStored = localStorage.getItem('color-picked')

//restoreColor
if( colorStored !== undefined) {
 setColorPrimary(colorStored)
}
const menuButton = document.querySelector('[data-test-selector="user-menu__toggle"]')
menuButton.addEventListener('click', () => {
  setTimeout(() => {
    console.log('hello')
    const menuWrapper = document.querySelector('[data-test-selector="user-menu-dropdown__main-menu"]')
    const darkThemeOption = menuWrapper.querySelector('.Layout-sc-nxg1ff-0.FTFzP').children[2]
    const div = document.createElement('div')
    const stringHTML = `<div id="hue" class="hue"></div>`
    darkThemeOption.after(div)
    div.id = 'container'
    div.innerHTML = stringHTML

    let parent = document.getElementById("hue")
    parent.style.height = `18px`
    parent.height = 15
    colorStored = localStorage.getItem('color-picked')
    setColorPrimary(colorStored)

    const huePicker = new HuePicker({
      id:'hue-range',
      parent

    })
      .setId("hue-range")
      .setParent(parent)
      .setMin(0)
      .setMax(360)
      .setValue( localStorage.getItem('color-picked'))
      .setWidth('100%')
      .setHeight('30px')
      .setCallback(onHuePicked)
      .build()
    huePicker.init()
    console.log(huePicker)
  }, 300)


})

function onHuePicked(hue) {
  setColorPrimary(hue)
  localStorage.setItem('color-picked', hue)
}

function setColorPrimary(hue){
  r.style.setProperty('--primary-color-num', hue)
  if(hue <= 193 && hue >= 25 ){
    r.style.setProperty('--color-text-button-primary', 'var(--primary-color-5)')
    r.style.setProperty('--primary-color-6', 'var(--primary-color-5)')
  }else{
    r.style.setProperty('--color-text-button-primary', 'var(--color-white)')
    r.style.setProperty('--primary-color-6', 'var(--color-white)')
  }
}







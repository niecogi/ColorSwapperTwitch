document.querySelector('html').classList.add('twitch-theme')
const r = document.querySelector(':root')
const colorStored = localStorage.getItem('color-picked')


if( colorStored !== undefined) {
  r.style.setProperty('--primary-color-num', colorStored)
}
const menuButton = document.querySelector('[data-test-selector="user-menu__toggle"]')
menuButton.addEventListener('click', () => {
  setTimeout(() => {
    const menuWrapper = document.querySelector('[data-test-selector="user-menu-dropdown__main-menu"]')
    const darkThemeOption = menuWrapper.querySelector('.Layout-sc-nxg1ff-0.FTFzP').children[2]
    const div = document.createElement('div')
    const stringHTML = `<div id="container" class="container"></div>`
    darkThemeOption.after(div)
    div.innerHTML = stringHTML

    let parent = document.getElementById("container")

    createHuePicker(parent, hue => {
      localStorage.setItem('color-picked', hue)
      r.style.setProperty('--primary-color-num', hue)
    }, colorStored)

    function createHuePicker(parent, callback, initialHue = 0) {
      let canvas = document.createElement("canvas")
      let range = document.createElement("input")

      range.id = "hue-range"
      canvas.id = "hue-canvas"
      canvas.style.width = '100%'
      canvas.height = 30

      canvas.addEventListener("mousedown", ev => {
        if(ev.button !== 0) {
          return;
        }
        let hue = Math.round( ev.offsetX/ 2 );
        range.value = hue;
        onHuePicked(hue);
      })
      range.type = "range"
      range.style.width = `100%`
      range.style.height= `${canvas.height}px`
      range.min = 0
      range.max = 360

      range.value = initialHue
      onHuePicked(initialHue)

      range.onchange = () => onHuePicked(range.value)
      range.oninput = () => onHuePicked(range.value)

      parent.appendChild(canvas)
      parent.appendChild(range)

      function onHuePicked(hue) {
        if(callback) {
          callback(hue)
        }
      }
    }
  }, 300)


})





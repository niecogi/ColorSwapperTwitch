document.querySelector('html').classList.add('twitch-theme')
var r = document.querySelector(':root');

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
      r.style.setProperty('--primary-color-num', hue)

    }, 200)

    function createHuePicker(parent, callback, initialHue = 0) {
      let canvas = document.createElement("canvas")
      let range = document.createElement("input")

      range.id = "hue-range"
      canvas.id = "hue-canvas"

      //canvas.width = 360*2;
      canvas.style.width = '100%';
      canvas.height = 30;

      canvas.addEventListener("mousedown", ev => {
        if(ev.button !== 0) {
          return;
        }
        let hue = Math.round( ev.offsetX / 2 );
        range.value = hue;
        onHuePicked(hue);
      })
      range.type = "range";
      //range.style.width = `${canvas.width}px`;
      range.style.height= canvas.height
      range.min = 0;
      range.max = 360;

      range.value = initialHue;
      onHuePicked(initialHue);

      range.onchange = () => onHuePicked(range.value);

      parent.appendChild(canvas);
      parent.appendChild(range);

      let ctx = canvas.getContext("2d");
      //coloring hue

      for(let i = 0; i < 360; i++) {
        let color = `hsl(${i}, 92%, 75%)`;
        line(ctx, i, 0, i, canvas.height - 1, color, 1);
      }
      function onHuePicked(hue) {
        if(callback) {
          callback(hue);
        }
      }

      function line(ctx, x1, y1, x2, y2, color, width) {
        ctx.beginPath();

        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);

        ctx.stroke();
      }
    }
  }, 300)


})





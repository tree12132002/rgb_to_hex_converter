const palette = document.querySelector('.palette')
const redOut = document.querySelector('.red-out')
const redIn = document.querySelector('.red-in')
const greenOut = document.querySelector('.green-out')
const greenIn = document.querySelector('.green-in')
const blueOut = document.querySelector('.blue-out')
const blueIn = document.querySelector('.blue-in')
const colorOut = document.querySelector('.color-out')
const body = document.body

function color() {
  let redNumber = Number(redIn.value).toString(16)
  let greenNumber = Number(greenIn.value).toString(16)
  let blueNumber = Number(blueIn.value).toString(16)
  if (redNumber.length < 2) {
    redNumber = "0" + redNumber
  }
  if (greenNumber.length < 2) {
    greenNumber = "0" + greenNumber
  }
  if (blueNumber.length < 2) {
    blueNumber = "0" + blueNumber
  }
  let colornumber = '#' + `${redNumber}` + `${greenNumber}` + `${blueNumber}`
  colorOut.innerText = colornumber
  body.style.backgroundColor = colornumber
}

palette.addEventListener('input', function (event) {
  let target = event.target
  if (target.classList.contains('red-in')) {
    redOut.value = redIn.value
    color()
  } else if (target.classList.contains('green-in')) {
    greenOut.value = greenIn.value
    color()
  } else if (target.classList.contains('blue-in')) {
    blueOut.value = blueIn.value
    color()
  }
})